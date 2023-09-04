import { Handler } from 'aws-lambda';
import { EmbedBuilder, WebhookClient } from 'discord.js';
import { CostExplorerClient, GetCostAndUsageCommand } from '@aws-sdk/client-cost-explorer';
import { subMonths, format, parse, getWeek } from 'date-fns/esm';

const webhookUrl = process.env.WEBHOOK_URL;

type TimelineDataPoint = {
  start: Date;
  end: Date;
  cost: string;
};

export const handler: Handler = async () => {
  const webhookClient = new WebhookClient({
    url: webhookUrl,
  });
  const client = new CostExplorerClient({
    region: process.env.AWS_REGION,
  });
  const metrics = await client.send(
    new GetCostAndUsageCommand({
      Granularity: 'DAILY',
      Metrics: ['BlendedCost'],
      TimePeriod: {
        Start: format(subMonths(new Date(), 1), 'yyyy-MM-dd'),
        End: format(new Date(), 'yyyy-MM-dd'),
      },
    }),
  );
  const embed = new EmbedBuilder()
    .setTitle('AWS Cost Explorer | Usage past month')
    .setDescription('Lists current billing usage for each day for the past month.')
    .setTimestamp()
    .setColor(0x48b9c7);

  const timelineEntries: TimelineDataPoint[] = metrics.ResultsByTime.map((result) => {
    const start = parse(result.TimePeriod.Start, 'yyyy-MM-dd', new Date());
    const end = parse(result.TimePeriod.End, 'yyyy-MM-dd', new Date());
    const cost = `${parseFloat(result.Total.BlendedCost.Amount).toFixed(2)} ${result.Total.BlendedCost.Unit}`;

    return { start, end, cost };
  });

  const partitions = timelineEntries.reduce<Record<string, TimelineDataPoint[]>>((acc, curr) => {
    const partitionKey = `W${getWeek(curr.start)}`;
    acc[partitionKey] ??= [];
    acc[partitionKey].push(curr);
    return acc;
  }, {});

  for (const [partitionKey, dataPoints] of Object.entries(partitions)) {
    const formattedPoints = dataPoints
      .map((point) => {
        const start = format(point.start, 'do MMM');
        const end = format(point.end, 'do MMM');
        return `${start} - ${end}: **${point.cost}**`;
      })
      .join('\n');
    embed.addFields({
      name: partitionKey,
      value: formattedPoints,
    });
  }

  await webhookClient.send({
    tts: false,
    embeds: [embed],
  });
};

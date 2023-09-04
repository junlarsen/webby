import { Handler } from 'aws-lambda';
import { WebhookClient } from 'discord.js';

const webhookUrl = process.env.WEBHOOK_URL;

export const handler: Handler = async () => {
  const client = new WebhookClient({
    url: webhookUrl,
  });

  await client.send('Hello world from Lambda');
};

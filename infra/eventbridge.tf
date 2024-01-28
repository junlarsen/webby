resource "aws_cloudwatch_event_rule" "fundwatcher" {
  name                = "webby-fundwatcher-cron"
  description         = "Log Webby Fundwatcher metrics to Discord Webhook"
  schedule_expression = "cron(0 4 * * ? *)"
}

resource "aws_cloudwatch_event_target" "fundwatcher_lambda" {
  rule      = aws_cloudwatch_event_rule.fundwatcher.name
  target_id = "lambda"
  arn       = aws_lambda_function.fundwatcher.arn
}

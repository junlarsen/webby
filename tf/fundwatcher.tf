resource "aws_lambda_function" "fundwatcher" {
  function_name = "fundwatcher"
  role          = aws_iam_role.trigger_execution_role.arn
  timeout       = 10
  image_uri     = "${aws_ecr_repository.fundwatcher.repository_url}:latest"
  package_type  = "Image"

  environment {
    variables = {
      WEBHOOK_URL = data.aws_secretsmanager_secret_version.webhook_url.secret_string
    }
  }
}

resource "aws_lambda_permission" "eventbridge_task" {
  statement_id  = "AllowExecutionEventBridge"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.fundwatcher.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.fundwatcher.arn
}
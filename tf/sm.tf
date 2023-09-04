resource "aws_secretsmanager_secret" "webhook_url" {
  name = "fundwatcher/webhook-url"
}

data "aws_secretsmanager_secret_version" "webhook_url" {
  secret_id = aws_secretsmanager_secret.webhook_url.id
}

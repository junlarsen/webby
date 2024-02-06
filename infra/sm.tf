resource "aws_secretsmanager_secret" "webhook_url" {
  name = "webby/fundwatcher/webhook-url"
}

data "aws_secretsmanager_secret_version" "webhook_url" {
  secret_id = aws_secretsmanager_secret.webhook_url.id
}

resource "aws_secretsmanager_secret" "hygraph_token" {
  name = "webby/webby/hygraph-token"
}

data "aws_secretsmanager_secret_version" "hygraph_token" {
  secret_id = aws_secretsmanager_secret.hygraph_token.id
}

resource "aws_secretsmanager_secret" "hygraph_endpoint" {
  name = "webby/webby/hygraph-endpoint"
}

data "aws_secretsmanager_secret_version" "hygraph_endpoint" {
  secret_id = aws_secretsmanager_secret.hygraph_endpoint.id
}

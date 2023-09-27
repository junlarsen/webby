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

resource "aws_secretsmanager_secret" "google_client_id" {
  name = "webby/guard/google-client-id"
}

data "aws_secretsmanager_secret_version" "google_client_id" {
  secret_id = aws_secretsmanager_secret.google_client_id.id
}

resource "aws_secretsmanager_secret" "google_client_secret" {
  name = "webby/guard/google-client-secret"
}

data "aws_secretsmanager_secret_version" "google_client_secret" {
  secret_id = aws_secretsmanager_secret.google_client_secret.id
}

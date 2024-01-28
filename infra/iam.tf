data "aws_iam_policy_document" "lambda_execute_assume" {
  statement {
    sid    = "LambdaExecutionAssume"
    effect = "Allow"
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    actions = ["sts:AssumeRole"]
  }
}

data "aws_iam_policy_document" "cost_explorer_read" {
  statement {
    sid       = "CostExplorerRead"
    effect    = "Allow"
    actions   = ["ce:*"]
    resources = ["*"]
  }
}

resource "aws_iam_role" "trigger_execution_role" {
  name               = "LambdaExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.lambda_execute_assume.json

  inline_policy {
    name   = "CostExplorerRead"
    policy = data.aws_iam_policy_document.cost_explorer_read.json
  }
}

resource "aws_iam_role_policy_attachment" "aws_lambda_execution_role" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.trigger_execution_role.name
}
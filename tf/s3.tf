resource "aws_s3_bucket" "jun_codes" {
  bucket = "m.jun.codes"
}

resource "aws_s3_bucket_cors_configuration" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST", "HEAD"]
    allowed_origins = ["https://m.jun.codes"]
    max_age_seconds = 3600
  }
}

resource "aws_s3_bucket_policy" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id
  policy = data.aws_iam_policy_document.cloudfront_read_access.json
}

resource "aws_s3_bucket_website_configuration" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id

  error_document {
    key = "error.html"
  }

  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = false
}

data "aws_route53_zone" "jun_codes" {
  name = "jun.codes"
}

resource "aws_s3_bucket" "jun_codes" {
  bucket = "jun.codes"
}

resource "aws_s3_bucket_ownership_controls" "example" {
  bucket = aws_s3_bucket.jun_codes.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.jun_codes.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id

  acl = "public-read"

  depends_on = [
    aws_s3_bucket_ownership_controls.example,
    aws_s3_bucket_public_access_block.example,
  ]
}

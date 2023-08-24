data "aws_route53_zone" "jun_codes" {
  name = "jun.codes"
}

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
  policy = <<EOF
    {
      "Version":"2008-10-17",
      "Statement":[{
        "Sid":"AllowPublicRead",
        "Effect":"Allow",
        "Principal": {"AWS": "*"},
        "Action":["s3:GetObject"],
        "Resource":["arn:aws:s3:::m.jun.codes/*"]
      }]
    }
  EOF
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

resource "aws_s3_bucket_acl" "jun_codes" {
  bucket = aws_s3_bucket.jun_codes.id

  acl = "public-read"
}

resource "aws_cloudfront_distribution" "jun_codes" {
  origin {
    domain_name = "m.jun.codes.s3.amazonaws.com"
    origin_id   = "m.jun.codes"
  }

  enabled         = true
  is_ipv6_enabled = true

  default_root_object = "index.html"
  aliases             = ["m.jun.codes"]

  price_class = "PriceClass_100"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "m.jun.codes"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "allow-all"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate_validation.certificate_validation.certificate_arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.1_2016"
  }
}

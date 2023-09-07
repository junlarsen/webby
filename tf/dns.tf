resource "aws_acm_certificate" "certificate" {
  domain_name       = "m.jun.codes"
  validation_method = "DNS"

  provider = aws.us-east-1
}

resource "aws_route53_record" "certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.certificate.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = data.aws_route53_zone.jun_codes.zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_acm_certificate_validation" "certificate_validation" {
  certificate_arn         = aws_acm_certificate.certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_validation : record.fqdn]
  provider                = aws.us-east-1
}


resource "aws_route53_record" "m_jun_codes" {
  zone_id = data.aws_route53_zone.jun_codes.zone_id
  name    = "m.jun.codes"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.jun_codes.domain_name
    zone_id                = aws_cloudfront_distribution.jun_codes.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_acm_certificate" "guard_certificate_validation" {
  domain_name       = "guard.jun.codes"
  validation_method = "DNS"

  provider = aws.us-east-1
}

resource "aws_acm_certificate_validation" "guard_certificate_validation" {
  certificate_arn         = aws_acm_certificate.guard_certificate_validation.arn
  validation_record_fqdns = [for record in aws_route53_record.guard_certificate_validation : record.fqdn]
  provider                = aws.us-east-1
}

resource "aws_route53_record" "guard_certificate_validation" {
  for_each = {
    for dvo in aws_acm_certificate.guard_certificate_validation.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = data.aws_route53_zone.jun_codes.zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

resource "aws_route53_record" "auth_domain" {
  name    = aws_acm_certificate.guard_certificate_validation.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.jun_codes.zone_id
  alias {
    evaluate_target_health = false
    name                   = aws_cognito_user_pool_domain.domain.cloudfront_distribution_arn
    // Fixed value, see docs
    // https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-aliastarget.html
    zone_id = "Z2FDTNDATAQYW2"
  }
}

output "app_url" {
  value = aws_cloudfront_distribution.is4301_frontend_distribution.domain_name
}
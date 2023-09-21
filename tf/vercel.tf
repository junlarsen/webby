resource "vercel_project" "wk" {
  name      = "wk"
  framework = "nextjs"

  git_repository = {
    production_branch = "main"
    type              = "github"
    repo              = "junlarsen/webby"
  }

  build_command  = "cd ../.. && pnpm build:wk"
  root_directory = "apps/wk"
}

resource "vercel_project_domain" "wk_jun_codes" {
  domain     = aws_route53_record.wk_jun_codes_cname.name
  project_id = vercel_project.wk.id
}

resource "vercel_project" "webby" {
  name      = "webmix"
  framework = "remix"

  git_repository = {
    production_branch = "main"
    type              = "github"
    repo              = "junlarsen/webby"
  }

  build_command  = "cd ../.. && pnpm build:webmix"
  root_directory = "apps/webmix"
}

resource "vercel_project_environment_variable" "webby_hygraph_token" {
  project_id = vercel_project.webby.id
  key        = "HYGRAPH_TOKEN"
  value      = data.aws_secretsmanager_secret_version.hygraph_token.secret_string
  target     = ["production"]
}

resource "vercel_project_environment_variable" "webby_hygraph_endpoint" {
  project_id = vercel_project.webby.id
  key        = "HYGRAPH_ENDPOINT"
  value      = data.aws_secretsmanager_secret_version.hygraph_endpoint.secret_string
  target     = ["production"]
}

resource "vercel_project_domain" "jun_codes" {
  domain     = aws_route53_record.jun_codes_a.name
  project_id = vercel_project.webby.id
}

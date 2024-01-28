terraform {
  backend "s3" {
    bucket = "junstack"
    key    = "webby"
    region = "eu-north-1"
  }

  required_version = "~> 1.7.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.34"
    }

    vercel = {
      source  = "vercel/vercel"
      version = "~> 1"
    }
  }
}

provider "aws" {
  region = "eu-north-1"

  default_tags {
    tags = {
      Project = "webby"
    }
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project = "webby"
    }
  }
}

provider "vercel" {}

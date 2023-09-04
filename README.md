# Webby

Monorepo for all applications and infrastructure that runs at https://jun.codes

**Consists of the following components:**

- webby: my personal website
- fundwatcher: automated lambda to notify me of AWS expenses daily
- wk: a speedy, mobile friendly wanikani review application

**Infrastructure**

- Next.js applications are deployed to Vercel.
- Static content is uploaded and served through AWS S3 and Cloudfront
- Automation infrastructure deployed on AWS Lambda and EventBridge

Everything is managed through Terraform.

## Environment variables

- AWS_ACCESS_KEY_ID: self explanatory
- AWS_SECRET_ACCESS: self explanatory
- HYGRAPH_TOKEN: hygraph fetching access token for content layer
- HYGRAPH_ENDPOINT: hygraph graphql api endpoint
- WEBHOOK_URL: eventbridge cost explorer notifier discord webhook

## Support

I guarantee no particular support for running this stuff locally. It was built by me, for me.

If you have any questions, feel free to open an issue :)

## License

GLP v3.0 - Why? because I think it's fitting for a personal site.

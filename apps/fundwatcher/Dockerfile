FROM public.ecr.aws/lambda/nodejs:18 as builder
WORKDIR /usr/app
COPY apps ./apps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
RUN npm i -g pnpm@8
RUN pnpm install
RUN pnpm build:fundwatcher

FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY --from=builder /usr/app/apps/fundwatcher/dist/* ./
CMD ["lambda.handler"]
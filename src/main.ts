import type { NestExpressApplication } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import { ExpressAdapter } from "@nestjs/platform-express";
import { AppModule } from "app";
import { appConfig } from "@configs";

setImmediate(async (): Promise<void> => {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    {
      cors: {
        maxAge: 0,
        origin: ["*"],
        methods: ["*"],
        credentials: false,
        allowedHeaders: ["*"],
        exposedHeaders: [],
        preflightContinue: false,
        optionsSuccessStatus: 200,
      },
    }
  );

  app.set("env", appConfig.env);
  app.set("etag", "strong");
  app.set("trust proxy", true);
  app.set("x-powered-by", false);

  app.useGlobalPipes(new ValidationPipe());

  app.enableVersioning({
    type: VersioningType.URI,
    prefix: "api/v",
  });

  await app.listen(Number(appConfig.port), String(appConfig.host));
});

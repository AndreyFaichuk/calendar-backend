import { NestFactory } from "@nestjs/core";
import * as session from "express-session";
import * as passport from "passport";

import { AppModule } from "./app.module";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ["content-type"],
    origin: "http://localhost:3000",
    credentials: true,
  });
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: false,
      },
      saveUninitialized: true,
      resave: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();

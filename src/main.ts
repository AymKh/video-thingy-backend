/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// sessions
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER BOOTSTRAPPING
  const config = new DocumentBuilder()
    .setTitle('Video Thingy API')
    .setDescription('Basic API that handles video-comments management')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  // SESSION CONFIGURATION
  app.use(session({
    secret: 'shhhh-tis-but-a-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, maxAge: 3600000 }
  }));
  passport.use(passport.initialize());
  passport.use(passport.session());


  await app.listen(3000);
}
bootstrap();

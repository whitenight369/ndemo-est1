import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 设置静态资源访问目录　但是要将上面的nestexpressapplication泛型传入才有这些方法
  app.useStaticAssets('public', { prefix: '/staic' });
  await app.listen(3000);
}
bootstrap();

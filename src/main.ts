import { ServerApplication } from './application/server-application';

bootstrap();

async function bootstrap() {
  const serverApplication = await ServerApplication.create();

  await serverApplication.start();
}

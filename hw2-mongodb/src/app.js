import 'dotenv/config';
import { initMongoConnection } from './db/initMongoConnection.js';
import { createServer } from './server.js';
import { getEnvVar } from './utils/getEnvVar.js';

const PORT = Number(getEnvVar('PORT', 8000));

const bootstrap = async () => {
  try {
    await initMongoConnection();
    const app = createServer();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start application:', error);
  }
};

bootstrap();
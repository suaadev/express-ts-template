import app from './app.js';
import { SERVER_CONFIG } from './configs/configs.js';
import { logger } from './configs/logger.js';

app.listen(SERVER_CONFIG.port, () => {
  logger.info(`Server listening on port: ${SERVER_CONFIG.port.toString()}`);
});

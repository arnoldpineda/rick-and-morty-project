import createApp from './app';
import { envManager } from './config/envManager';

const app = createApp();

app.listen(envManager.port, () => {
  console.log(`Server running on port ${envManager.port}`);
});

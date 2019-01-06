import somnus from 'somnus';
import helloWorld from './routes/hello-world';

somnus.start({
  routeConfig: {
    'get /' : helloWorld
  }
}, (addr) => {
  somnus.logger.info(`server listening at ${addr.port}`);
});

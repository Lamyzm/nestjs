//** Create Read */

import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();

app.listen(8000, () => {
  console.log('server is on...');
});

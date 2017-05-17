import express from 'express';

import databaseConfig from './config/db';
import middlewareConfig from './config/middleware';

const app = express();
databaseConfig();
middlewareConfig(app); 

const PORT = process.env.PORT || 3000;


app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});

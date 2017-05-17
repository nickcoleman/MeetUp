import express from 'express';

import dbConfig from './config/db';

const app = express();
dbConfig();  // database config imported from config/db.js

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});

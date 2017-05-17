import express from 'express';

import databaseConfig from './config/db';
import middlewareConfig from './config/middleware';
import { 
  MeetupRoutes,
} from './modules';

const app = express();
databaseConfig();
middlewareConfig(app); 

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Meetup Backend Server running');
});

app.use('/api', [MeetupRoutes]);

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server listening on port ${PORT}`);
  }
});

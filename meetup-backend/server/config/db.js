import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/meetup');
  mongoose
    .connection
    .once('open', () => console.log('MongoDb running'))
    .on('error', err => console.error('MongoDb error:', err));
};

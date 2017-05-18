import mongoose, { Schema } from 'mongoose';

const MeetupSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [5, 'Meetup title must be at least 5 characters long'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Meetup description must be at least 10 characters long'],
  },
  eventDate: {
    type: Date,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group',
  },
}, { timestamps: true }); // makes it easier to sort meetups

export default mongoose.model('Meetup', MeetupSchema);

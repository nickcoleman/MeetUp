import mongoose, { Schema } from 'mongoose';

const GroupSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be at least 5 characters long'],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be at least 10 characters long'],
  },
  category: {
    type: String,
    default: '',
  },
  meetups: [{
    type: Schema.Types.ObjectId,
    ref: 'Meetup',
  }],
}, { timestamps: true });

// Allow Groups to reference asociated meetups
// AND meetups to reference their parent Group
// This works because we're creating the meetup against
// an existing Group. And, All meetups must be assigned to a group.
GroupSchema.statics.addMeetup = async function (id, args) {
  // create a new Meetup with the meetup details and the parent Group Id
  const Meetup = mongoose.model('Meetup');
  const meetup = await new Meetup({ ...args, group: id });

  // add the meetup Id to the parent Group
  await this.findByIdAndUpdate(id, { $push: { meetups: meetup.id } });
  return {
    meetup: await meetup.save(),
  };
};

export default mongoose.model('Group', GroupSchema);

import Meetup from './model';

export const createMeetup = async (req, res) => {
  const { title, description } = req.body;

  try {
    const meetup = await Meetup({ title, description }).save();
    return res.status(201).json({ meetup });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `createMeetup error: ${e.message}` });
  }
};

export const getAllMeetups = async (req, res) => {
  try {
    // const meetups = await Meetup.find({});
    return res.status(200).json({ meetups: await Meetup.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `getAllMeetups error: ${e.message}` });
  }
};

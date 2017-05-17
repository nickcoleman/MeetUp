import Meetup from './model';

export const createMeetup = async (req, res) => {
  const { title, description } = req.body;
  const newMeetup = new Meetup({ title, description });

  try {

  }
  catch {
    
  }
};

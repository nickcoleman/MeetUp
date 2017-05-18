import Group from './model';

export const createGroup = async (req, res) => {
  const { name, description, category } = req.body;

  if (!name) {
    return res.status(400).json({ error: true, message: 'Group Name is required' });
  } else if (!(typeof name !== String)) {
    return res.status(400).json({ error: true, message: 'Group Name must be a string' });
  } else if (name.length < 5) {
    return res.status(400).json({ error: true, message: 'Group Name must be at least 5 characters long' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Group Description is required' });
  } else if (!(typeof description !== String)) {
    return res.status(400).json({ error: true, message: 'Group Description must be a string' });
  } else if (description.length < 5) {
    return res.status(400).json({ error: true, message: 'Group Description must be at least 10 characters long' });
  }

  try {
    const group = await Group({ name, description }).save();
    return res.status(201).json({ error: false, group });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `createGroup error: ${e.message}` });
  }
};

export const createGroupMeetup = async (req, res) => {
  const { title, description } = req.body;
  const { groupId } = req.params;

  if (!groupId) {
    return res.status(400).json({ error: true, message: 'Group ID is required' });
  }

  if (!title) {
    return res.status(400).json({ error: true, message: 'Meetup Title is required' });
  } else if (!(typeof title !== String)) {
    return res.status(400).json({ error: true, message: 'Meetup Title must be a string' });
  } else if (title.length < 5) {
    return res.status(400).json({ error: true, message: 'Meetup Title must be at least 5 characters long' });
  }

  if (!description) {
    return res.status(400).json({ error: true, message: 'Meetup Description is required' });
  } else if (!(typeof description !== String)) {
    return res.status(400).json({ error: true, message: 'Meetup Description must be a string' });
  } else if (description.length < 5) {
    return res.status(400).json({ error: true, message: 'Meetup Description must be at least 10 characters long' });
  }

  try {
    const { meetup } = await Group.addMeetup(groupId, { title, description });
    return res.status(201).json({ error: false, meetup });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `createGroupMeetup error: ${e.message}` });
  }
};

export const getAllGroups = async (req, res) => {
  console.log('getAllGroups');
  try {
    return res.status(200).json({ error: false, meetups: await Group.find({}) });
  } catch (e) {
    return res.status(e.status).json({ error: true, message: `getAllGroups error: ${e.message}` });
  }
};

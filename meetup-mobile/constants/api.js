import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
const fakeGroupId = '591cfbdd9c4b6c9a9b5d601a';

class MeetupApi {
  constructor() {
    const groupId = fakeGroupId;
    this.path = `/groups/${groupId}/meetups`;
  }

  async fetchGroupMeetup() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      throw (e);
    }
  }
}

export {
  MeetupApi,
};

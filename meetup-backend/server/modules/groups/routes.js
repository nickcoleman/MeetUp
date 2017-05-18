import { Router } from 'express';
import * as GroupController from './controller';

const routes = new Router();

routes.get('/groups', GroupController.getAllGroups);
routes.post('/groups/new', GroupController.createGroup);
routes.post('/groups/:groupId/meetup/new', GroupController.createGroupMeetup);

export default routes;

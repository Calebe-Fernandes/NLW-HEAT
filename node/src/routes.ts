import {Router} from 'express';
import { authenticateUserController } from './controllers/authenticateUserController';
import { createMessageController } from './controllers/createMessageController';
import { getThreeLastMessagesController } from './controllers/getLastThreeMessagesController';
import { profileUserController } from './controllers/profileUserController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post("/authenticate", new authenticateUserController().handle);
router.post("/messages",ensureAuthenticated, new createMessageController().handle);
router.get("/messages/last3", new getThreeLastMessagesController().handle);
router.get("/profile",ensureAuthenticated, new profileUserController().handle);

export {router};
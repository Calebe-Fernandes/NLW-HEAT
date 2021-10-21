import {Request, Response} from 'express'
import { profileUserService } from '../services/profileUserService';


class profileUserController {
    async handle(request: Request, response: Response){
       const {user_id} = request;

        const service = new profileUserService();

        const result = await service.execute(user_id);

        return response.json(result);
    }
}

export {profileUserController}
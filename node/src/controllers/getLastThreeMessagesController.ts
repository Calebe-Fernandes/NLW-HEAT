import {Request, Response} from 'express'
import { getLastThreeMessagesService } from '../services/getLastThreeMessagesService'

class getThreeLastMessagesController {
    async handle(request: Request, response: Response){
        const service = new getLastThreeMessagesService();

        const result = await service.execute();

        return response.json(result);
    }
}

export {getThreeLastMessagesController}
import prismaClient from '../prisma/index'

class getLastThreeMessagesService{
    async execute(){
       const messages = await prismaClient.message.findMany({
           take: 3,
           orderBy:{
               created_at:"desc"
           },
           include:{
               user:true
           }
       })
       return messages;
    }
}

export { getLastThreeMessagesService}
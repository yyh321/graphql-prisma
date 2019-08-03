import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers: {
    Query:{
      users: (root, { first},context) => {
        return prisma.users({
          where:{}
        })
      },
      user:(root,{id},context) => {
        return prisma.user({id})
      }
    },
    Mutation:{
      createUser:(root,args,context) => {
        return prisma.createUser(args)
      }
    }
  }
})

server.start({
  port: 4600
},({port}) => {
  console.log(`服务器已启动，请访问:http://localhost:${port}`);
})
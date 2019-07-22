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
      }
    }
  }
})

server.start({
  port: 4600
},({port}) => {
  console.log(`服务器已启动，请访问:http://localhost:${port}`);
})
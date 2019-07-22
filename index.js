import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
  typeDefs: `
    type Query {
      hello(name:String):String!
    }
  `,
  resolvers: {
    Query:{
      hello:(parent,{name},ctx) => {
        return `${name},你好，欢迎来一起学习GraphQL!`
      }
    }
  }
})

server.start({
  port: 4600
},({port}) => {
  console.log(`服务器已启动，请访问:http://localhost:${port}`);
})
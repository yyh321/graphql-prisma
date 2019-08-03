import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    prisma
  }
});

server.start(
  {
    port: 4600
  },
  ({ port }) => {
    console.log(`服务器已启动，请访问:http://localhost:${port}`);
  }
);

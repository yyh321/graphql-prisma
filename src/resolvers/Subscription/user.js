import { prisma } from "../../generated/prisma-client";

export default {
  userSubscribe: {
    // 先订阅
    subscribe: (root, args, context) => {
      return prisma.$subscribe
        .user({
          mutation_in: ["CREATED", "DELETED", "UPDATED"]
        })
        .node();
    },
    // 再解析数据
    resolve: payload => {
      return payload;
    }
  }
};

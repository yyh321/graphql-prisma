export default {
  // 查询用户列表
  users: (root, { first }, { prisma }) => {
    return prisma.users({
      where: {}
    });
  },
  // 查询单个用户
  user: (root, { id }, { prisma }) => {
    return prisma.user({ id });
  }
};

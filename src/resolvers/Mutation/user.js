export default {
  createUser: (root, args, { prisma }) => {
    return prisma.createUser(args);
  }
};

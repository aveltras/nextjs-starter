import { Resolvers } from "types/graphql";

const resolvers: Resolvers = {
  Query: {
    test: (root, args, context) => {
      return 2;
    },
    tada: (root, args, context) => {
      return "tada";
    },
  },
};

export default resolvers;

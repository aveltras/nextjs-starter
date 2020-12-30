import { Resolvers } from "types/graphql";

const resolvers: Resolvers = {
  Query: {
    test: () => {
      return 2;
    },
    tada: () => {
      return "tada";
    },
  },
};

export default resolvers;

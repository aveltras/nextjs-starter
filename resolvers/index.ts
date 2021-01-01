import { Resolvers } from "types/graphql";

const resolvers: Resolvers = {
  Query: {
    test: () => {
      console.log("resolve");
      return 2;
    },
    tada: () => {
      return "tada";
    },
  },
};

export default resolvers;

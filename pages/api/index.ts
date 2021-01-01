import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { readFileSync } from "fs";
import session from "express-session";
import redis from "redis";
import createRedisStore from "connect-redis";
import resolvers from "resolvers";

const typeDefs = readFileSync("./schema.gql", "utf-8");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // context: ({ req }) => {
  // todo

  // },
});

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(
  session({
    store: new (createRedisStore(session))({ client: redis.createClient() }),
    saveUninitialized: false,
    secret: "keyboard cat",
    resave: false,
  })
);

handler.use(apolloServer.createHandler({ path: "/api" }));

export default handler;

console.log("init api");

export const config = {
  api: {
    bodyParser: false,
  },
};

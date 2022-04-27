import { GraphQLServer } from 'graphql-yoga'
import {Query} from "./resolvers/query.js";
import {Todo} from "./resolvers/todo.js";
import {User} from "./resolvers/user.js";
import {Mutation} from "./resolvers/mutation.js";
import { PubSub } from "graphql-yoga";
import {db} from "./data/bd.js";
import {Subscription} from "./resolvers/subscription.js";
const pubSub = new PubSub();
// ... or using "require()"
// const { GraphQLServer } = require('graphql-yoga')
const typeDefs = "./schema/schema.graphql";
const resolvers = {Query,Todo,User,Mutation,Subscription };
const context = {
    db,
    pubSub
}
const server = new GraphQLServer({ typeDefs, resolvers, context })
server.start(() => console.log('Server is running on localhost:4000'))
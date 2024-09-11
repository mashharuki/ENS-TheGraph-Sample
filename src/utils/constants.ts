import * as dotenv from 'dotenv';

dotenv.config();

const {
    THE_GRAPH_API_KEY
} = process.env;

export const GRAPHQL_ENDPOINT = `https://gateway.thegraph.com/api/${THE_GRAPH_API_KEY}/subgraphs/id/DmMXLtMZnGbQXASJ7p1jfzLUbBYnYUD9zNBTxpkjHYXV`;
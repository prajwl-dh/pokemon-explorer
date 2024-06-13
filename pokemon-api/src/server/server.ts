import cors from 'cors';
import express from 'express';
import { buildSchema } from 'graphql';
import { createHandler } from 'graphql-http/lib/use/express';
import { resolvers } from '../graphql/resolvers';
import { pokemonTypes } from '../graphql/schema';

const schema = buildSchema(pokemonTypes);

const app = express();
app.use(cors());
const PORT = 3000;

app.all(
  '/graphql',
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
);

export const startExpressServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started and running on http://localhost:${PORT}`);
  });
};

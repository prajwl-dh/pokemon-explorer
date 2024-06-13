export const pokemonTypes = `
  type Pokemon {
    name: String
    image: String
    generation: String
    moves: [String]
    weight: Int
  }

  type Query {
    getPokemons(page: Int, limit: Int): [Pokemon]
    getPokemonDetails(name: String!): Pokemon
  }
`;

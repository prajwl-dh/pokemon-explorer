import { PokemonService } from './services';

const pokemonService = new PokemonService();

export const resolvers = {
  getPokemons: async ({ page, limit }: { page: number; limit: number }) => {
    return pokemonService.getPokemons(page, limit);
  },
  getPokemonDetails: async ({ name }: { name: string }) => {
    return pokemonService.getPokemonDetails(name);
  },
};

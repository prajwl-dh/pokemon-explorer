import axios from 'axios';

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  // Function to extract the pokemonId from URL
  private getPokemonIdFromUrl = (url: string): string => {
    const pathArray = url.split('/');
    return pathArray.length > 2 ? pathArray[pathArray.length - 2] : '';
  };

  // Function to get pokemons
  public getPokemons = async (
    page: number,
    limit: number
  ): Promise<Object[]> => {
    try {
      const paginationOffset = (page - 1) * limit;
      const response = await axios.get(
        `${this.apiUrl}/pokemon?offset=${paginationOffset}&limit=${limit}`
      );
      const pokemons = response.data?.results || [];

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return pokemons.map((pokemon: any) => ({
        name: pokemon?.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.getPokemonIdFromUrl(
          pokemon.url
        )}.png`,
      }));
    } catch (error) {
      return [];
    }
  };

  // Function to get details of a specific pokemon
  public getPokemonDetails = async (name: string): Promise<any> => {
    try {
      const response = await axios.get(`${this.apiUrl}/pokemon/${name}`);
      const pokemon = response.data;

      // Fetching the generation information from the species endpoint
      const speciesResponse = await axios.get(pokemon.species.url);
      const species = speciesResponse.data;
      const generation = species.generation.name;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        generation: generation,
        moves: pokemon.moves.map((move: any) => move.move.name),
        weight: pokemon.weight,
      };
    } catch (error) {
      return {};
    }
  };
}

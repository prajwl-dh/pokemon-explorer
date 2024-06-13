import { gql, useQuery } from '@apollo/client';
import 'ldrs/tailspin';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Error from '../components/error/Error';
import { Spinner } from '../components/spinner/Spinner';

const GET_POKEMONS = gql`
  query getPokemons($page: Int, $limit: Int) {
    getPokemons(page: $page, limit: $limit) {
      name
      image
    }
  }
`;

export default function PokemonList() {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { page, limit: 20 },
  });

  if (loading)
    return (
      <div className='px-1 md:px-10 grid w-full place-items-center mt-[35vh]'>
        <Spinner />
      </div>
    );
  if (error) return <Error />;

  if (data.getPokemons?.length === 0)
    return (
      <div className='px-1 md:px-10 flex flex-col w-full justify-center items-center mt-[35vh] gap-5'>
        <p className='text text-4xl font-bold'>No More Pokemons</p>
        <button
          className='underline text text-gray-700 text-xl underline-offset-4 hover:scale-110 transition duration-200'
          onClick={() => setPage(page - 1)}
        >
          Go Back
        </button>
      </div>
    );

  return (
    <>
      <div className='px-1 md:px-10 grid grid-cols-2 md:grid-cols-4 w-full place-items-center gap-10 mb-16'>
        {data.getPokemons?.map((pokemon: { name: string; image: string }) => (
          <NavLink
            to={`/pokemon/${pokemon.name}`}
            className='flex flex-col justify-center items-center cursor-pointer group'
            key={pokemon.name}
          >
            <img
              className='group-hover:scale-125 transition duration-200'
              src={pokemon.image}
              alt={pokemon.name}
              height={120}
              width={120}
            />
            <p className='font-bold text-xl group-hover:underline decoration-4 underline-offset-8 '>
              {pokemon.name}
            </p>
          </NavLink>
        ))}
      </div>
      <div className='px-1 md:px-10 flex w-full justify-center items-center mb-10 gap-5'>
        <button
          className={`py-2 px-2 w-24 border-2 border-gray-500 rounded-md font-bold text-gray-700 ${
            page === 1
              ? 'cursor-not-allowed'
              : 'hover:bg-gray-200 cursor-pointer'
          }`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <p
          className={`${
            data.getPokemons?.length === 0
              ? 'hidden'
              : 'text-gray-700 text-lg font-bold'
          }`}
        >
          Page : {page}
        </p>
        <button
          className={`${
            data.getPokemons?.length === 0
              ? 'hidden'
              : 'py-2 px-2 w-24 border-2 border-gray-500 rounded-md hover:bg-gray-200 cursor-pointer font-bold text-gray-700'
          }`}
          onClick={() => setPage(page + 1)}
          disabled={data.getPokemons?.length === 0}
        >
          Next
        </button>
      </div>
    </>
  );
}

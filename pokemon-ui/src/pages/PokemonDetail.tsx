import { gql, useQuery } from '@apollo/client';
import 'ldrs/tailspin';
import { useNavigate, useParams } from 'react-router';
import Error from '../components/error/Error';
import PokemonNotFound from '../components/pokemon-not-found/PokemonNotFound';
import { Spinner } from '../components/spinner/Spinner';

const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($name: String!) {
    getPokemonDetails(name: $name) {
      name
      image
      generation
      moves
      weight
    }
  }
`;

export default function PokemonDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
    variables: { name },
  });

  const handleBackButtonClick = () => {
    if (window.history?.length && window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  };

  if (loading)
    return (
      <div className='px-1 md:px-10 grid w-full place-items-center mt-[35vh]'>
        <Spinner />
      </div>
    );
  if (error) return <Error />;

  if (!data.getPokemonDetails?.name) return <PokemonNotFound />;

  return (
    <div className='flex flex-col items-center justify-center my-5'>
      <div className='w-full max-w-screen-lg bg-white rounded-xl shadow-md overflow-hidden'>
        <div className='p-8'>
          <div className='text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Pokémon Details
          </div>
          <div className='mt-4 w-full grid place-items-center'>
            <img
              src={data.getPokemonDetails?.image}
              alt={data.getPokemonDetails?.name}
              height={200}
              width={200}
              className='object-cover rounded-t-xl'
            />
          </div>
          <div className='p-6'>
            <div className='text-3xl leading-8 font-extrabold text-gray-900 text-center'>
              {data.getPokemonDetails?.name}
            </div>
            <div className='mt-4 text-xl font-bold text-center'>
              Weight: {data.getPokemonDetails?.weight}
            </div>
            <div className='text-xl font-bold text-center'>
              Generation: {data.getPokemonDetails?.generation}
            </div>
            <div className='mt-6'>
              <p className='text-xl font-bold text-center'>Moves:</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-2'>
                {data.getPokemonDetails?.moves.map(
                  (move: string, index: number) => (
                    <div
                      key={index}
                      className='bg-gray-100 p-4 rounded-lg text-center'
                    >
                      <p className='text-lg'>{move}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className='mt-6 text-center'>
              <button
                onClick={() => handleBackButtonClick()}
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

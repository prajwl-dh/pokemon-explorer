import { NavLink, useParams } from 'react-router-dom';

export default function PokemonNotFound() {
  const { name } = useParams();
  return (
    <div className='px-1 md:px-10 flex flex-col justify-center items-center'>
      <img src='/pokemon-not-found.svg' className='max-h-96' />
      <p className='mt-10 text font-bold text-2xl md:text-3xl text-slate-600'>
        Pokemon with name <q>{name}</q> not found
      </p>
      <NavLink
        className='mt-3 text-slate-600  hover:text-slate-900 cursor-pointer'
        to={'/'}
      >
        <span className='underline underline-offset-4'>Go Back</span>
      </NavLink>
    </div>
  );
}

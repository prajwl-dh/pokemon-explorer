import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [search, setSearch] = React.useState<string>('');

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    navigate(`/pokemon/${search.toLowerCase()}`);
    setSearch('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleHeadingClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className='flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between h-24 sm:h-16 items-center px-1 md:px-10 bg-white fixed w-screen backdrop-blur-md bg-opacity-60 shadow-md'>
      <div
        onClick={() => handleHeadingClick()}
        className='text text-3xl font-bold text-gray-700 cursor-pointer hover:underline-offset-8 hover:underline'
      >
        Pokemons
      </div>
      <form
        onSubmit={handleFormSubmit}
        className='flex flex-row mb-2 md:mb-0 border-2 border-gray-500 rounded-md'
      >
        <input
          className='p-2 outline-none rounded-l-md bg-inherit text-gray-700'
          type='text'
          placeholder='Search for pokemon'
          name='search'
          value={search || ''}
          onChange={(e) => handleChange(e)}
        />
        <button
          onClick={handleFormSubmit}
          className='py-1 px-2 rounded-r-md group placeholder:text-sm outline-none'
        >
          <p className='text text-xl group-hover:scale-125 transition duration-200'>
            🔎
          </p>
        </button>
      </form>
    </div>
  );
}

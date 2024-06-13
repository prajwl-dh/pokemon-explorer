import { NavLink } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='px-1 md:px-10 flex flex-col justify-center items-center '>
      <img src='/not-found.svg' height={800} width={800} />
      <p className='mt-10 text font-bold text-2xl md:text-3xl text-slate-600'>
        404 ! Page Not Found
      </p>
      <NavLink className='mt-3 text-slate-600  hover:text-slate-900' to={'/'}>
        &#60;--{' '}
        <span className='underline underline-offset-4'>
          Back to home page...
        </span>
      </NavLink>
    </div>
  );
}

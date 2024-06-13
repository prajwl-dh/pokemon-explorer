import { Outlet } from 'react-router';
import Navbar from '../navbar/Navbar';

export default function Layout() {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='mt-28 sm:mt-20'>
        <Outlet />
      </main>
    </div>
  );
}

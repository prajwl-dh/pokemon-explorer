export default function Error() {
  return (
    <div className='px-1 md:px-10 flex flex-col justify-center items-center '>
      <img src='/server-error.svg' height={800} width={800} />
      <p className='mt-10 text font-bold text-2xl md:text-3xl text-slate-600'>
        An Error Occured. Please Check your backend
      </p>
      <div
        className='mt-3 text-slate-600  hover:text-slate-900 cursor-pointer'
        onClick={() => window.location.reload()}
      >
        <span className='underline underline-offset-4'>
          🔄 Refresh The Site
        </span>
      </div>
    </div>
  );
}

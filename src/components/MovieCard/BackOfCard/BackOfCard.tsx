const BackOfCard = () => {
    return (
        <div className='absolute my-rotate-y-180 backface-hidden rounded-3xl h-full w-full'>
            <div className='w-full h-full rounded-3xl flex flex-col justify-between items-center shadow-[1px_1px_42px_4px_rgba(140,140,140,0.41)]'>
                <h1 className='font-extrabold text-orange-600 pt-4'>Movie Title</h1>
                <div className='flex w-full justify-between px-6'>
                    <div className='flex flex-col justify-between items-center h-[80px]'>
                        <span className='font-light text-sm'>Rating: </span>
                        <span className='block h-[43px] w-[43px] border-2 border-green-600 p-2 rounded-full'>7.7</span>
                    </div>
                    <div className='flex flex-col justify-between items-center h-[80px]'>
                        <span className='font-light text-sm'>To watchlist: </span>
                        <span className='block h-[43px] w-[43px] border-2 border-cyan-600 p-2 rounded-full'>💗</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-sm font-light'>Release date:</span>
                    <span className='text-xs font-light'>03-11-2023</span>
                </div>
                <div className='flex justify-center items-center h-[60px] w-full rounded-b-3xl bg-cyan-700 text-white'>
                    <span className='text-lg font-extrabold'>OVERVIEW</span>
                </div>
            </div>
        </div>
    )
}

export default BackOfCard;
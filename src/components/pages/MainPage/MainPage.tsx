import MovieCard from "../../MovieCard/MovieCard";

const MainPage = () => {
    return (
        <div className='mx-40 my-6 flex justify-center items-center flex-wrap gap-10'>
            <MovieCard />
            <div className='h-[350px] w-[250px] rounded-3xl bg-black'></div>
            {/* <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard /> */}
        </div>
    )
}

export default MainPage;
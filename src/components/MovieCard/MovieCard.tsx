import BackOfCard from "./BackOfCard/BackOfCard";
import FrontOfCard from "./FrontOfCard/FrontOfCard";

const MovieCard = () => {
    return (
        <div className='h-[370px] w-[250px] rounded-3xl bg-transparent cursor-pointer group perspective'>
            <div className='group-hover:my-rotate-y-180 relative h-full w-full preserve-3d duration-1000'>
                <FrontOfCard />
                <BackOfCard />

            </div>
        </div>
    )
}

export default MovieCard;
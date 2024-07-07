import { useAppSelector } from "../../../redux/hooks";
import { getBackdropURL } from "../../../utils/utils";

const CardDetailsBackground = () => {
    const { backdrop_path } = useAppSelector(state => state.movieDetailsSlice)

    return (
        <div className='absolute h-full w-full bg-cover bg-top opacity-80' style={{ backgroundImage: `url(${getBackdropURL(backdrop_path)})` }}>
        </div>
    )
}

export default CardDetailsBackground;
import { FC } from 'react';
import { correctImgPath } from '../../../utils/utils';


const FrontOfCard: FC<FrontOfCardProps> = ({ moviePoster }) => {
    return (
        <div className='absolute backface-hidden rounded-3xl w-full h-full'>
            <img className='rounded-3xl h-full w-full' src={correctImgPath(moviePoster)} alt="movie poster" />
        </div>
    )
}

type FrontOfCardProps = {
    moviePoster: string
}

export default FrontOfCard;
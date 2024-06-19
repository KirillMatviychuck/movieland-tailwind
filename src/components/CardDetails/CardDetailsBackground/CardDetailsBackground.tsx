import bgPoster from '../../../assets/images/test-imgs/terminator.jpg';

const CardDetailsBackground = () => {
    return (
        <div className='absolute h-full w-full bg-cover bg-top opacity-80' style={{ backgroundImage: `url(${bgPoster})` }}>
        </div>
    )
}

export default CardDetailsBackground;
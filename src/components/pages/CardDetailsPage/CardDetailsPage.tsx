import CardDetailsBackground from '../../CardDetails/CardDetailsBackground/CardDetailsBackground';
import CardDetailsInfo from '../../CardDetails/CardDetailsInfo/CardDetailsInfo';

const CardDetailsPage = () => {
    return (
        <div className='bg-gray-800 h-[82.5vh] relative'>
            <CardDetailsBackground />
            <CardDetailsInfo />
        </div>
    )
}

export default CardDetailsPage;
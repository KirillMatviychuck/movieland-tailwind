import { useAppSelector } from '../../../redux/hooks';
import CardDetailsBackground from '../../CardDetails/CardDetailsBackground/CardDetailsBackground';
import CardDetailsInfo from '../../CardDetails/CardDetailsInfo/CardDetailsInfo';

const CardDetailsPage = () => {
    const { status } = useAppSelector(state => state.appSlice)
    if (status === 'loading') return <div>Loading...</div>

    return (
        <div className='relative flex items-center justify-center bg-gray-800 h-[82.5vh]'>
            <CardDetailsBackground />
            <CardDetailsInfo />
        </div>
    )
}

export default CardDetailsPage;
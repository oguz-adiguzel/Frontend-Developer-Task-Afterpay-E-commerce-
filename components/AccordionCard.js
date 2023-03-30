import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '@/features/accordion/accordionSlice';

function Accordion({ item, index }) {
    const { selected } = useSelector((store) => store.accordion);
    const dispatch = useDispatch();

    return (<>
        <div className='w-full lg:w-[846px] h-16 bg-[#E5E7EB] flex items-center justify-between'>
            <p className='lg:text-lg text-md font-bold ml-5'>{item.title}</p>
            <FontAwesomeIcon icon={faChevronUp} className='w-6 mr-5 hover:cursor-pointer' onClick={() => dispatch(toggle(index))} />
        </div>
        <div className={selected === index ? 'block w-full lg:w-[846px] bg-gray-100' : 'hidden'}>
            <p className='mt-3.5 ml-5 mb-6 mr-28'>{item.content}</p>
        </div>
    </>);
}

export default Accordion;
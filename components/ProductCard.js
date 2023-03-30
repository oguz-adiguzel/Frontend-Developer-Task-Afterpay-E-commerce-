import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { addBasket } from '@/features/product/productSlice';
import { FormattedNumber } from 'react-intl';
import { useRouter } from 'next/router';


function ProductCard({ filteredItem, notify }) {
    const dispatch = useDispatch();
    const router = useRouter()

    return (<>
        <div className='product-item w-72 lg:w-full mx-auto'>
            <div className='product-img-cont h-72 relative'>
                {filteredItem.opportunityProduct && <p className='absolute text-[13px] text-white bg-afterpay-orange py-1.5 px-2.5 left-3.5 top-4'>Fırsat Ürünü</p>}
                {filteredItem.newProduct && <p className='absolute text-[13px] text-white bg-afterpay-green py-1.5 px-2.5 left-3.5 top-4'>Yeni</p>}
                <img onClick={() => router.push(`product/${filteredItem.id}`)} alt={filteredItem.title} className='w-72 h-72 lg:w-full lg:h-full cursor-pointer object-contain' src={`${filteredItem.img}&w=605&h=720`} />
            </div>
            <h2 className='product-name text-[16px] font-medium'>{filteredItem.title}</h2>
            <div className='flex justify-between items-center'>
                <p className='font-bold text-[18px]'><FormattedNumber value={filteredItem.price} style={`currency`} currency="TRY" /> </p>
                <button onClick={() => {
                    dispatch(addBasket(filteredItem.id))
                    notify()
                }} className='w-10 h-11 bg-afterpay-lightgray flex justify-center items-center shadow-2xl'><FontAwesomeIcon icon={faCartShopping} className='text-black w-4 h-5' /></button>
            </div>
        </div>
    </>);
}

export default ProductCard;
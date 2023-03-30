import logo from '../public/images/afterpay-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { amountCalculator } from '@/features/product/productSlice';
import Image from 'next/image';
import { exit } from '@/features/user/userSlice';

function Header() {
    const { amount, basket } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const { login } = useSelector((store) => store.user);

    useEffect(() => {
        dispatch(amountCalculator());
    }, [basket]);

    return (<>
        <div className="bg-afterpay-orange w-full hw-full lg:h-102 py-5 lg:py-0">
            <div className="container flex flex-col lg:flex-row h-full items-center">
                {/* Logo */}
                <div className="logo-container">
                    <Link href="/"><Image alt='logo' className='h-7 w-159' src={logo} /></Link>
                </div>
                {/* Searc Box */}
                <div className='flex lg:ml-9 mt-3 lg:mt-0'>
                    <input className='lg:w-96 w-72 h-8 lg:pl-2 text-[16px] rounded-l-sm' type='search' placeholder='Ürün Ara...'></input>
                    <button className='bg-gray-400 w-11 h-8 search-button rounded-r-sm flex justify-center items-center'><FontAwesomeIcon className='w-5' icon={faSearch} /></button>
                </div>
                {/* Right Content */}
                <div className='header-right-content lg:ml-24 flex items-center mt-4 lg:mt-0'>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faUser} className='icon' />
                        {login === true && <button onClick={() => dispatch(exit())} className='font-[16px] ml-2 text-red-600'>Çıkış Yap</button>}
                        {login === false && <Link className='font-[16px] ml-2' href='/login'>Giriş Yap</Link>}

                    </div>
                    <div className='lg:ml-11 ml-4 border-r-2 border-black lg:pr-5 pr-2 flex items-center'>
                        <FontAwesomeIcon icon={faHeart} className='icon' />
                        <span className='font-[16px] ml-2'>Favoriler</span>
                    </div>
                    <div className='lg:pl-5 flex items-center'>
                        <Link className='font-[16px] ml-2' href="/basket">Sepetim</Link>
                        {/* <span className='font-[16px] ml-2'>Sepetim</span> */}
                        <FontAwesomeIcon icon={faCartShopping} className='lg:ml-3 ml-2 icon' />
                        {
                            amount > 0 && <div className='w-5 h-5 bg-white rounded-full ml-1 flex items-center justify-center'>
                                <p className='font-bold text-blue-600'>{amount}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Header;
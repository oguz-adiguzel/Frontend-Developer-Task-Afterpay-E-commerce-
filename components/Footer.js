import Image from 'next/image';
import logo from '../public/images/afterpay-logo.png';

function Footer() {

    return (<>
        <div className="w-full lg:h-[497px] bg-afterpay-orange mt-24 py-3 lg:py-0">
            <div className='container flex flex-col lg:flex-row items-center lg:items-start'>
                {/* Left Content */}
                <div className="lg:w-1/2 w-full h-full lg:pt-[108px] flex flex-col items-center lg:items-start py-5 lg:py-0">
                    <Image alt='logo' className='h-7 w-[155px]' src={logo} />
                    <p className='lg:w-[490px] lg:text-[18px] mt-4 lg:mt-[43px] w-3/4'>Afterpay is digital agency that help you make better experience iaculis cras in.</p>
                </div>

                {/* Right Content */}
                <div className="lg:w-1/2 grid grid-cols-3 lg:gap-x-1 gap-x-12 justify-center">
                    <div className='lg:mt-24'>
                        <h2 className='text-xl font-bold'>Product</h2>
                        <p className='mt-5 text-lg'>New Arrivals</p>
                        <p className='mt-3 text-lg'>Best Selling</p>
                        <p className='mt-3 text-lg'>Home Decor</p>
                        <p className='mt-3 text-lg'>Kitchen Set</p>
                    </div>
                    <div className='lg:mt-24'>
                        <h2 className='text-xl font-bold'>Services</h2>
                        <p className='mt-5 lg:text-lg'>Catalog</p>
                        <p className='mt-3 lg:text-lg'>Blog</p>
                        <p className='mt-3 lg:text-lg'>FaQ</p>
                        <p className='mt-3 lg:text-lg'>Pricing</p>
                    </div>
                    <div className='lg:mt-24'>
                        <h2 className='text-xl font-bold'>Follow Us</h2>
                        <p className='mt-5 text-lg'>Facebook</p>
                        <p className='mt-3 text-lg'>Instagram</p>
                        <p className='mt-3 text-lg'>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Footer;

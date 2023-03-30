import BasketCard from "@/components/BasketCard";
import ProductCard from "@/components/ProductCard";
import { amountCalculator, removeBasket, totalCalculater } from "@/features/product/productSlice";
import Link from "next/link";
import { useEffect } from "react";
import { FormattedNumber } from "react-intl";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Basket() {
    const { basket, total, amount, productItems } = useSelector((store) => store.product);
    const dispatch = useDispatch();
    const addToast = () => toast.success('Ürün Sepete Eklendi', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const deleteToast = () => toast.warn('Ürün Çıkarıldı', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const notify = () => toast.success('Ürün Sepete Eklendi', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    useEffect(() => {
        dispatch(totalCalculater())
        dispatch(amountCalculator())
    }, [basket]);

    return (<>
        <ToastContainer />
        <div className="container mt-3 flex flex-col md:flex-row items-center md:items-start md:justify-between md:gap-x-3">
            {/* Left Content */}
            <div className="md:w-9/12 w-full border rounded-xl py-2 px-2">
                {
                    basket.length === 0 && <p className="text-2xl w-full mt-5 text-center">Sepetinizde Ürün Bulunmamaktadır</p>
                }
                {
                    basket.map((item, index) => (
                        <BasketCard key={item.id} item={item} index={index} addToast={addToast} deleteToast={deleteToast} />
                    ))
                }
            </div>
            {/* Right Content */}
            <div className="w-full mt-4 md:mt-0 md:w-1/4 border flex flex-col items-center py-3 rounded-xl">
                <p className="text-2xl text-afterpay-orange font-bold">Seçilen Ürünler ({amount})</p>
                <p className="text-xl font-bold mt-2"><FormattedNumber value={total} style={`currency`} currency="TRY" /></p>
                {
                    basket.length > 0 && <button onClick={() => dispatch(removeBasket())} className="bg-red-600 w-36 h-10 rounded-xl text-white mt-2">Sepeti Temizle</button>
                }
                <button onClick={()=>{
                    dispatch(removeBasket())
                    alert('Teşekkürler Yine Bekleriz :)')
                }} className="bg-afterpay-orange w-52 h-14 rounded-xl text-white mt-2"><Link href='/'>Alışverişi Tamamla</Link></button>
            </div>
        </div>
        {
            amount === 0 && <div className="container mt-12">
                <h2 className="text-3xl text-center font-bold">Sizin İçin Seçtiklerimiz</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-x-11 mt-4'>
                    {productItems.filter(item => item.opportunityWeek === true).map(filteredItem => (
                        <ProductCard key={filteredItem.id} filteredItem={filteredItem} notify={notify} />
                    ))}
                </div>
            </div>
        }
    </>);
}

export default Basket;
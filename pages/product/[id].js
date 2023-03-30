import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormattedNumber } from 'react-intl';
import { addBasket } from "@/features/product/productSlice";

function ProductItem() {
    const { productItems } = useSelector((store) => store.product)
    const [product, setProduct] = useState();
    const dispatch = useDispatch()
    const router = useRouter()
    const { id } = router.query

    useEffect(() => {
        setProduct(productItems.find((p) => p.id === Number(id)))
    }, [id]);

    return (<>
        <div className="container">
            <div className="w-full grid px-5 lg:px-0 grid-cols-1 lg:grid-cols-2 mt-20">
                {/* Product İmage */}
                <div className="flex justify-center h-64 md:h-80 lg:h-80">
                    <img className="lg:w-80 w-64 md:w-80" src={`${product && product.img}&w=1024&h=1024`} />
                </div>

                {/* Product Content */}
                <div className=" px-5 py-3">
                    <h2 className="text-2xl font-bold">{product && product.title}</h2>
                    <p className="text-md text-gray-400 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at varius dolor. Vivamus quis placerat diam. Suspendisse ut turpis in nulla pharetra pharetra id non orci. Sed volutpat orci sed cursus ornare. Sed tristique, est nec posuere efficitur, metus justo.</p>
                    <p className="text-2xl text-red-600 font-bold mt-3"><FormattedNumber value={product && product.price} style={`currency`} currency="TRY" /></p>
                    <button onClick={() => dispatch(addBasket(product.id))} className="bg-afterpay-orange text-white px-9 py-3 rounded-full mt-3">Sepete Ekle</button>
                </div>
            </div>
        </div>
    </>);
}

export default ProductItem;
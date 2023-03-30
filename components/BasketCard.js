import { count, deleteCount, removeItem } from "@/features/product/productSlice";
import { FormattedNumber } from "react-intl";
import { useDispatch } from "react-redux";

function BasketCard({ item, index, addToast, deleteToast }) {
    const dispatch = useDispatch();

    return (<>
        <div className="w-full border-b">
            <span>Satıcı : </span> <span className="font-bold">afterpay</span>
        </div>
        <div className="flex flex-col md:flex-row p-3 justify-between items-center">
            <div className="w-1/3">
                <img className="w-32 h-36" src={item.img} />
            </div>
            <div className="mt-3 md:mt-0 lg:w-1/3">
                <p className="text-xl mt font-bold">{item.title}</p>
                <p className="text-xl mt-2 md:mt-0 text-red-600 font-bold"><FormattedNumber value={item.price} style={`currency`} currency="TRY" /></p>
            </div>
            <div className="flex justify-center mt-3 md:mt-0 lg:w-1/3">
                <button onClick={() => {
                    dispatch(count(item.id))
                    addToast()
                }} className="bg-afterpay-orange w-6 h-6 rounded-full flex justify-center mr-1">+</button>
                <p>{item.amount}</p>

                <button onClick={() => {
                    dispatch(deleteCount(index))
                    deleteToast()
                }} className="bg-afterpay-lightgray w-6 h-6 rounded-full flex justify-center ml-1">-</button>


                <button onClick={() => {
                    dispatch(removeItem(item.id))
                    deleteToast()
                }} className="bg-red-600 text-white w-12 h-6 ml-2 rounded-md">Kaldır</button>
            </div>
        </div>
    </>);
}

export default BasketCard;
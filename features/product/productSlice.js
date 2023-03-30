import { createSlice } from "@reduxjs/toolkit";
import products from '../../product';

const initialState = {
    productItems: products,
    basket: [],
    amount: 0,
    total: 0,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addBasket: (state, action) => {
            let someProduct = state.basket.find(item => {
                return item.id === action.payload;
            });

            if (someProduct) {
                let newBasket = state.basket.map(item => {
                    return item.id === someProduct.id ? { ...item, amount: item.amount + 1 } : item;
                });
                state.basket = newBasket;
            } else {
                let addProduct = state.productItems.find((item) => item.id === action.payload);
                state.basket.push(addProduct);
            }
        },
        removeBasket: (state) => {
            state.basket = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.basket = state.basket.filter((item) => (item.id !== itemId));
        },
        count: (state, action) => {
            const productId = action.payload;
            let someProduct = state.basket.find(item => {
                return item.id == productId;
            });
            if (someProduct) {
                let newBasket = state.basket.map(item => {
                    return item.id === someProduct.id ? { ...item, amount: item.amount + 1 } : item;
                })
                state.basket = newBasket;
            };
        },
        deleteCount: (state, action) => {
            let newBasket = state.basket;
            if (newBasket[action.payload].amount === 1) {
                newBasket.splice(action.payload, 1);
            } else {
                newBasket[action.payload].amount = (newBasket[action.payload].amount) - 1;
            }
            state.basket = newBasket;
        },
        totalCalculater: (state) => {
            let total = 0;
            state.basket.forEach((item) => {
                total += (item.price * item.amount);
            });
            state.total = total;
        },
        amountCalculator: (state) => {
            let amount = 0;
            state.basket.forEach((item) => (
                amount += item.amount
            ));
            state.amount = amount;
        }
    }
})

export default productSlice.reducer;
export const { addBasket, removeBasket, removeItem, count, deleteCount, totalCalculater, amountCalculator } = productSlice.actions;
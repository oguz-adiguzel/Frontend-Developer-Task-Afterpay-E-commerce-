import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'http://localhost:3000/api/hello';

const initialState = {
    email: '',
    password: '',
    userData: [],
    login: false
};

export const getUser = createAsyncThunk('user/getUser',
    async (name, thunkApi) => {
        try {
            const resp = await axios(url)
            return resp.data
        } catch {
            return thunkApi.rejectWithValue('something went wrong')
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        handleSubmit: (state, action) => {
            action.payload.preventDefault();
            state.userData.forEach((item) => (
                item.email === state.email && item.password === state.password ? state.login = true : state.login = false
            ));
            state.login === true ? alert('Başarılı Giriş Yapıldı') : alert('Kullanıcı Adı veya Şifre Hatalı');
        },
        handleChangeUser: (state, action) => {
            state.email = action.payload.target.value;
        },
        handleChangePassword: (state, action) => {
            state.password = action.payload.target.value;
        },
        exit: (state) => {
            state.email = '';
            state.password = '';
            state.login = false;
            alert('Çıkış Yapıldı');
        }
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.userData.push(action.payload);
        }
    }
})

export default userSlice.reducer;
export const { handleSubmit, handleChangeUser, handleChangePassword, exit } = userSlice.actions;

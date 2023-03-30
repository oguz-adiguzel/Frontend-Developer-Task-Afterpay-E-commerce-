import { getUser, handleChangePassword, handleChangeUser, handleSubmit } from "@/features/user/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const { email, password, login } = useSelector((store) => store.user)
    const router = useRouter();
    useEffect(() => {
        if (login) {
            router.push('/')
        }
    }, [login])
    useEffect(() => {
        dispatch(getUser('kullanıcılar'))
    }, []);
    return (<>
        <div className="container flex justify-center">
            <div className="w-full md:w-1/2 h-96 bg-afterpay-orange mt-16 flex justify-center flex-col items-center">
                <h2 className="text-3xl mb-4 font-bold text-white">Kullanıcı Girişi</h2>
                <form className="flex flex-col">
                    <label htmlFor="userName" className="text-white text-xl">Kullanıcı Adı</label>
                    <input value={email} onChange={(e) => dispatch(handleChangeUser(e))} id="userName" type='text' placeholder="Kullanıcı Adınızı Giriniz" className="w-64 h-9 pl-2 rounded-md" />
                    <label htmlFor="password" name="password" className="text-white text-xl mt-5">Parola</label>
                    <input value={password} onChange={(e) => dispatch(handleChangePassword(e))} id="password" type='password' placeholder="Parola Giriniz" className="w-64 h-9 pl-2 rounded-md" />
                    <button onClick={(e) => {
                        dispatch(handleSubmit(e));
                    }} type="button" className="bg-white text-afterpay-orange rounded-full mt-5 py-2 ">Giriş Yap</button>
                </form>
            </div>
        </div>
    </>);
}

export default Login;
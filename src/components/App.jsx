import "../style.css"
import React from "react"
import { Routes, Route } from 'react-router-dom'
import { MainPage, ItemPage, ContactUsPage, ReturnsPage, ShippingPage, TermsPage, CartPage, Diamonds37} from './pages/pages.jsx'
import { useDispatch, useSelector } from "react-redux"
import { selectIsAuth, fetchAuthMe } from "../redux/slices/auth"

const App = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth)

        if(isAuth){
            
        }

    React.useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])

    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/home" element={<MainPage/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/item" element={<ItemPage/>} />
                <Route path="/contact" element={<ContactUsPage/>} />
                <Route path="/returns" element={<ReturnsPage/>} />
                <Route path="/shipping" element={<ShippingPage/>} />
                <Route path="/terms" element={<TermsPage/>} />
                <Route path="/37diamonds" element={<Diamonds37/>} />
            </Routes>
        </>
    )
}

export default App
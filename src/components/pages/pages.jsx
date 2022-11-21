import Diamonds  from "../37diamonds/37Diamonds.jsx";
import { Header } from "../Static/Header.jsx";
import ItemTable from "../Home/ItemTable.jsx"
import Footer from "../Static/FooterTable.jsx"
import { Container } from "react-bootstrap";
import ReturnsBody from "../FooterLinks/Returns.jsx";
import ItemMarkup from "../../ItemPage/Item.jsx";
import Cart from "../Cart/Cart.jsx"

export const MainPage = () => {
    return (
        <>
            <Container>
                <Header />
                <ItemTable />
                <Footer />
            </Container>
        </>
    )
}

export const ItemPage = () => {
    return (
        <>
            <Container>
                <Header />
                    <ItemMarkup />
                <Footer />
            </Container>
        </>
    )
}

export const CartPage = () => {
    return (
        <>
            <Container>
                <Header />
                <Cart />
                <Footer />
            </Container>
        </>
    )
}


export const ContactUsPage = () => {
    return (
        <>
            <Container>
                <Header />
                <h1>ContactUsPage</h1>
                <Footer />
            </Container>
        </>
    )
}

export const ShippingPage = () => {
    return (
        <>
            <Container>
                <Header />
                <h1>ShippingPage</h1>
                <Footer />
            </Container>
        </>
    )
}

export const ReturnsPage = () => {
    return (
        <><Container>
            <Header />
            <ReturnsBody />
            <Footer />
        </Container></>
    )
}

export const TermsPage = () => {
    return (
        <><Container>
            <Header />
            <h1>TERMS OF SERVICE</h1>
            <Footer />
        </Container></>
    )
}

export const Diamonds37 = () => {
    return (
        <>
            <Container>
                <Diamonds/>
            </Container>
        </>
    )
}



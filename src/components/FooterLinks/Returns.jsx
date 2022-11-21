import React from "react";

const ReturnsBody = () => {
    return (
        <>
            <div style={{ marginTop: 120}}>
                <h1>Shipping policy</h1>
                <p>Free worldwide shipping on all orders above 150$</p>
                <p>For orders below 150$ :</p>
                <h1>Tracking</h1>
                <span style={{display: 'flex'}}>
                <a href="https://novaposhta.ua/eng/"><p style={{marginLeft: 400}}>Nova Poshta</p></a>
                <a href="https://www.dhl.com/ua-uk/home.html?locale=true"><p style={{marginRight: 400}}>DHL Express</p></a>
                </span>
                <table className="TTTT">
                    <tbody>
                        <tr>
                            <td height={20} width={200}>Region/Country</td>
                            <td width={50}>Days</td>
                            <td width={50}>Price</td>
                            <td width={100}>Delivery</td>
                        </tr>
                        <tr>
                            <td>Ukraine</td>
                            <td>1-3</td>
                            <td>2$</td>
                            <td>Nova Poshta</td>
                        </tr>
                        <tr>
                            <td>Poland, Denmark,<br /> Slovakia, Czechia, Hungary</td>
                            <td>2-4</td>
                            <td>22$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>North America</td>
                            <td>2-4</td>
                            <td>30$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Germany</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>France/Spain</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Luxemburg, Belgium, <br /> Netherlands, Slovenia</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Finland, Sweden</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Latvia, Lithuania</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Estonia</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                        <tr>
                            <td>Rest of Europe, United Kingdom</td>
                            <td>2-4</td>
                            <td>25$</td>
                            <td>DHL Expess</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReturnsBody
import React from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
 
const footer = () => {
    return (
        <>
            <Table className="head">
                <tr>
                    <td>
                        Custommer Support
                    </td>
                    <td>
                        Links
                    </td>
                    <td>
                        Subscription
                    </td>
                </tr>
                <br />
                <tr>
                    <td className='CustommerSup'>
                        <Link to="/contact"><p className='hov'>Contact us</p></Link>
                        <Link to="/shipping"><p className='hov'>Shipping</p></Link>
                        <Link to="/returns"><p className='hov'>Returns</p></Link>
                        <Link to="/terms"><p className='hov'>Terms of service</p></Link>
                    </td>
                    <td>
                        <a href="https://instagram.com/dinkam37"><p className='hov' style={{ paddingBottom: 60 }}>Instagram</p></a>
                    </td>
                    <td className="SendMailBlock">
                        <div className="SendMailDiv">
                            <label>New content, announcements and previews of <br/>
                            the new 2022 collections coming soon. <br/></label>
                            <input type="text" name="name" placeholder="Your Email" className='SendMailInput' />                            
                            <input type="submit" className="SendmMailBtn" value="Subscribe"/>
                        </div>
                    </td>
                </tr>
            </Table>
            <p style={{
                marginTop: 50,
                textAlign: 'center',
            }}>Copyright dinkam37.com</p>
        </>
    )
}

export default footer
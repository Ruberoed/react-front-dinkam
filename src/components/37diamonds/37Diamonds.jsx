import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../images/37.mkv"
import logodinkam37 from "../../images/logodinkam.svg"

const Diamonds = () => {
    return (
        <>
            <div className="diamonds">
                <Container>
                    <Navbar bg="light" expand="lg" style={{ position: 'absolute', marginTop: 70, marginLeft: 60, fontSize: '20px',  }}>
                        <Nav.Link href="#Members" style={{ fontSize: 13, fontWeight: 600 }}>Members</Nav.Link> <br />
                        <Nav.Link href="#Releases" style={{ fontSize: 13, fontWeight: 600  }}>Releases</Nav.Link><br />
                        <Nav.Link href="#AboutUs" style={{ fontSize: 13, fontWeight: 600 }}>About us</Nav.Link>
                    </Navbar>
                    <span style={{ display: 'inline', }}>
                        <img src={logo} alt="37LOGO" style={{ marginTop: 50, width: 300, marginLeft: 'auto', marginRight: 'auto', }} />
                    </span>
                    <h6 style={{ marginTop: 50, fontSize: 25, color: 'rgb(136 167 255)', }}>
                        SUBSCRIPTION
                    </h6>
                    <span>
                        <input type="text" placeholder="Type your Email" style={{ fontFamily: 'Russo One', fontSize: 18, width: 300, height: 40, borderWidth: 0, }} />
                        <input type="button" style={{ width: 100, marginTop: 30, height: 42, borderWidth: 0, backgroundColor: "rgb(136 167 255", fontFamily: 'Russo One', fontSize: 16, borderRadius: 6, color: 'white', letterSpacing: 2 }} value="SUBMIT" />
                    </span>
                    <span style={{ display: "block", marginTop: 130 }}>
                        <Link to="/home" ><img src={logodinkam37} alt="DINKAMLOGO" style={{ width: 150 }} /></Link>
                    </span>
                    <h6 style={{ marginTop: 30, fontSize: 15, fontWeight: 400}}>
                        Copyright © 2022, 37.diamonds®
                    </h6>

                </Container>
            </div>

        </>
    )
}

export default Diamonds 
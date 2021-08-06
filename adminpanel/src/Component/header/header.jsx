import React from 'react';
import './header.css';
import logoimg from "../../Assets/logo/desiretech1.png";
const Header = () => {
    return (
        <div>
            <div className='mainnav'>
                <div className='logo'>
                <img src={logoimg} alt=" ker rha hn bht kuch" />
                </div>
                <div className='navs'>
                    {/* <ul>
                        <li>Home</li>
                        <li>Order</li>
                        <li>setting</li>
                        <li>Feedback</li>
                        <li>Logout</li>
                    </ul> */}
                    <ul>
  <li><a className="active" href="#home">Home</a></li>
  <li><a href="#news">Order</a></li>
  <li><a href="#contact">Settings</a></li>
  <li><a href="#about">feedback</a></li>
  <li><a href="#Logout">Logout</a></li>
</ul>
                </div>
            </div>
        </div>
    );
}
 
export default Header;
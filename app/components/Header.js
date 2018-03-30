// var React = require('react');
var ReactDOM = require('react-dom');
var HomePage = require('HomePage');
var AboutUs = require('AboutUs');
var Contact = require('Contact');

import React from 'React';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';

var pStyle = {
  width: '50%',
  display: 'inline-block'
};

class Header extends React.Component{
  render(){
    const categories = [
        "Bao",
        "Bạt",
        "Nylon",
        "Dây",
        "Vải địa kỹ thuật",
        "Lưới",
        "Giày bảo hộ",
        "Găng tay bảo hộ",
        "Mũ bảo hộ"
    ];
    const listCategory = categories.map((cat) => <option value={cat}>{cat}</option>);
    const listCategoryLI = categories.map((cat) => <li><a href="#"><span>{cat}</span></a></li>);
    return(
      <header>
                <div className="top-bar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="top-call-to-acction">
                                    <p>
                                        <a href="tel:0123-456-789"><i className="fa fa-phone"></i> Điện thoại: 0236-3689-696</a>
                                        <a href="mailto:admin@bootexperts.com"><i className="fa fa-envelope-o"></i> E-mail: kimhuyhoang.dng@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 pull-right">
                                <div className="social-and-menu">
                                    {/* <div className="top-menu">
                                        <nav>
                                            <ul>
                                                <li><a href="#">English <i className="fa fa-caret-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">English</a></li>
                                                        <li><a href="#">Français</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">USD <i className="fa fa-caret-down"></i></a>
                                                    <ul>
                                                        <li><a href="#">Dollar (USD)</a></li>
                                                        <li><a href="#">Pound (GBP)</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div> */}
                                    <div className="top-social">
                                        <p>
                                            <a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                                            <a href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                                            <a href="https://www.rss.com/"><i className="fa fa-rss"></i></a>
                                            <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
                                            <a href="https://plus.google.com/"><i className="fa fa-google-plus"></i></a>
                                            <a href="https://www.pinterest.com/"><i className="fa fa-pinterest"></i></a>
                                            <a href="https://www.vimeo.com/‎"><i className="fa fa-vimeo-square"></i></a>
                                            <a href="https://instagram.com/"><i className="fa fa-instagram"></i></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-and-search-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-3 col-md-3">
                                <div className="logo">
                                    <a href="index.html"><img src="img/logo.png" alt="" /></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-9 col-md-9">
                                <div className="user-info-adn-search">
                                    {/* <div className="user-info">
                                        <p>
                                            <a href="#"><i className="fa fa-user"></i> My Account</a>
                                            <a href="wishlists.html"><i className="fa fa-heart-o"></i> Wishlist</a>
                                            <a href="#"><i className="fa fa-key"></i> Sign out</a>
                                            <a href="#"><i className="fa fa-signal"></i> Compare</a>
                                        </p>
                                    </div> */}
                                    <div className="search-and-cart">
                                        <div className="search-categori">
                                            <div className="categori">
                                                <form id="select-categoris" method="post" className="form-horizontal">
                                                    <select name="language">
                                                        {listCategory}
                                                    </select>
                                                </form>
                                            </div>
                                            <div className="search-box">
                                                <form action="#">
                                                    <input type="text" className="form-control input-sm" maxLength="64" placeholder="Enter your search key ... " />
                                                    <button type="submit">Search</button>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <div className="shoping-cart">
                                            <a href="cart.html"><span>My Cart (3)</span></a>
                                            <div className="add-to-cart-product">
                                                <div className="cart-product product-item11">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html"><img src="img/cart/faded-short-sleeves-tshirt.jpg" alt="Product" /></a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p><span>1</span>x<a href="single-product.html">Faded...</a></p>
                                                        <a href="single-product.html">S, Orange</a>
                                                        <span className="price">£ 19.81</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html"><img src="img/cart/printed-dress.jpg" alt="Product" /></a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p><span>1</span>x<a href="single-product.html">blouse</a></p>
                                                        <a href="single-product.html">S, Black</a>
                                                        <span className="price">£ 32.40</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                </div>
                                                <div className="cart-product">
                                                    <div className="cart-product-image">
                                                        <a href="single-product.html"><img src="img/cart/printed-summer-dress.jpg" alt="Product" /></a>
                                                    </div>
                                                    <div className="cart-product-info">
                                                        <p><span>1</span>x<a href="single-product.html">Printed...</a></p>
                                                        <a href="single-product.html">S, Yellow</a>
                                                        <span className="price">£ 36.60</span>
                                                    </div>
                                                    <div className="cart-product-remove">
                                                        <i className="fa fa-times"></i>
                                                    </div>
                                                </div>
                                                <div className="cart-price">
                                                    <div className="cart-product-line fast-line">
                                                        <span>Shipping</span>
                                                        <span className="free-shiping">$10.50</span>
                                                    </div>
                                                    <div className="cart-product-line">
                                                        <span>Total</span>
                                                        <span className="total">£ 88.81</span>
                                                    </div>
                                                </div>
                                                <div className="cart-checkout">
                                                    <a href="checkout.html">Check out<i className="fa fa-chevron-right"></i></a>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainmenu-area">
                    <div className="container">
                        <div className="row">
                            <div className="mainmenu">
                                <nav>
                                    <ul>
                                        <li><a className="home" href="index.html"><i className="fa fa-home"></i></a>
                                            {/* <ul>
                                                <li><a href="index-2.html"><span>Home2</span></a></li>
                                                <li><a href="index-3.html"><span>Home3</span></a></li>
                                                <li><a href="index-4.html"><span>Home4</span></a></li>
                                            </ul> */}
                                        </li>
                                        <li><a href="about-us.html">Giới thiệu</a></li>
                                        <li><a href="shop-grid.html">Cửa hàng</a></li>
                                        <li><a href="#">Liên hệ</a></li>
                                        <li><a href="blog.html">Chính sách vận chuyển</a></li>
                                        <li><a href="">Danh mục sản phẩm</a>
                                            <ul>{listCategoryLI}</ul>
                                        </li>
                                        <li><a href="contact-us.html">Chi nhánh, kho hàng</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 np">
                                <div className="mobile-menu">
                                    <nav id="dropdown">
                                        <ul className="nav">
                                            <li><a className="home" href="index.html">Home</a>
                                                <ul>
                                                    <li><a href="index-2.html"><span>Home2</span></a></li>
                                                    <li><a href="index-3.html"><span>Home3</span></a></li>
                                                    <li><a href="index-4.html"><span>Home4</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="about-us.html">About us</a></li>
                                            <li><a href="shop-grid.html">shop</a></li>
                                            <li><a href="#">Delivery</a></li>
                                            <li><a href="blog.html">Blog</a>
                                                <ul>
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-non-sidebar.html">Blog non sidebar</a></li>
                                                    <li><a href="single-blog.html">Single blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="">Pages</a>
                                                <ul>
                                                    <li><a href="about-us.html"><span>About us</span></a></li>
                                                    <li><a href="blog.html"><span>Blog</span></a></li>
                                                    <li><a href="blog-non-sidebar.html"><span>blog non sidebar</span></a></li>
                                                    <li><a href="single-blog.html"><span>single blog</span></a></li>
                                                    <li><a href="shop-grid.html"><span>shop grid</span></a></li>
                                                    <li><a href="shop-list.html"><span>shop list</span></a></li>
                                                    <li><a href="single-product.html"><span>single product</span></a></li>
                                                    <li><a href="cart.html"><span>cart</span></a></li>
                                                    <li><a href="wishlists.html"><span>wishlists</span></a></li>
                                                    <li><a href="checkout.html"><span>checkout</span></a></li>
                                                    <li><a href="contact-us.html"><span>contact us</span></a></li>
                                                    <li><a href="404.html"><span>404</span></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
  }
}

module.exports = Header;

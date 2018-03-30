import React from 'React';

class HomePage extends React.Component{
  render(){
    return(
      <div>
        <div className="slider-area">
                <div id="slider" className="nivoSlider">
                    <img style={{display:'none'}} src="img/slider/1.jpg"  data-thumb="img/slider/1.jpg"  alt="" title="#htmlcaption1"/>      
                    <img style={{display:'none'}} src="img/slider/2.jpg"  data-thumb="img/slider/2.jpg"  alt="" title="#htmlcaption2"/>
                </div>
                <div id="htmlcaption1" className="pos-slideshow-caption nivo-html-caption nivo-caption">
                    <div className="timing-bar"></div>
                    <div className="pos-slideshow-info pos-slideshow-info1">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1"><span className="txt">Camera Digital</span></div>
                                <div className="title2"><span className="txt">Brand D5500</span></div>
                                <div className="pos-slideshow-readmore">
                                    <a href="http://bootexperts.com/" title="Shop now">Shop now</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="htmlcaption2" className="pos-slideshow-caption nivo-html-caption nivo-caption">
                    <div className="timing-bar"></div>
                    <div className="pos-slideshow-info pos-slideshow-info2">
                        <div className="container">
                            <div className="pos_description hidden-xs hidden-sm">
                                <div className="title1"><span className="txt">Tivi Brand Name</span></div>
                                <div className="title2"><span className="txt">48" Full HD Flat TV</span></div>
                                <div className="pos-slideshow-readmore">
                                    <a href="#" title="Shop now">Shop now</a>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="categori-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-3">
                            <div className="categori-menu">
                                <div className="sidebar-menu-title">
                                    <h2><i className="fa fa-th-list"></i>Categories</h2>
                                </div>
                                <div className="sidebar-menu">
                                    <ul>
                                        <li><a href="shop-grid.html">Automotive & Motorcycle</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>electronic</span></a>
                                                        <a href="shop-grid.html"><span>Camera & Camcorders</span></a>
                                                        <a href="shop-grid.html"><span>Electronic</span></a>
                                                        <a href="shop-grid.html"><span>Cosmetic</span></a>
                                                        <a href="shop-grid.html"><span>Medical & Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Laptop & Computer</span></a>
                                                        <a href="shop-grid.html"><span>Phasellus laoreet</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>electronic</span></a>
                                                        <a href="shop-grid.html"><span>Camera & Camcorders</span></a>
                                                        <a href="shop-grid.html"><span>Electronic</span></a>
                                                        <a href="shop-grid.html"><span>Cosmetic</span></a>
                                                        <a href="shop-grid.html"><span>Medical & Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Laptop & Computer</span></a>
                                                        <a href="shop-grid.html"><span>Phasellus laoreet</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>laptop</span></a>
                                                        <a href="shop-grid.html"><span>Phasellus laoreet</span></a>
                                                        <a href="shop-grid.html"><span>Medical & Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Electronic</span></a>
                                                        <a href="shop-grid.html"><span>Cosmetic</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="#">Electronics</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>camera & camcorder</span></a>
                                                        <a href="shop-grid.html"><span>Medical & Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Laptop & Computer</span></a>
                                                        <a href="shop-grid.html"><span>Camera</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>Medical</span></a>
                                                        <a href="shop-grid.html"><span>Camera</span></a>
                                                        <a href="shop-grid.html"><span>Camcorders</span></a>
                                                        <a href="shop-grid.html"><span>Camera & Camcorders</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Medical</span></a>
                                                        <a href="shop-grid.html"><span>Healthcare</span></a>
                                                        <a href="shop-grid.html"><span>Medical & Healthcare</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="shop-grid.html">Sports & Outdoors</a>
                                            <div className="megamenudown-sub">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>category 1</span></a>
                                                        <a href="shop-grid.html"><span>day</span></a>
                                                        <a href="shop-grid.html"><span>evening</span></a>
                                                        <a href="shop-grid.html"><span>night</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>category 2</span></a>
                                                        <a href="shop-grid.html"><span>kids</span></a>
                                                        <a href="shop-grid.html"><span>men</span></a>
                                                        <a href="shop-grid.html"><span>Women</span></a>
                                                    </div>
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html" className="title"><span>category 3</span></a>
                                                        <a href="shop-grid.html"><span>clothing</span></a>
                                                        <a href="shop-grid.html"><span>Accessories</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="shop-grid.html">Smartphone & Tablets</a>
                                            <div className="megamenudown-sub mini">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html"><span>category 1</span></a>
                                                        <a href="shop-grid.html"><span>category 2</span></a>
                                                        <a href="shop-grid.html"><span>category 3</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="shop-grid.html">Health & Beauty</a>
                                            <div className="megamenudown-sub mini">
                                                <div className="mega-top">
                                                    <div className="mega-item-menu">
                                                        <a href="shop-grid.html"><span>category 1</span></a>
                                                        <a href="shop-grid.html"><span>category 2</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="shop-grid.html" className="single-menu">Bags, Shoes & Accessories</a></li>
                                        <li><a href="shop-grid.html" className="single-menu">Computers & Networking</a></li>
                                        <li><a href="shop-grid.html" className="single-menu">Laptops & Accessories</a></li>
                                        <li><a href="shop-grid.html" className="single-menu">Entertainment</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-8 col-md-6">
                            <div className="categori-banner">
                                <div className="banner-left">
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms11.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms12.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div className="banner-right">
                                    <div className="banner-image">
                                        <a href="#">
                                            <img src="img/banner/cms13.jpg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="categori-slide-product">
                                <div className="slide-product-title">
                                    <h3>sale off</h3>
                                </div>
                                <div className="slide-product">
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-summer-dress1.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-5%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress3.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">printed chiffon dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress5.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress2.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress4.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress6.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress7.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress11.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress10.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slide-product-item">
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress8.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress4.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                        <div className="item3">
                                            <div className="product-image">
                                                <a href="single-product.html">
                                                    <img src="img/product-mini/printed-chiffon-dress12.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="product-info">
                                                <a href="single-product.html">Printed Summer Dress</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="purches-progress-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Purchase progress</h3>
                            </div>
                        </div>
                        <div className="progress-area">
                            <div className="col-sm-3">
                                <div className="progrtee-box icon">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon1">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon2">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="progrtee-box icon3">
                                    <h4>step 1</h4>
                                    <p>select your items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Featured Products</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <div className="featured-item">
                                <div className="col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.51</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/blouse.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Blouse</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$27.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress1.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$50.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$28.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$30.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$306.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$120.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$20.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$30.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="two-banner-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-left">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms14.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="banner-right">
                                <div className="banner-image">
                                    <a href="#">
                                        <img src="img/banner/cms15.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-sellar-area featured-product-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>BESTSELLER</h3>
                            </div>
                        </div>
                        <div className="featured-product">
                            <div className="featured-item">
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.51</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/blouse.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Blouse</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$27.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress1.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-dress2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$50.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$28.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-summer-dress.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Summer Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$30.00</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$16.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$306.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$26.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$120.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$20.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$30.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-3">
                                    <div className="featured-inner">
                                        <div className="featured-image">
                                            <a href="single-product.html">
                                                <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                            </a>
                                            <span className="price-percent-reduction">-20%</span>
                                        </div>
                                        <div className="featured-info">
                                            <a href="single-product.html">Printed Chiffon Dress</a>
                                            <p className="reating">
                                                <span className="rate">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </span>
                                            </p>
                                            <span className="price">$200.40</span>
                                            <div className="featured-button">
                                                <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="camera-and-cosmatic-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Camera & Camcorders</h3>
                            </div>
                            <div className="camera-area">
                                <p className="extra-link">
                                    <a href="#"><i className="fa fa-bar-chart"></i>10 products here</a>
                                    <a href="#"><i className="fa fa-star-o"></i>View more in category</a>
                                </p>
                                <div className="row">
                                    <div className="camera-slide featured-product-area">
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$20.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$30.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <div className="area-title">
                                <h3>Cosmetic</h3>
                            </div>
                            <div className="cosmatic-area">
                                <p className="extra-link">
                                    <a href="#"><i className="fa fa-bar-chart"></i>10 products here</a>
                                    <a href="#"><i className="fa fa-star-o"></i>View more in category</a>
                                </p> 
                                <div className="row">
                                    <div className="camera-slide featured-product-area">
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$200.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$20.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="featured-inner">
                                            <div className="featured-image">
                                                <a href="single-product.html">
                                                    <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                </a>
                                                <span className="price-percent-reduction">-20%</span>
                                            </div>
                                            <div className="featured-info">
                                                <a href="single-product.html">Printed Chiffon Dress</a>
                                                <p className="reating">
                                                    <span className="rate">
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                                </p>
                                                <span className="price">$30.40</span>
                                                <div className="featured-button">
                                                    <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                    <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                    <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popular-tab-categori">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>Popular categories</h3>
                            </div>
                        </div>
                        <div id="content" className="tab-menu-slide">
                            <ul id="tabs" className="popular-tab-menu" data-tabs="tabs">
                                <li className="active">
                                    <a href="#tab1" data-toggle="tab">
                                        <i className="fa fa-laptop"></i>
                                        <h3>Electronic</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab2" data-toggle="tab">
                                        <i className="fa fa-mobile"></i>
                                        <h3>Cosmetic</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab3" data-toggle="tab">
                                        <i className="fa fa-plug"></i>
                                        <h3>Medical & Healthcare</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab4" data-toggle="tab">
                                        <i className="fa fa-microphone"></i>
                                        <h3>Laptop & Computer</h3>
                                    </a>
                                </li>
                                <li>
                                    <a href="#tab5" data-toggle="tab">
                                        <i className="fa fa-gamepad"></i>
                                        <h3>Phasellus laoreet</h3>
                                    </a>
                                </li>
                                <li><a href="#tab6" data-toggle="tab">
                                    <i className="fa fa-camera-retro"></i>
                                    <h3>mobile & tablet</h3>
                                    </a>
                                </li>
                            </ul>
                            <div id="my-tab-content" className="tab-content row">
                                <div className="tab-pane active" id="tab1">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab2">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab3">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab4">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab5">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tab6">
                                    <div className="popular-tab-product featured-product-area">
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$50.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$28.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-summer-dress.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Summer Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress4.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/faded-short-sleeves-tshirt.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Faded Short Sleeves T-shirt</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.51</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/blouse.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Blouse</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$27.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-dress1.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.00</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress8.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$16.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress5.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$306.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress3.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dresst.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$26.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressac.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$120.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress10.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$20.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dressw.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$30.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress12.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-3">
                                            <div className="featured-inner">
                                                <div className="featured-image">
                                                    <a href="single-product.html">
                                                        <img src="img/product/printed-chiffon-dress13.jpg" alt="" />
                                                    </a>
                                                    <span className="price-percent-reduction">-20%</span>
                                                </div>
                                                <div className="featured-info">
                                                    <a href="single-product.html">Printed Chiffon Dress</a>
                                                    <p className="reating">
                                                        <span className="rate">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </span>
                                                    </p>
                                                    <span className="price">$200.40</span>
                                                    <div className="featured-button">
                                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brand-and-client">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>BRAND & CLIENTS</h3>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="brand-logo featured-product-area">
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/1.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/2.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/3.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/4.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/5.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/6.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/1.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/3.jpg" alt="" /></a>
                                </div>
                                <div className="clients">
                                    <a href="#"><img src="img/brand-logo/4.jpg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12">
                            <div className="area-title">
                                <h3>The Blog</h3>
                            </div>
                        </div>
                        <div className="blog-box featured-product-area">
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html"><img src="img/blog/4-home-default.jpg" alt="" /></a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3><a href="single-blog.html">Share the Love for PrestaShop 1.6</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    <a href="single-blog.html" className="readmore">Read more<i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html"><img src="img/blog/3-home-default.jpg" alt="" /></a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3><a href="single-blog.html">Answers to your Questions about PrestaShop</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    <a href="single-blog.html" className="readmore">Read more<i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html"><img src="img/blog/2-home-default.jpg" alt="" /></a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3><a href="single-blog.html">What is Bootstrap? – The History and the Hype</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    <a href="single-blog.html" className="readmore">Read more<i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <a href="single-blog.html"><img src="img/blog/1-home-default.jpg" alt="" /></a>
                                <span className="blog-date">2015-08-12 04:40:21</span>
                                <div className="blog-info">
                                    <h3><a href="single-blog.html">From Now we are certified web agency</a></h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...</p>
                                    <a href="single-blog.html" className="readmore">Read more<i className="fa fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>      
    )
  }
}

module.exports = HomePage;

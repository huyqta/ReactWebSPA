import React from 'React';

class ProductHomePage extends React.Component{
    constructor(){
        super();
        this.state = {
            MuBaoHoLaoDong:[],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/category/getProductByCategory/' + this.props.category)
        .then(results => {
                return results.json();
            }).then(data => {
                let muBHLD =  data.map((cat) => {
                    var image = cat.ImageUrl === null ? 'img/sorry-image-not-available.png' : cat.ImageUrl;
                    return (
                        <div className="col-xs-12 col-sm-3">
                            <div className="featured-inner">
                                <div className="featured-image">
                                    <a href="single-product.html">
                                        <img src={image} alt="" />
                                    </a>
                                </div>
                                <div className="featured-info">
                                    <a href="single-product.html">{cat.Name}</a>
                                    <p className="reating">
                                        <span className="rate">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </span>
                                    </p>
                                    <span className="price">{cat.Price}</span>
                                    <div className="featured-button">
                                        <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                                        <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                                        <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            })
            this.setState({MuBaoHoLaoDong: muBHLD});
    })
}
componentDidUpdate() {
    if (this.props.category === "1021"){
        $(".featured-product-area-section .featured-item").owlCarousel({
            navigation : true,
            pagination : false,
            slideSpeed : 600,
            paginationSpeed : 400,
            items : 5,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3], 
            itemsTablet: [767,2], 
            itemsMobile : [480,1],
            navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
        });
    }
    if (this.props.category === "1024"){
        $(".best-sellar-area-section .featured-item").owlCarousel({
            navigation : true,
            pagination : false,
            slideSpeed : 600,
            paginationSpeed : 400,
            items : 5,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3], 
            itemsTablet: [767,2], 
            itemsMobile : [480,1],
            navigationText : ['<i class="icon-left-open"><i class="fa fa-angle-left"></i></i>','<i class="icon-right-open"><i class="fa fa-angle-right"></i></i>'] 
        });
    }
}
  render(){
    return(
        <div className="featured-item">
            {this.state.MuBaoHoLaoDong}
        </div>
    )
  }
}

module.exports = ProductHomePage;

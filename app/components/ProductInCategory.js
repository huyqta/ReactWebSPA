import React from 'React';

class ProductInCategory extends React.Component{
  constructor(){
    super();
    this.state = {
        MuBaoHoLaoDong:[],
        soluong:0,
        tenDanhMuc:''
    };
}
  componentDidMount() {
    console.log('Start!');
    fetch('http://localhost:3000/category/getProductByCategory/' + this.props.category)
    .then(results => {
            return results.json();
        }).then(data => {
            console.log("Data: " + data);
            let muBHLD =  data.map((cat) => {
                var image = cat.ImageUrl === null ? 'img/sorry-image-not-available.png' : cat.ImageUrl;
                if ( this.props.type === 'grid'){
                  return (
                    <div className="col-xs-12 col-sm-6 col-md-3">
                      <div className="featured-inner">
                        <div className="featured-image">
                          <a href="single-product.html">
                            <img src={image} alt="" />
                          </a>
                        </div>
                        <div className="featured-info">
                          <a href="single-product.html">{cat.Name}}</a>
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
                  )
                }
                else{
                  return (
                    <div className="col-sm-12">
                      <div className="featured-inner">
                        <div className="featured-image">
                          <a href="single-product.html">
                            <img src={image} alt=""/>
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
                          <p className="product-text">Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer! </p>
                          <span className="price">$16.51</span>
                          <div className="featured-button">
                            <a href="wishlists.html" className="wishlist"><i className="fa fa-heart"></i></a>
                            <a href="#" className="fetu-comment"><i className="fa fa-signal"></i></a>
                            <a href="cart.html" className="add-to-card"><i className="fa fa-shopping-cart"></i>Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }                   
        })
        this.setState({MuBaoHoLaoDong: muBHLD, soluong:data.length,tenDanhMuc:data[0].CategoryName});
  })
}
componentDidUpdate() {
  $('.heading-counter').text("Hiện có "+this.state.soluong+" sản phẩm trong danh mục này.");
  $('.cat-name').text(this.state.tenDanhMuc);  
}
  render(){
    return(
      <div>{this.state.MuBaoHoLaoDong}</div>
    )
  }
}

module.exports = ProductInCategory;

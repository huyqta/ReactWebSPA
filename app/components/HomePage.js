import React from 'React';

class HomePage extends React.Component{
  render(){
    return(
      <div className="owl-carousel my-carousel">
            <div>
              <img src="images/slides/slider-slide-3-1464x660.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/slider-slide-2-1464x660.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/slider-slide-1-1464x660.jpg" alt="Los Angeles" />
            </div>
          </div>
      <div className="slide-section-layout">
        <div className="slide-section-main">
          <div className="owl-carousel my-carousel">
            <div>
              <img src="images/slides/slider-slide-3-1464x660.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/slider-slide-2-1464x660.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/slider-slide-1-1464x660.jpg" alt="Los Angeles" />
            </div>
          </div>
        </div>
        <div className="slide-section-aside">
          <div className="my-block-banner">
            <div>
              <img src="images/slides/home-creative-1-538x200.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/home-creative-1-538x200.jpg" alt="Los Angeles" />
            </div>
            <div>
              <img src="images/slides/home-creative-1-538x200.jpg" alt="Los Angeles" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = HomePage;

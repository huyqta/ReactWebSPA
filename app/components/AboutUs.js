import React from 'React';

class AboutUs extends React.Component{
  render(){
    return(
      <div>
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
    )
  }
}

module.exports = AboutUs;

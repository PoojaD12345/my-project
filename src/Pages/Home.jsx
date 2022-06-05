import React from 'react'

const Home = () => {
  return (
    <div>
        {/* <img src='https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1400x.png?v=1646626071'/> */}
        <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/proper-business-home_ae5539d2-bb7b-4d42-a135-dcb753d10798_1400x.png?v=1646626071"  
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/rugged_banner_full_a67c7f70-30ae-4d1e-946a-cc90d9495223_1400x.png?v=1651714140"
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0183/5769/files/24hop-B_7c30769f-cb0d-4cd7-a871-8c431d186f96_1400x.png?v=1644373690"
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>24hoursr of power</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.shopify.com/s/files/1/0044/9802/t/36/assets/feature6.jpg?8700"
      className="d-block w-100" alt="image"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>24hoursr of power</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      </div>
    </div>
  )
}

export default Home
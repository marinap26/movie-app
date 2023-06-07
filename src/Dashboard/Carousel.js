import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({movies}){
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll:1
      };

      const carouselMovies = movies.filter(movie => movie.year==2007)
      
    return (
            <div className="movie-card">
              <Slider {...settings}>
                {carouselMovies.map((movie) => (
                    <div key={movie.id}>
                    <img src={movie.posterUrl} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    </div>
                ))}
              </Slider>
            </div>
          );
    
}
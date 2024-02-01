import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './images/secondSection/1.jpg';
import img2 from './images/secondSection/3.jpg';
import img3 from './images/secondSection/4.jpg';
import img4 from './images/secondSection/5.jpg';
import img5 from './images/secondSection/6.jpg';
import img6 from './images/secondSection/7.jpg';
import img7 from './images/secondSection/8.jpg';
import img8 from './images/secondSection/9.jpg';
import img9 from './images/secondSection/10.jpg';
import img10 from './images/secondSection/11.jpg';
import img11 from './images/secondSection/12.jpg';
import img12 from './images/secondSection/13.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './images/secondSection/8tanbyhk99ls0qb0i8.svg'
import arrow1 from './images/secondSection/ni83pkiomzls0qbtya.svg'
import './App.css';

const SecondSection = () => {
  const secondItems = [
    { img: img1, rating: '5.0 (19) Japan', description: 'Learn & Plan a Kyoto trip with local advisor Yuko', price: '635' },
    { img: img2, rating: '5.0 (48) Japan', description: 'Plan the perfect Customised Japan Trip with Local Expert', price: '3808' },
    { img: img3, rating: '5.0 (14) Japan', description: 'Create a customized Guide book of Tokyo with a local guide', price: '2934' },
    { img: img4, rating: '5.0 (3) Japan', description: 'Plan a Tour Not Crowed but Cool Sites in Tokyo Local', price: '635' },
    { img: img5, rating: '5.0 (3) Japan', description: 'Design a perfect Tokyo trip with a Tokyo expert', price: '635' },
    { img: img6, rating: '5.0 (5) Japan', description: 'Plan A Dream Japan Vacation', price: '635' },
    { img: img7, rating: '5.0 (3) Japan', description: 'Make original itinerary in Kyoto with Akari', price: '3836' },
    { img: img8, rating: '5.0 (170) United States', description: 'Plan The Perfect New York Vacation', price:'1579'},
    { img: img9, rating: '5.0 (24) Spain', description: 'Design your trip to Barcelona with Gemma', price: '4320' },
    { img: img10, rating: '5.0 (16) Spain', description: 'Plan The Perfect Barcelona Vacation', price: '1350' },
    { img: img11, rating: '4.92 (50) Italy', description: 'Create your Rome itinerary with Debora', price: '540' },
    { img: img12, rating: '5.0 (20) Italy', description: 'Plan a Venice venture with Giulia', price: '2700' },
    ];
    const chunkedSecondItems = Array.from({ length: Math.ceil(secondItems.length / 6) }, (_, i) =>
    secondItems.slice(i * 6, i * 6 + 6)
  );
  const [secondIndex, setSecondIndex] = useState(0);

  const handleSecondSelect = (selectedIndex, e) => {
    setSecondIndex(selectedIndex);
  };

  const prevSecondIndex = () => {
    let prev_index = secondIndex === 0 ? chunkedSecondItems.length - 1 : secondIndex - 1;
    setSecondIndex(prev_index);
  };

  const nextSecondIndex = () => {
    let next_index = (secondIndex + 1) % chunkedSecondItems.length;
    setSecondIndex(next_index);
  };

  return (
    <div className='containerStyless'>
      <div className='d-flex align-items-center justify-content-between mx-5' >
        <h3 className='h2Styless' >
          Plan a trip with help from local Hosts around the world
        </h3>
        <div className='d-flex gap-2 align-items-center'>
          <a href='#' className='text-decoration-none'>Show All</a>
          <div className="circleStyle rounded-circle ml-2" onClick={prevSecondIndex}>
            <img src={arrow} alt='photo' style={{ width: '15px' }} />
          </div>
          <div className="circleStyle rounded-circle ml-2" onClick={nextSecondIndex}>
            <img src={arrow1} alt='photo' style={{ width: '15px' }} />
          </div>
        </div>
      </div>
      <div className='imageContainerStyless'>
        <Carousel activeIndex={secondIndex} onSelect={handleSecondSelect} interval={null}>
        {chunkedSecondItems.map((chunk, chunkIndex) => (
        <Carousel.Item key={chunkIndex}>
            <div className="row">
              {chunk.map((item, itemIndex) => (
                <div key={itemIndex} className="col-md-2" >
                  <img src={item.img} alt={`Slide ${chunkIndex * 6 + itemIndex + 1}`} className='imageStyless' />
                  <div style={{ marginTop: '10px' }}>
                    <p> &#11088; {item.rating}</p>
                    <p> {item.description}</p>
                    <p><strong>From &#8377;{item.price}</strong>/person</p>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SecondSection;

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import arrow from './images/secondSection/8tanbyhk99ls0qb0i8.svg';
import arrow1 from './images/secondSection/ni83pkiomzls0qbtya.svg';
import img1 from './images/firstSection/1.jpg';
import img2 from './images/firstSection/2.jpg';
import img3 from './images/firstSection/3.jpg';
import img4 from './images/firstSection/4.jpg';
import './App.css';

const FirstSection = () => {
  const items = [
    { caption: 'Most popular around the world', collection: 'Collection', imgSrc: img1 },
    { caption: 'Easy for itinerary planning', collection: 'Collection', imgSrc: img2 },
    { caption: 'Great for team building', collection: 'Collection', imgSrc: img3 },
    { caption: 'Fun for the family', collection: 'Collection', imgSrc: img4 },
    { caption: 'Most popular around the world', collection: 'Collection', imgSrc: img1 },
    { caption: 'Easy for itinerary planning', collection: 'Collection', imgSrc: img2 },
    { caption: 'Great for team building', collection: 'Collection', imgSrc: img3 },
    { caption: 'Fun for the family', collection: 'Collection', imgSrc: img4 },
    { caption: 'Most popular around the world', collection: 'Collection', imgSrc: img1 },
    { caption: 'Easy for itinerary planning', collection: 'Collection', imgSrc: img2 },
    { caption: 'Great for team building', collection: 'Collection', imgSrc: img3 },
    { caption: 'Fun for the family', collection: 'Collection', imgSrc: img4 },
  ];
  const chunkedItems = Array.from({ length: Math.ceil(items.length / 3) }, (_, i) =>
    items.slice(i * 3, i * 3 + 3)
  );

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);

  };

  const prevIndex = () => {
    let prev_index = index === 0 ? chunkedItems.length - 1 : index - 1;
    setIndex(prev_index);
    console.log(index)
  };

  const nextIndex = () => {
    let next_index = (index + 3) % chunkedItems.length;
    setIndex(next_index);
    console.log(index)
  };

  const buttons = [
    'Great for Groups', 'Family-Friendly', 'Animals', 'Arts & Writing', 'Baking', 'Cooking',
    'Dance', 'Drinks', 'Entertainment', 'Fitness', 'History & Culture', 'Magic', 'Music',
    'Social Impact', 'Wellness', 'Olympians & Paralympians', 'Design for Accessibility'
  ];

  const chunkedButtons = Array.from({ length: Math.ceil(buttons.length / 11) }, (_, i) =>
    buttons.slice(i * 11, i * 11 + 11)
  );

  const [buttonIndex, setButtonIndex] = useState(0);

  const prevButtonIndex = () => {
    let prev_index = buttonIndex === 0 ? chunkedButtons.length - 1 : buttonIndex - 1;
    setButtonIndex(prev_index);
  };

  const nextButtonIndex = () => {
    let next_index = (buttonIndex + 1) % chunkedButtons.length;
    setButtonIndex(next_index);
  };
  const isPrevArrowVisible = index > 0;
  const isNextArrowVisible = index < chunkedItems.length - 1;

  const prevArrowOpacity = isPrevArrowVisible ? 1 : 0.2;
  const nextArrowOpacity = isNextArrowVisible ? 1 : 0.2;

  return (
    <div className="containerStyle" >
      <div className='d-flex align-items-center justify-content-between px-5' >
        <h2 className='h2style gap-5'>New this week</h2>
        <div className='d-flex justify-content-end'>
            <div className=" circleStyle rounded-circle ml-2" style={{ opacity: prevArrowOpacity }} onClick={prevIndex}>
              <img src={arrow} alt='photo' style={{ width: '15px' }} />
            </div>
            <div className="circleStyle rounded-circle ml-2" style={{ opacity: nextArrowOpacity }} onClick={nextIndex}>
              <img src={arrow1} alt='photo' style={{ width: '15px' }} />
            </div>
        </div>
      </div>

      <div className='imageContainerStyle'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
          {chunkedItems.map((chunk, chunkIndex) => (
            <Carousel.Item key={chunkIndex}>
              <div className="horizontal-item">
                {chunk.map((item, itemIndex) => (
                  <div key={itemIndex}  >
                    <div className='imageWrapperStyle'>
                      <h6 className='h6Style'>{item.collection}</h6>
                      <h4 className='imageCaptionStyle'>{item.caption}</h4>
                      <img key={index} src={item.imgSrc} alt={`Slide ${chunkIndex * 3 + itemIndex + 1}`} className='imageStyle' />
                      <button className='buttonStylefs'>Show all</button>
                    </div>
                  </div>
                ))}
              </div>

            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='buttons'>
        <div className="d-flex align-items-center">
          <button className='button'>Dates</button>
          <button className='button'>Group Size</button>
          <button className='button'>More filters</button>
          <div className='vertical-line'></div> 
          <div className=' circleStyle rounded-circle ml-2' onClick={prevButtonIndex}>
            <img src={arrow} alt='photo' style={{ width: '15px' }} />
          </div>
          <Carousel activeIndex={buttonIndex} interval={null} style={{ flex: '4', overflow: 'hidden' }}>
            {chunkedButtons.map((chunk, chunkIndex) => (
              <Carousel.Item key={chunkIndex}>
                <div className="d-flex flex-wrap align-items-center">
                  {chunk.map((button, buttonIndex) => (
                    <button key={buttonIndex} className='btn'>{button}</button>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>

          <div className='circleStyle rounded-circle ml-2' onClick={nextButtonIndex}>
            <img src={arrow1} alt='photo' style={{ width: '15px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;

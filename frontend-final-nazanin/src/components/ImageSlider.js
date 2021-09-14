import React, {useState, useEffect} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import {useHistory} from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web'
import Button from './Button'
import './button.scss'


const ImageSlider = ({slides}) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const history = useHistory();

  const transitions = useTransition(current, {
    key: current,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 3000 },
  })

  useEffect(() => {
    const t = setInterval(() => setCurrent(state => (state + 1) % length), 4000)
    return () => clearTimeout(t)
  }, []);
 

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1)
  }

  console.log(current);

  if(!Array.isArray(slides) || slides.length <= 0){
    return null;
  }

    return (
    <>
       <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            backgroundImage: `url(https://images.unsplash.com/${slides[i]}?w=1920&q=80&auto=format&fit=crop)`,
          }}
        />
        ))}
      </div>

      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

        
        {SliderData.map((slide, index)=>{
        return (
            <div className={index === current ? 'slide active': 'slide'} key={index}>
                {index === current && (<img src={slide.image} alt="music image" className='image'/>)}               
            </div>
        )
      })}
      </section>
      <div className="container">
       <div className="vertical-center">
         <Button/>
      </div>
    </div>
    </>
    )
};

export default ImageSlider;
import * as React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProgressiveImage from "react-progressive-image";
import ImgYas from '../img/bill.jpg';
import '../components/button.scss';
import Button from './Button';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Pricing = ({ imageDetails, image }) => (
  <>
    <main>
      <div className='container'>
        <div className='row center'>
          <div className='image-container'>
            <div
              className='thumbnail'
              ref={image}
              style={{
                width: imageDetails.width,
                height: imageDetails.height,
              }}>
              <div className='frame'>
                <Link to={`/artist/billie-eilish`}>
                  <ProgressiveImage
                    src={ImgYas}
                    placeholder={require("../img/bill.jpg")}
                    >
                    {(src) => (
                      <motion.img
                        src={src}
                        alt='Billie Eilish'
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                      />
                    )}
                  </ProgressiveImage>
                </Link>
              </div>
            </div>
            <Button/>
            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className='information'>
              <div className='title'>Billie Eilish</div>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default Pricing;

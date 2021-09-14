import './image.scss'
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Footer from '../components/footer/Footer';
// import '../components/style.module.css'
// import {CustomCursor} from '../components/CustomCursor';


function Images(){
    
    return (
        <div className="page-wrapper">
         <ImageSlider slides={SliderData}/>
         {/* <CustomCursor/> */}
         {/* <Footer/> */}
      </div>
    )
}

export default Images;





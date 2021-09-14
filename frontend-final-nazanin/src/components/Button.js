import React from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './button.scss'

const Button = () => {
    return (
       <motion.div className="button container"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:1.5, duration:1.5}}
       >
           <Link to="/pricing">
               <motion.button
               className="glow-on-hover"
                whileHover={{
                    scale:1.1,
                    textShadow:"0px 0px 8px rgb(255,255,255)",
                    boxShadow:"0px 0px 8px rgb(255,255,255)",
                    color:"#f8e112",
                    backgroundColor:"gray"
                }}
               >
                Try It Now
               </motion.button>
           </Link>
       </motion.div>
    )
}

export default Button;

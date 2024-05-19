import { Component } from "react";
import "./Background.css"
import { motion } from "framer-motion";

export class Background extends Component{
    render(){
        const boxes = [];        
        const variants = {
            visible: {opacity:1},
            hidden:{opacity:0.5, rotate: 90}
        }
        for (let i = 0; i < 1000; i++) {
            boxes.push(<motion.div className="box"
            variants={variants}
            initial="visible"
            animate="hidden"
            transition={{ repeat: Infinity, duration:2, delay: 0.1*i }}
            ></motion.div>);
        }
        return <div className="wrapper">
                <div className="background">            
                {boxes}
                </div>
            </div>
    }
    
}
import { useState } from "react";
import "./Sidebar.css"
import { ToggleButton } from "./togglebutton/ToggleButton";
import { motion } from "framer-motion";
import { Links } from "./links/Links";

export function Sidebar(){
    const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath: "circle(1200px at 30px 30px)",
            transition:{
                type:"spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(15px at 30px 30px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }
    return <motion.div className="sidebar"
        animate={ open ? "open" : "closed"}>
        <motion.div className="bg"            
        variants={variants}>
            <Links />
        </motion.div>
        <ToggleButton open={open} setOpen={setOpen}/>
    </motion.div>
    
    
}

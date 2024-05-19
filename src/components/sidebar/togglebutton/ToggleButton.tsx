import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
interface IProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function ToggleButton(props:IProps) {
    
        return <button
            onClick={() => props.setOpen(!props.open)}
        >
            <svg width="20" height="23" viewBox="0 0 20 23">
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round" 
                    variants={{closed: {d: "M 3 7 L 20 7"},
                    open: {d: "M 3 20 L 17 5"},}}/>
                    <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round" 
                    d="M 3 13 L 20 13"
                    variants={{closed: {opacity: 1},
                    open: {opacity: 0},}}/>
                <motion.path
                    strokeWidth="3"
                    stroke="black"
                    strokeLinecap="round" 
                    variants={{closed: {d: "M 3 20 L 20 20"},
                    open: {d: "M 3 5 L 17 20"},}}/>
            </svg>

        </button>
        
}
import { Component } from "react";

export class Links extends Component{
    render(){
        const items = [
            "About",
            "Experience",
            "Contact"
        ]
        return <div className="links">
            {items.map((item)=> (
                <a href={`#${item}`} key={item}>
                    {item}
                </a>
            ))}
        </div>
    }
    
}
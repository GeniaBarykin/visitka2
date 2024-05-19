import { Component } from "react";
import "./Navbar.css"
import { Sidebar } from "../sidebar/Sidebar";

export class Navbar extends Component{
    render(){
        return <div className="navbar">
            <div className="textwrapper">                
                <Sidebar />
                <span>Барыкин Евгений</span>
            </div>
            </div>
    }
    
}
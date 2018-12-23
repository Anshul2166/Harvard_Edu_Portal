import React,{Component} from "react";
import './forum.css';
import SingleForum from "./SingleForum/SingleForum";

class Forum extends Component{
    render(){
        return(
            <div className="forum">
                <div className="forum-title">
                    <div className="text-center">
                        <h1>Discussion Forum</h1>
                        <p className="sub-title-forum">Get the best of opinions from the best of minds</p>
                    </div>
                    <div className="main-content">
                        <SingleForum />
                    </div>
                </div>
            </div>
        );
    }
}

export default Forum;
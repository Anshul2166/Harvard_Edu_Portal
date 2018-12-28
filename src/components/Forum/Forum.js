import React,{Component} from "react";
import './forum.css';
import SingleForum from "./SingleForum/SingleForum";
import { connect } from "react-redux";

class Forum extends Component{
    render(){
        const forums=this.props.forum.map((thread,index)=>
            <SingleForum thread={thread} key={index}/>
        );
        return(
            <div className="forum">
                <div className="forum-title">
                    <div className="text-center">
                        <h1>Discussion Forum</h1>
                        <p className="sub-title-forum">Get the best of opinions from the best of minds</p>
                    </div>
                    <div className="main-content">
                        {forums}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
	return {
		forum: state.forums.threads
	};
};

export default connect(mapStateToProps)(Forum);
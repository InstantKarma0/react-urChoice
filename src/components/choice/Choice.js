import { Component } from "react";
import './choice.css';
class Choice extends Component{
    constructor(props){
        super(props);

    }

    validation(){
        alert("Bravo, " + this.props.osef);
    }

    render(){
        return(
            <button id={this.props.id} onClick={() => this.props.click()}>{this.props.osef}</button>
        )
    }
}

export default Choice;
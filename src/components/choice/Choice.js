import { render } from '@testing-library/react';
import './choice.css';

export function Choice(props){
   
    return(
        <button id={props.id} onClick={props.showResults}>{props.text}</button>
        
    )
}

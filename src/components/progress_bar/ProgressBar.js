import { Component, useEffect, useReducer, useState } from "react";
import './progressBar.css';

export function ProgressBar(props) {

    
    
    var [state, dispatch] = useReducer(reducer,{
        percent : 0,
        width: 0,
        fixDelay: props.animationSec*0.85,
    });
    console.log(state.percent)
    function reducer(state, action){
        switch(action.type){
            case 'width':
                return {...state, width: props.percent + '%'};
            case 'increment' :
                if (state.percent < 40){ //TODO value from bdd
                    return {...state, percent: (state.percent + (props.percent / (((props.animationSec*0.85)*1000)/30)))};
                }else{
                    return {...state, percent: props.percent};
                }
            }
    }
    //useEffect permettant l'animation de la reponse
    useEffect(() => {
            dispatch({type: 'width'});
    }, [state.width])

    //useEffect permettant d'incrémenter le compteur de %
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch({type: 'increment'});
            clearTimeout(timeOut);
        }, 33)
        //return() => clearInterval(interval); //BUG boucle infini de render
    },[state.percent])

    //TODO ajout du css pour la transition pour match avec la durée de l'aniamtion
    return (
        <div className="results" id='results1'>

            <div className=" progress" id={props.id} style={{width: state.width}}>
            </div>
                <span id="text">{props.text}</span>
                <span id="percent">{Math.round(state.percent)}%</span>

        </div>
    )


}

//<span>{props.percent}</span> style={props.widthCompleted}
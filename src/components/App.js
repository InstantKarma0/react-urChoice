import { Choice } from './choice/Choice';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Component } from 'react';
import { ProgressBar } from './progress_bar/ProgressBar';

/*class App extends Component {
	constructor(props) {
		super(props);

		//Définir valeur depuis le constructor
		this.state = {
			nom: 'dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam ',
			chapeau: 'Bonsoir',
			un: 50,
			deux: 10,
			bool: true,
			isClicked: false,
		};
	}
	increment(i){
		i === 1 ? this.setState({un: this.state.un + 1}) : this.setState({deux: this.state.deux + 1}) 
		this.setState({bool: false});
	}
	

	allo = () =>{
		this.setState({isClicked: true})
	}
	
	render() {
		if (true){
			return(
				<div id="main">
					<h1>Qu'est ce que tu préfères ?</h1>
					<div id="answers">
						<Choice id="button1" test={this.allo} text={this.state.nom} />
						<div id='relative'>
							<span id='or'></span>
							<span id='color'></span>
							<span id='textOr'> OU </span>
						</div>
						<Choice id="button2" test={this.updateParentState} text={this.state.chapeau}/>
					</div>
				</div>
			)
		}/*else{
			let percent = Math.round((this.state.un/(this.state.un + this.state.deux))*100);
			percent = '' + percent + '%';
			return(
				<div id="main">
					<h1>Qu'est ce que tu préfères ?</h1>
					<div id="answers">
						<Progress_bar text={this.state.nom} id="result1" percent={percent} width={percent}/>
						<div id='relative'>
							<span id='or'></span>
							<span id='color'></span>
							<span id='textOr'> OU </span>
						</div>
						<Choice id="button2" className='opacity' click={() => this.increment(2)} osef={this.state.chapeau}/>
					</div>
					<h1>{percent}%</h1>
					<h1>{100-percent}%</h1>
					<button onClick={() => this.setState({bool: true})}>Suivant</button>
				</div>
			)
		}
	};
}

export default App;*/

export function App() {
	const [state, setState] = useState({
		choice1: 'choix1', // TODO prendre la value depuis la bdd
		choice2: 'choix2',
		isChoiced: false
	});

	function showResults() {
		setState({ ...state, isChoiced: true });
	}

	if (state.isChoiced === false) {
		return (
			<div id="main">
				<h1>Qu'est ce que tu préfères ?</h1>
				<div id="answers">
					<Choice id="button1" showResults={showResults} text={state.choice1} />
					<div id='relative'>
						<span id='or'></span>
						<span id='color'></span>
						<span id='textOr'> OU </span>
					</div>
					<Choice id='button2' showResults={showResults} text={state.choice2} />
				</div>
			</div>
		)
	} else {
		let percent = 40;
		return (
			<div id="main">
				<h1>Qu'est ce que tu préfères ?</h1>
				<div id="answers">
					<ProgressBar id='bgRed' percent={percent} text={state.choice1} animationSec={1}/>
					<div id='relative'>
						<span id='or'></span>
						<span id='color'></span>
						<span id='textOr'> OU </span>
					</div>
					<ProgressBar id='bgBlue' percent={100-percent} text={state.choice2} animationSec={1}/>
				</div>
			</div>
		)
	}
}
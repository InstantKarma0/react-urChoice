import Choice from './choice/Choice'; 
import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		//Définir valeur depuis le constructor
		this.state = {
			nom: 'dictum sit amet justo donec enim diam vulputate ut pharetra sit amet aliquam id diam ',
			chapeau: 'Bonsoir',
			un: 50,
			deux: 10,
			bool: true,
		};
	}
	increment(i){
		i === 1 ? this.setState({un: this.state.un + 1}) : this.setState({deux: this.state.deux + 1}) 
		this.setState({bool: false});
	}

	render() {
		if (this.state.bool){
			return(
				<div id="main">
					<h1>Qu'est ce que tu préfères ?</h1>
					<div id="answers">
						<Choice id="button1" click={() => this.increment(1)} osef={this.state.nom} />
						<span> OU </span>
						<Choice id="button2" click={() => this.increment(2)} osef={this.state.chapeau}/>
					</div>
				</div>
			) 
		}else{
			let purcent = Math.round((this.state.un/(this.state.un + this.state.deux))*100);
			return(
				<div>
					<h1>{purcent}%</h1>
					<h1>{100-purcent}%</h1>
					<button onClick={() => this.setState({bool: true})}>Suivant</button>
				</div>
			)
		}
	};
}

export default App;

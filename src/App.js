import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './Form.js'
import Result from './Result.js'
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			"cc": "1500",
			"newOrUsed": "used",
			"yearsInUse": "6",
			"fuelEconomy": "18",
			"weight": "1500",
			"mileage": "5000",
			"annualMileage": "10000",
			"remainingTermForInspection": "1500",
			"price": "150",
			"insuranceType": "economy"
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(name) {
		var _this = this;
		return function(event, a, b) {
			if(typeof b === 'undefined') {
				_this.setState({[name]: a});
			} else {
				_this.setState({[name]: b});
			}
		}
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="AppContainer">
					<div className="Header">
						<h1>自動車 TCO（総所有コスト）見積もりツール</h1>
						<p>
							自動車の初期コストとランニングコストを試算します。
						</p>
					</div>
					<div id="Body">
						<div id="FormContainer">
							<Form car={this.state} onChange={this.handleChange} />
						</div>
						<div id="Devider" />
						<div id="ResultContainer">
							<Result car={this.state} />
						</div>
					</div>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;

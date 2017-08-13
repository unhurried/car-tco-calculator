import React, { Component } from 'react';
import './Form.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class Form extends Component {
	render() {
		return (
			<form id="Form">
				<div className="FormColumn">
					<div className="InputContainer">
						<SelectField
							className="InputItem"
							floatingLabelText="新車／中古車"
							floatingLabelFixed={true}
							value={this.props.car.newOrUsed} 
							onChange={this.props.onChange('newOrUsed')}
						>
							<MenuItem value="new" primaryText="新車" />
							<MenuItem value="used" primaryText="中古車" />
						</SelectField>
					</div>
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="使用予定年数"
							floatingLabelFixed={true}
							value={this.props.car.yearsInUse}
							onChange={this.props.onChange('yearsInUse')} 
						/>
					</div>
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="価格（万円）"
							floatingLabelFixed={true}
							value={this.props.car.price}
							onChange={this.props.onChange('price')} 
						/>
					</div>
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="走行距離（km）"
							floatingLabelFixed={true}
							value={this.props.car.mileage}
							onChange={this.props.onChange('mileage')} 
						/>
					</div>
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="車検残（ヵ月）"
							floatingLabelFixed={true}
							value={this.props.car.remainingTermForInspection}
							onChange={this.props.onChange('remainingTermForInspection')} 
						/>
					</div>
				</div>
				<div className="FormColumn">
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="年間走行距離（km）"
							floatingLabelFixed={true}
							value={this.props.car.annualMileage}
							onChange={this.props.onChange('annualMileage')} 
						/>
					</div>
					<div className="InputContainer">
						<SelectField
							className="InputItem"
							floatingLabelText="排気量（cc）"
							floatingLabelFixed={true}
							value={this.props.car.cc} 
							onChange={this.props.onChange('cc')}
						>
							<MenuItem value="660" primaryText="～660" />
							<MenuItem value="1000" primaryText="661～1000" />
							<MenuItem value="1500" primaryText="1001～1500" />
							<MenuItem value="2000" primaryText="1501～2000" />
							<MenuItem value="2500" primaryText="2001～2500" />
							<MenuItem value="3000" primaryText="2501～3000" />
							<MenuItem value="3500" primaryText="3001～3500" />
							<MenuItem value="4000" primaryText="3501～4000" />
							<MenuItem value="4500" primaryText="4001～4500" />
							<MenuItem value="6000" primaryText="4501～6000" />
							<MenuItem value="6001" primaryText="6001～" />
						</SelectField>
					</div>
					<div className="InputContainer">
						<SelectField
							className="InputItem"
							floatingLabelText="車両重量（kg）"
							floatingLabelFixed={true}
							value={this.props.car.weight} 
							onChange={this.props.onChange('weight')}
						>
							<MenuItem value="500"  primaryText="～500" />
							<MenuItem value="1000" primaryText="501～1000" />
							<MenuItem value="1500" primaryText="1001～1500" />
							<MenuItem value="2000" primaryText="1501～2000" />
							<MenuItem value="2500" primaryText="2001～2500" />
							<MenuItem value="3000" primaryText="2501～3000" />
						</SelectField>
					</div>
					<div className="InputContainer">
						<TextField
							className="InputItem"
							floatingLabelText="実燃費（km/l）"
							floatingLabelFixed={true}
							value={this.props.car.fuelEconomy}
							onChange={this.props.onChange('fuelEconomy')} 
						/>
					</div>
					<div className="InputContainer">
						<SelectField
							className="InputItem"
							floatingLabelText="保険種類"
							floatingLabelFixed={true}
							value={this.props.car.insuranceType} 
							onChange={this.props.onChange('insuranceType')}
						>
							<MenuItem value="economy" primaryText="車両保険なし" />
							<MenuItem value="normal" primaryText="車対車" />
							<MenuItem value="premium" primaryText="一般" />
						</SelectField>
					</div>
				</div>
			</form>
		);
	}
}

export default Form;

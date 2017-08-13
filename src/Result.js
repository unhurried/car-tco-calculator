import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Calculator from './Calculator.js';
import './Result.css';

class Result extends Component {

	constructor() {
		super();
		this.state = {
			'row': null,
			'detail': '項目をクリックすると詳細が表示されます。'
		};
		this.changeDetail = this.changeDetail.bind(this);
	}

	getDetail(row, result) {
		var message;
		if(row === 1) { message = result.carTax.detail;; }
		else if(row === 2) { message = result.weightTax.detail; }
		else if(row === 3) { message = result.insurance.detail; }
		else if(row === 4) { message = result.gas.detail; }
		else if(row === 5) { message = result.maintenance.detail; }
		else { message = '項目をクリックすると詳細が表示されます。'; }
		return message;
	}
	
	changeDetail(row, column) {
		this.setState({
			'row': row
		});
	}

	render() {
		var result = Calculator.exec(this.props.car);
		var detail = this.getDetail(this.state.row, result)

		return (
			<div id="Result">
				<div className="ResultColumn">
					<Table
						className="ClickableTable"
						selectable={false}
						onCellClick={this.changeDetail}
					>
						<TableBody
							displayRowCheckbox={false}
						>
							<TableRow>
								<TableRowColumn className="NameColumn">自動車価格</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.price.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">自動車税</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.carTax.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">重量税</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.weightTax.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">保険料</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.insurance.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">ガソリン</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.gas.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">整備費用</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.maintenance.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div className="ResultColumn">
					<Paper className="DetailField" zDepth={1}>{detail}</Paper>
					<Table
						selectable={false}
					>
						<TableBody
							displayRowCheckbox={false}
						>
							<TableRow>
								<TableRowColumn className="NameColumn">合計</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.total.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">年間</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.totalPerYear.toLocaleString()}円</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn className="NameColumn">月間</TableRowColumn>
								<TableRowColumn className="PriceColumn">{result.totalPerMonth.toLocaleString()}円</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Result;

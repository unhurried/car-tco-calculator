const carTaxTable = {
	'660': 7200,
	'1000': 29500,
	'1500': 34500,
	'2000': 39500,
	'2500': 45000,
	'3000': 51000,
	'3500': 58000,
	'4000': 66500,
	'4500': 76500,
	'6000': 88000,
	'6001': 111000
};

var weightTaxTable = {
	'500': 8200,
	'1000': 16400,
	'1500': 24600,
	'2000': 32800,
	'2500': 41000,
	'3000': 49200
};

var insuranceTable = {
	'economy': {'660':38000, '1000':42000, '1500':43000, '2000':45000, '2500':46000},
	'normal': {'660':69000, '1000':75000, '1500':84000, '2000':94000, '2500':103000},
	'premium': {'660':101000, '1000':119000, '1500':139000, '2000':159000, '2500':179000}
}

class Calculator {
	static exec(car) {
		var numberOfInspection = this.NumberOfInspection(car.newOrUsed, car.yearsInUse);
		var result = {
			'price': car.price * 10000,
			'numberOfInspection': numberOfInspection,
			'carTax': this.CarTax(car.cc, car.yearsInUse),
			'weightTax': this.WeightTax(car.weight, numberOfInspection),
			'gas': this.Gas(car.annualMileage, car.fuelEconomy, car.yearsInUse),
			'maintenance': this.Maintenance(car.annualMileage, car.yearsInUse, numberOfInspection, car.mileage),
			'insurance': this.Insurance(car.insuranceType, car.cc, car.yearsInUse)
		};
		result.total = result.price + result.carTax.total + result.weightTax.total + result.gas.total + result.maintenance.total + result.insurance.total;
		result.totalPerYear = Math.round(result.total / car.yearsInUse);
		result.totalPerMonth = Math.round(result.totalPerYear / 12);
		return result;
	}

	static NumberOfInspection(newOrUsed, yearsInUse) {
		var remainingYears = parseInt(yearsInUse, 10);
		if(newOrUsed === 'new') {
			remainingYears -= 3;
		} else if(newOrUsed === 'used') {
			remainingYears -= 2;
		}
		return Math.floor(remainingYears / 2);
	}

	static CarTax(cc, yearsInUse) {
		var remainingYears = parseInt(yearsInUse, 10) - 1;

		var carTax = {
			'perYear': carTaxTable[cc],
			'total': carTaxTable[cc] * remainingYears,
			'detail': `${carTaxTable[cc]}円 x ${remainingYears}年`
		};
		return carTax;
	}

	static WeightTax(weight, numberOfInspection) {
		var weightTax = {
			'perInspection': weightTaxTable[weight],
			'total': weightTaxTable[weight] * numberOfInspection,
			'detail': `${weightTaxTable[weight]}円 x ${numberOfInspection}回`
		};
		return weightTax;
	}

	static Insurance(insuranceType, cc, yearsInUse) {
		if(parseInt(cc, 10) >= 2500) {
			cc = '2500'
		}
		var insurance = {
			'perYear': insuranceTable[insuranceType][cc],
			'total': insuranceTable[insuranceType][cc] * yearsInUse,
			'detail': '保険料は排気量ごとの目安で概算しています。例）1000cc 車両保険なしで年間42,000円'
		};
		return insurance;
	}

	static Gas(annualMileage, fuelEconomy, yearsInUse) {
		var perYear = Math.round(annualMileage / (fuelEconomy * 0.8)) * 130;
		var gas = {
			'perYear': perYear,
			'total': perYear * yearsInUse,
			'detail': `年間${annualMileage}km / ${fuelEconomy}km/l x 130L/円 x ${yearsInUse}年`
		};
		return gas;
	}

	static Maintenance(annualMileage, yearsInUse, numberOfInspection, mileage) {
		annualMileage = parseInt(annualMileage, 10);
		yearsInUse = parseInt(yearsInUse, 10);
		numberOfInspection = parseInt(numberOfInspection, 10);
		mileage = parseInt(mileage, 10);

		var maintenance = {
			'oilChange': 4500 * Math.floor(annualMileage * yearsInUse / 5000),
			'oilFilter': 2000 * Math.floor(annualMileage * yearsInUse / 10000),
			'battery': 11000 * Math.floor(yearsInUse / 3),
			'llc': 5500 * numberOfInspection,
			'brakeFluid': 4500 * numberOfInspection,
			'airCleaner': 3500 * Math.floor((annualMileage * yearsInUse + mileage) / 40000),
			'sparkPlug': 5500 * Math.floor((annualMileage * yearsInUse + mileage) / 30000),
			'tire': 50000 * Math.floor((annualMileage * yearsInUse + mileage) / 40000),
			'brakePad': 17000 * Math.floor((annualMileage * yearsInUse + mileage) / 40000),
			'atFluid': 7000 * Math.floor((annualMileage * yearsInUse + mileage) / 50000),
			'airFilter': 2500 * Math.floor(yearsInUse),
			'wiperBrade': 2500 * Math.floor(yearsInUse / 2)
		};
		var total = 0;
		Object.keys(maintenance).forEach((key) => {
			total += maintenance[key];
		});
		maintenance.total = total;
		maintenance.detail = '整備費用は使用年数・走行距離に基づいて概算しています。例）5000km走行ごとにオイル交換費用4,500円';

		return maintenance;
	}
}

export default Calculator;

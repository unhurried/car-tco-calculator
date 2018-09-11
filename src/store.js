import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    conditions: {
      cc: "1500",
      newOrUsed: "used",
      yearsInUse: "6",
      fuelEconomy: "18",
      weight: "1500",
      mileage: "5000",
      annualMileage: "10000",
      price: "150",
      insuranceType: "economy",
      oilPrice: "150"
    },
    config: {
      maintenance: {
        oilChangePrice: "4500",
        oilChangeMileage: "5000",
        oilFilterPrice: "2000",
        oilFilterMileage: "10000",
        batteryPrice: "11000",
        batteryYear: "3",
        llcPrice: "5500",
        llcYear: "2",
        brakeFluidPrice: "4500",
        brakeFluidYear: "2",
        sparkPlugPrice: "5500",
        sparkPlugMileage: "30000",
        tirePrice: "50000",
        tireMileage: "40000",
        brakePadPrice: "17000",
        brakePadMileage: "40000",
        atFluidPrice: "7000",
        atFluidMileage: "50000",
        airFilterPrice: "2500",
        airFilterYear: "1",
        wiperPrice: "2500",
        wiperYear: "2"
      },
      others: {
        oilPrice: "150"
      }
    }
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
});

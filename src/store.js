import Vue from "vue";
import Vuex from "vuex";
import { getField, updateField } from "vuex-map-fields";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cc: "1500",
    newOrUsed: "used",
    yearsInUse: "6",
    fuelEconomy: "18",
    weight: "1500",
    mileage: "5000",
    annualMileage: "10000",
    price: "150",
    insuranceType: "economy"
  },
  getters: {
    getField
  },
  mutations: {
    updateField
  }
});

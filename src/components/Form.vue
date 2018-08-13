<template>
  <b-container id="Form">
    <b-row>
      <b-col class="InputContainer">
        <label for="newOrUsed">新車／中古車</label>
        <select id="newOrUsed" v-model="newOrUsed" class="form-control">
          <option v-for="option in options.newOrUsed" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>
      </b-col>
      <b-col class="InputContainer">
        <label for="price">価格（万円）</label>
        <input id="price" v-model="price" type="number" class="form-control">
      </b-col>
	 </b-row>
    <b-row>
      <b-col class="InputContainer">
        <label for="mileage">走行距離（km）</label>
        <input id="mileage" v-model="mileage" type="number" class="form-control">
      </b-col>
      <b-col class="InputContainer">
        <label for="yearsInUse">使用予定年数</label>
        <input id="yearsInUse" v-model="yearsInUse" type="number" class="form-control">
      </b-col>
	 </b-row>
    <b-row>
      <b-col class="InputContainer">
        <label for="insuranceType">保険種類</label>
        <select id="insuranceType" v-model="insuranceType" class="form-control">
          <option v-for="option in options.insuranceType" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>
      </b-col>
      <b-col class="InputContainer">
        <label for="cc">排気量（cc）</label>
        <select id="cc" v-model="cc"  class="form-control">
          <option v-for="option in options.cc" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>
      </b-col>
    </b-row>
	 <b-row>
      <b-col class="InputContainer">
        <label for="weight">車両重量（kg）</label>
        <select id="weight" v-model="weight" class="form-control">
          <option v-for="option in options.weight" v-bind:value="option.value" v-bind:key="option.value">
            {{ option.text }}
          </option>
        </select>
      </b-col>
      <b-col class="InputContainer">
        <label for="fuelEconomy">実燃費（km/l）</label>
        <input id="fuelEconomy" v-model="fuelEconomy" type="number" class="form-control">
      </b-col>
    </b-row>
	 <b-row>
      <b-col cols="6" class="InputContainer">
        <label for="annualMileage">年間走行距離（km）</label>
        <input id="annualMileage" v-model="annualMileage" type="number" class="form-control">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "Form",
  data: function() {
    return {
      options: {
        newOrUsed: [
          { value: "new", text: "新車" },
          { value: "used", text: "中古車" }
        ],
        insuranceType: [
          { value: "economy", text: "車両保険なし" },
          { value: "normal", text: "車対車" },
          { value: "premium", text: "一般" }
        ],
        weight: [
          { value: "500", text: "～500" },
          { value: "1000", text: "501～1000" },
          { value: "1500", text: "1001～1500" },
          { value: "2000", text: "1501～2000" },
          { value: "2500", text: "2001～2500" },
          { value: "3000", text: "2501～3000" }
        ],
        cc: [
          { value: "660", text: "～660" },
          { value: "1000", text: "661～1000" },
          { value: "1500", text: "1001～1500" },
          { value: "2000", text: "1501～2000" },
          { value: "2500", text: "2001～2500" },
          { value: "3000", text: "2501～3000" },
          { value: "3500", text: "3001～3500" },
          { value: "4000", text: "3501～4000" },
          { value: "4500", text: "4001～4500" },
          { value: "6000", text: "4501～6000" },
          { value: "6001", text: "6001～" }
        ]
      }
    };
  },
  computed: mapFields([
    "newOrUsed",
    "price",
    "mileage",
    "yearsInUse",
    "insuranceType",
    "cc",
    "weight",
    "fuelEconomy",
    "annualMileage"
  ])
};
</script>

<style scoped>
#Form {
  overflow: hidden;
  width: 400px;
}

#Form .InputContainer {
  margin-top: 10px;
}
</style>

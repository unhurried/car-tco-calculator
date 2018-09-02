<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>条件設定</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="new-or-used">新車／中古車</label>
        <select id="new-or-used" v-model="newOrUsed" class="form-control">
          <option v-for="option in options.newOrUsed" v-bind:value="option.value" v-bind:key="option.value">
          {{ option.text }}
          </option>
        </select>
      </div>
      <div class="col-sm">
        <label for="price">価格（万円）</label>
        <input id="price" v-model="price" type="number" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="mileage">走行距離（km）</label>
        <input id="mileage" v-model="mileage" type="number" class="form-control">
      </div>
      <div class="col-sm">
        <label for="years-in-use">使用予定年数</label>
        <input id="years-in-use" v-model="yearsInUse" type="number" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="insurance-type">保険種類</label>
        <select id="insurance-type" v-model="insuranceType" class="form-control">
          <option v-for="option in options.insuranceType" v-bind:value="option.value" v-bind:key="option.value">
          {{ option.text }}
          </option>
        </select>
      </div>
      <div class="col-sm">
        <label for="cc">排気量（cc）</label>
        <select id="cc" v-model="cc"  class="form-control">
          <option v-for="option in options.cc" v-bind:value="option.value" v-bind:key="option.value">
          {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label for="weight">車両重量（kg）</label>
        <select id="weight" v-model="weight" class="form-control">
          <option v-for="option in options.weight" v-bind:value="option.value" v-bind:key="option.value">
          {{ option.text }}
          </option>
        </select>
      </div>
      <div class="col-sm">
        <label for="fuel-economy">実燃費（km/l）</label>
        <input id="fuel-economy" v-model="fuelEconomy" type="number" class="form-control">
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <label for="annual-mileage">年間走行距離（km）</label>
        <input id="annual-mileage" v-model="annualMileage" type="number" class="form-control">
      </div>
      <div class="col-sm-6">
        <label for="config">その他の設定</label>
        <router-link to="/config">
          <button class="btn btn-block btn-secondary">詳細設定</button>
        </router-link>
      </div>
    </div>
  </div>
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
.container-fluid {
  margin-bottom: 10px;
}

label {
  margin-top: 10px;
}
</style>

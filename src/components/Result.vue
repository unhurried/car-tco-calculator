<template>
  <b-container id="Result">
  <b-row>
    <b-col>
      <table class="table">
        <tr>
          <th scope="row" class="NameColumn">本体価格</th>
          <td>{{(result.price/10000).toLocaleString()}}万円</td>
        </tr>
        <tr>
          <th scope="row">自動車税</th>
          <td id="result.carTax">{{result.carTax.total.toLocaleString()}}円</td>
          <b-popover target="result.carTax" triggers="hover" placement="left">
		      {{result.carTax.detail}}
          </b-popover>
        </tr>
        <tr>
          <th scope="row">重量税</th>
          <td id="result.weightTax">{{result.weightTax.total.toLocaleString()}}円</td>
          <b-popover target="result.weightTax" triggers="hover" placement="left">
		      {{result.weightTax.detail}}
          </b-popover>
        </tr>
        <tr>
          <th scope="row">保険料</th>
          <td id="result.insurance">{{result.insurance.total.toLocaleString()}}円</td>
          <b-popover target="result.insurance" triggers="hover" placement="left">
		      {{result.insurance.detail}}
          </b-popover>
        </tr>
        <tr>
          <th scope="row">ガソリン</th>
          <td id="result.gas">{{result.gas.total.toLocaleString()}}円</td>
          <b-popover target="result.gas" triggers="hover" placement="left">
		      {{result.gas.detail}}
          </b-popover>
        </tr>
        <tr>
          <th scope="row">整備費用</th>
          <td id="result.maintenance">{{result.maintenance.total.toLocaleString()}}円</td>
          <b-popover target="result.maintenance" triggers="hover" placement="left">
		      {{result.maintenance.detail}}
          </b-popover>
        </tr>
      </table>
    </b-col>
    <b-col>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">合計</th>
        <td>{{result.total.toLocaleString()}}円</td>
          </tr>
          <tr>
            <th scope="row">年間</th>
        <td>{{result.totalPerYear.toLocaleString()}}円</td>
          </tr>
          <tr>
            <th scope="row">月間</th>
        <td>{{result.totalPerMonth.toLocaleString()}}円</td>
          </tr>
        </tbody>
      </table>
    </b-col>
  </b-row>
  </b-container>
</template>

<script>
import Calculator from "./Calculator.js";

export default {
  name: "Result",
  computed: {
    result: function() {
      return Calculator.exec(this.$store.state);
    }
  }
};
</script>

<style scoped>
#Result {
  overflow: hidden;
}

#Result th {
  padding: 16px 0;
  text-align: center;
  font-weight: normal;
}

#Result tr:first-child th {
  border-top: 0;
}

#Result td {
  padding: 16px 0;
  text-align: right;
}

#Result tr:first-child td {
  border-top: 0;
}
</style>

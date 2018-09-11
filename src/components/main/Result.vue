<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm">
        <h2>見積もり (詳細)</h2>
        <table class="table">
          <tr>
            <th scope="row">乗出価格</th>
            <td>{{(result.price/10000).toLocaleString()}}万円</td>
          </tr>
          <tr> 
            <th scope="row">自動車税</th>
            <td id="car-tax">{{result.carTax.total.toLocaleString()}}円</td>
            <b-popover target="car-tax" triggers="hover" placement="bottom">
              {{result.carTax.detail}}
            </b-popover>
          </tr>
          <tr>
            <th scope="row">重量税</th>
            <td id="weight-tax">{{result.weightTax.total.toLocaleString()}}円</td>
            <b-popover target="weight-tax" triggers="hover" placement="bottom">
              {{result.weightTax.detail}}
            </b-popover>
          </tr>
          <tr>
            <th scope="row">保険料</th>
            <td id="insurance">{{result.insurance.total.toLocaleString()}}円</td>
            <b-popover target="insurance" triggers="hover" placement="bottom">
              {{result.insurance.detail}}
            </b-popover>
          </tr>
          <tr>
            <th scope="row">ガソリン</th>
            <td id="gas">{{result.gas.total.toLocaleString()}}円</td>
            <b-popover target="gas" triggers="hover" placement="bottom">
              {{result.gas.detail}}
            </b-popover>
          </tr>
          <tr>
            <th scope="row">整備費用</th>
            <td id="maintenance">{{result.maintenance.total.toLocaleString()}}円</td>
            <b-popover target="maintenance" triggers="hover" placement="bottom">
              {{result.maintenance.detail}}
            </b-popover>
          </tr>
        </table>
      </div>
      <div class="col-sm">
        <h2>見積もり (合計)</h2>
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
      </div>
    </div>
  </div>
</template>

<script>
import Calculator from "./Calculator.js";

export default {
  name: "Result",
  computed: {
    result: function() {
      return Calculator.exec(
        this.$store.state.conditions,
        this.$store.state.config
      );
    }
  }
};
</script>

<style scoped>
table th {
  padding: 16px 0;
  text-align: center;
  font-weight: normal;
}

table tr:first-child th {
  border-top: 0;
}

table td {
  padding: 16px 0;
  text-align: center;
}

table tr:first-child td {
  border-top: 0;
}
</style>

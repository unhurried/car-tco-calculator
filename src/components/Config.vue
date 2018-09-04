<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="container-fluid">
          <div class="row">
            <div class="col">
              <h2>詳細設定</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3">
              <label for="oil-price">ガソリン価格（l/円）</label>
              <input id="oil-price" v-model="oilPrice" type="number" class="form-control">
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3 offset-sm-9">
              <router-link to="/">
                <button id="return-button" class="btn btn-block btn-secondary">戻る</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "Config",
  computed: mapFields(["oilPrice"]),
  render: h => h(this.ViewComponent)
};
</script>

<style scoped>
label {
  margin-top: 10px;
}

#return-button {
  margin-top: 20px;
}
</style>

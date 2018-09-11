<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h2>その他設定</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label for="oil-price">ガソリン価格</label>
        <div class="input-group">
          <input id="oil-price" v-model="oilPrice" type="number" class="form-control">
          <div class="input-group-append">
            <span class="input-group-text">l/円</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "Other",
  computed: mapFields(["config.others.oilPrice"]),
  render: h => h(this.ViewComponent)
};
</script>

<style scoped>
label {
  margin: 0.6rem 0 0 0;
}

.input-group {
  margin-top: 0.6rem;
}
</style>

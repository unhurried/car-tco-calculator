<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-md">
        <Maintenance />
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-md-3 col-sm-6">
        <Other />
      </div>
    </div>
    <div class="row no-gutters">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 offset-md-9 col-sm-6 offset-sm-6">
            <router-link to="/">
              <button id="return-button" class="btn btn-block btn-secondary">戻る</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Maintenance from "./Maintenance.vue";
import Other from "./Other.vue";

export default {
  name: "Config",
  components: {
    Maintenance,
    Other
  }
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

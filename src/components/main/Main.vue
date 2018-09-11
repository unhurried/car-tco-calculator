<template>
  <div class="container-fluid">
    <div class="row no-gutters">
      <div class="col-md">
        <Form />
      </div>
      <div class="col-md">
        <Result />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import Result from "./Result.vue";

export default {
  name: "Main",
  components: {
    Form,
    Result
  }
};
</script>

<style scoped>
</style>

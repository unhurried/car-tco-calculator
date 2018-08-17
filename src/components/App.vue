<template>
  <div>
    <nav>
      <h1>自動車 TCO（総所有コスト）見積もりツール</h1>
      <p>自動車の初期コストとランニングコストを試算します。</p>
    </nav>
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
  </div>
</template>

<script>
import Form from "./Form.vue";
import Result from "./Result.vue";

export default {
  name: "App",
  components: {
    Form,
    Result
  }
};
</script>

<style>
.container-fluid {
  max-width: 960px;
}

nav {
  background-color: #222;
  color: white;
  text-align: center;
}

nav h1 {
  margin: 0;
  padding: 14px 0 0 0;
  font-size: 1.5rem;
}

nav p {
  margin: 0;
  padding: 4px 0 12px 0;
}

body h2 {
  margin: 16px 0 0 0;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>

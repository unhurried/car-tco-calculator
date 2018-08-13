<template>
  <div class="AppContainer">
    <div class="Header">
      <h1>自動車 TCO（総所有コスト）見積もりツール</h1>
      <p>
        自動車の初期コストとランニングコストを試算します。
      </p>
    </div>
    <div id="Body">
      <div id="FormContainer">
        <Form />
      </div>
      <div id="Devider" />
      <div id="ResultContainer">
        <Result />
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
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.AppContainer {
  min-width: 860px;
  font-family: sans-serif;
  font-size: 16px;
}

.Header {
  background-color: #222;
  color: white;
  text-align: center;
}

.Header h1 {
  margin: 0;
  padding: 14px 0 0 0;
  font-size: 24px;
}

.Header p {
  margin: 0;
  padding: 4px 0 12px 0;
}

#Body {
  width: 840px;
  margin: 16px auto 10px auto;
  overflow: hidden;
}

#Body #FormContainer {
  float: left;
}

#Body #Devider {
  float: left;
  height: 390px;
  margin-top: 10px;
  width: 18px;
  margin-left: 16px;
  border-left: dashed 2px #bbb;
}

#Body #ResultContainer {
  float: left;
  width: 400px;
}
</style>

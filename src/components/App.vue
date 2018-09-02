<template>
  <div>
    <nav>
      <h1>自動車 TCO（総所有コスト）見積もりツール</h1>
      <p>自動車の初期コストとランニングコストを試算します。</p>
    </nav>
    <main class="container-fluid">
      <div class="row no-guters">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
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

main {
  max-width: 960px;
}

main h2 {
  margin: 16px 0 0 0;
  font-size: 1.1rem;
  font-weight: bold;
}
</style>

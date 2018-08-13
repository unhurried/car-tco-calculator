### 自動車 TCO（総所有コスト）見積もりツール

自動車の初期コストとランニングコストを試算します。

#### URL

* アプリケーション：https://unhurried.github.io/car-tco-calculator/
* ソースコード：https://github.com/unhurried/car-tco-calculator/

#### 対応しているラニングコスト

* 自動車税
* 重量税
* 任意保険料（排気量ごとの目安で計算）
* ガソリン費用
* 整備費用（使用年数・走行距離に基づいて概算）

#### ビルド・実行方法

```shell
# 依存ライブラリのインストール
npm install
# アプリケーション起動（開発用）
npm run serve
# ビルド
npm run build
# Lint実行
npm run lint
```

#### 利用しているライブラリ

##### [v0.2](https://github.com/unhurried/car-tco-calculator/releases/tag/v0.2)

- [Vue.js](https://jp.vuejs.org/index.html)
- [Vuex](https://vuex.vuejs.org/ja/)
- [vuex-map-fields](https://github.com/maoberlehner/vuex-map-fields)
- [Bootstrap Vue](https://bootstrap-vue.js.org/)

##### [v0.1](https://github.com/unhurried/car-tco-calculator/releases/tag/v0.1)

* [React](https://facebook.github.io/react/)
* [Material-UI](http://www.material-ui.com/)


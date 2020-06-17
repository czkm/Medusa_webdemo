<template>
  <div id="app">
    <router-link to="/">login</router-link>|
    <router-link to="/Regist">registered</router-link>
    <template>
      <router-view />
    </template>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#000

}
</style>

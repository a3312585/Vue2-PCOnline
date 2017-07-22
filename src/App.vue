<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/commons/Tabbar.vue'
export default {
  name: 'app',
  components: {Tabbar}
}
</script>

<style>
@import url("./assets/reset.css");
#app {
		background: rgba(230,230,230,1);
}

</style>

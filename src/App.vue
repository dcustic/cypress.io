<template>
  <div id="app">
    <ul>
      <li><router-link :to="{name: 'test'}">Open Hello World</router-link></li>
      <li><router-link :to="{name: 'aboutus'}">Open about us</router-link></li>
      <li id="registerLink"><router-link :to="{name: 'register'}">Register</router-link></li>
    </ul>
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>




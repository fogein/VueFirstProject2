<template>
  <v-container fluid>
      <v-app-bar color="primary" dark>
        <v-btn outlined class="ml-3" color="white">
          <router-link class="color" to="/" >Main</router-link>
        </v-btn>
        <v-btn outlined class="ml-3" color="white">
          <router-link class="color" to="/about" >About</router-link>
        </v-btn>
      </v-app-bar>
    </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.color{ 
  color: #fff;
  text-decoration: none;
}
</style>
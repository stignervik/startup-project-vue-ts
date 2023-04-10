<template>
  <v-app>
    <v-app-bar app color="bar" dark>
      <div class="d-flex align-center">
        <v-img :width="70" :src="iconPath" cover class="ml-4"></v-img>
        <h3 class="ml-4 text-white">Configuration Tool</h3>
      </div>
      <v-spacer></v-spacer>
      <v-btn :to="{ path: '/' }">
        <span class="mr-1">Start</span>
        <v-icon>mdi-flag-checkered</v-icon>
      </v-btn>
      <v-btn :to="{ path: '/system' }">
        <span class="mr-1">System</span>
        <v-icon>mdi-office-building</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="main-view">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app color="bar">
      <v-btn :to="{ path: '/about' }" variant="text">
        <span class="mr-1">About</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn href="https://www.vuejs.org" target="_blank" variant="text">
        <span class="mr-1">Vue.js</span>
        <v-icon color="white">mdi-open-in-new</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import appIcon from "./assets/vue.svg";
let iconPath = appIcon;
</script>

<style lang="scss" scoped>
.main-view {
  background-color: #e3f2fd;
  display: flex;
  flex: 1;
}

.snackbar {
  margin-top: 50px;
}
</style>

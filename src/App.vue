<script setup lang="ts"></script>

<template>
  <div style="width: 100vw; height: 100vh; overflow: hidden; display: flex">
    <div style="width: 200px; min-width: 200px; background-color: pink">aside</div>
    <div style="flex: 1; background-color: red">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

<script setup>
  import {useFlash} from "@/composables/useFlash.js";
  let {flash} = useFlash();
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <p>
    <button @click="flash('from the about page')">click me</button>
  </p>
</template>

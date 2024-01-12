<script setup>
 
  import TabbableTextarea from '@/components/TabbableTextarea.vue';
  import TheWelcomeVue from '@/components/TheWelcome.vue';
  
</script>

<template>
  <main>
    <TheWelcomeVue/>
    <form>
        <TabbableTextarea style="width:100%; height:300px;" />
    </form>
    
  </main>
</template>

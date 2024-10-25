<template>
    <h2>HomeView</h2>
    <button @click="gotoAbout">Go to About</button>
  </template>


<script lang="ts">
export default {
    methods: {
        gotoAbout() {
            this.$router.push('/about');
        }
    }
}
</script>




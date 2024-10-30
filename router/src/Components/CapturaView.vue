<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Captura View</h2>
    
    <div class="space-y-4">
      <div class="bg-gray-100 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Route Parameter:</h3>
        <p class="text-lg">{{ value }}</p>
        <p class="text-sm text-gray-600">Type: {{ typeof value }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CapturaView',
  props: {
    value: {
      type: String,
      required: true
    }
  }
})
</script>
<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { defineComponent } from '@vue/composition-api'
import { reactive, computed } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state: {count: number; double: number} = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    return {
      state,
      increment
    }
  }
})
</script>

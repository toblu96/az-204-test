<template>
  <div>
    <h1>Hello from Azure Web App!</h1>
    <button @click="refresh()">fetch from Azure Function</button>
    <pre>{{ data }}</pre>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
const { data, refresh } = useFetch('/api/call', { immediate: false })
</script>

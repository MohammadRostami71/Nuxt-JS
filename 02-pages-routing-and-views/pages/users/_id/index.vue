<template>
  <h1>a single user , with ID : {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: "_id",
  validate(data) {
    // return data.params.id == 1
    return /^\d+$/.test(data.params.id)
  },
  layout:'users'
}
</script>

<style scoped>

</style>

<template>
  <div>
    <Header/>
    <input type="text" v-model.trim="userId"/>
    <button @click="onLoadUser">Load User</button>
    <nuxt-child/>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "users",
  components: {Header},
  data() {
    return {
      userId: ''
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push('/users/' + this.userId);
    }
  },
  layout:'users'
}
</script>

<style scoped>

</style>

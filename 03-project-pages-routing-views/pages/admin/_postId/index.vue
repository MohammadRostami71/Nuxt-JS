<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "~/components/Admin/AdminPostForm";

export default {
  name: "index",
  layout:'admin',
  components: {AdminPostForm},
  data() {
    return {
      loadedPost: {
        author: 'Mohammad',
        title: 'my awesome post',
        content: 'Super Amazing, Thanks fot that!',
        thumbnailLink: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGR0ZGBgYGBogGhsdGx8fGyEdIB8bICggHyAlHhogIjEiJSktLi4uICAzODMtNygtLisBCgoKDg0OGxAQGy8mICUyMjIwLS8rLS0wMDAvLzIvLzIwLS0tLS0vLy0tLy0tMDIvLS8vKy8tLy0rLy0rLS0tL'
      }
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>

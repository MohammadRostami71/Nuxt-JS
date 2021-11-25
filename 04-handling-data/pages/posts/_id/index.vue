<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last Uodated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Writrn by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>send a message to <a href="mailto:domain@mail.com">domain.com</a></p>
    </section>
  </div>
</template>

<script>
export default {
  name: "index",
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPost: {
            id: "1",
            title: "First Post (Id: " + context.route.params.id + ") ",
            author: 'Mohammad',
            updatedDate: new Date(),
            content: 'some dummy text',
            previewText: "This is our first post!",
            thumbnail:
              'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGR0ZGBgYGBogGhsdGx8fGyEdIB8bICggHyAlHhogIjEiJSktLi4uICAzODMtNygtLisBCgoKDg0OGxAQGy8mICUyMjIwLS8rLS0wMDAvLzIvLzIwLS0tLS0vLy0tLy0tMDIvLS8vKy8tLy0rLy0rLS0tL'
          }
        })
      }, 1000)
    }).then(data => {
      return data;
    })
      .catch(e => {
        context.error(new Error());
      })

  },
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

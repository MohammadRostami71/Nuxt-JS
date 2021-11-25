import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
       nuxtServerInit(vuexContext, context) {
        return new Promise(((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
                {
                  id: "1",
                  title: "First Post",
                  previewText: "This is our first post!",
                  thumbnail:
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGR0ZGBgYGBogGhsdGx8fGyEdIB8bICggHyAlHhogIjEiJSktLi4uICAzODMtNygtLisBCgoKDg0OGxAQGy8mICUyMjIwLS8rLS0wMDAvLzIvLzIwLS0tLS0vLy0tLy0tMDIvLS8vKy8tLy0rLy0rLS0tL'
                },
                {
                  id: "2",
                  title: "Second Post",
                  previewText: "This is our second post!",
                  thumbnail:
                    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFhUXGR0ZGBgYGBogGhsdGx8fGyEdIB8bICggHyAlHhogIjEiJSktLi4uICAzODMtNygtLisBCgoKDg0OGxAQGy8mICUyMjIwLS8rLS0wMDAvLzIvLzIwLS0tLS0vLy0tLy0tMDIvLS8vKy8tLy0rLy0rLS0tL'
                }
              ]
            )
            resolve()
          }, 1000)
        })).then(data => {
          context.store.commit('setPosts', data.loadedPosts);
        }).catch(e => {
          context.error(e);
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }

  })
};

export default createStore;
export const strict = false

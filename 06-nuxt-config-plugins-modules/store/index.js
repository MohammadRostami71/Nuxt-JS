import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        }
        return axios.post('posts.json', createdPost).then(result => {
          vuexContext.commit('addPost', {...createdPost, id: result.data.name});
        }).catch(e => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios.put('posts.json'
          + editedPost.id + '.json'
          , editedPost).then(result => {
          vuexContext.commit('editPost', editedPost);
        }).catch(e => console.log(e))
      },
      nuxtServerInit(vuexContext, context) {
        return this.$axios.get('posts.json')
          .then(res => {
            const postArray = []
            for (const key in res.data) {
              postArray.push({...res.data[key], id: key})
            }
            vuexContext.commit('setPosts', postArray);
          })
          .catch(e => context.error(e))
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

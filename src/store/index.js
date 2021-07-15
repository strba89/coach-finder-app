import { createStore } from 'vuex'
import rootAction from './actions'
import rootMutation from './mutations'
import rootGetter from './getters'
// import createPersistedState from "vuex-persistedstate";
const store = createStore({
    state(){
        return{
            lastFetch: null,
            coaches:null,
            selectedCoach: null,
            selectedCoachByCategory: null,
            messages: null,
            errors:[]
        }
    },
    // plugins: [createPersistedState()],
    actions:rootAction,
    mutations: rootMutation,
    getters: rootGetter,

})

export default store
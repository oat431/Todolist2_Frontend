import { createStore } from 'vuex'

const store = createStore({
    state(){
        return {
            temp : ''
        }
    },
    mutations : {
        doSomething(state){
            state.temp = "I did it!!"
        }
    }
})

export default store;
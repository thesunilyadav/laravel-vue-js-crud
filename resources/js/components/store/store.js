
import { reactive } from 'vue'

export const store = reactive({
    user: null,
    token: null,
    message: '',
    isError: false,
    isSuccess: false,
})

export const actions = {
    setUser(user){
        store.user = user;
    },

    setToken(token){
        store.token = token;
    },
    
    setMessage(msg){
        store.message = msg;
    },
    
    setSuccess(bool){
        store.isSuccess = bool;
    },
    
    setError(bool){
        store.isError = bool;
    }    
}

// export default store;
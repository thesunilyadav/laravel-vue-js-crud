import { actions, store } from "../store/store";
import axios from "axios" 

export const register = async(data) =>{
    unset();
    await axios.post("/api/register",data)
        .then((response )=>{
            console.log("Response :",response);
            let data = response.data;
            localStorage.setItem('user',data.data.user);

            actions.setSuccess(true);
            actions.setUser(data.data.user);
            actions.setToken(data.data.token);
            actions.setMessage(data.message);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token

            return true;
        }).catch((error)=>{
            let err_msg = error;
        
            if(error?.response?.data)
                err_msg = error.response.data.message;
            localStorage.removeItem('user');
            actions.setMessage(err_msg);
            actions.setError(true);
            
            return false;
        });
}

export const login = async(data)=>{
    unset();
    await axios.post("/api/login",data)
        .then((response )=>{
            console.log(response)
            let data = response.data;
            localStorage.setItem('user',JSON.stringify(data.data.user));
            actions.setSuccess(true);
            actions.setUser(data.data.user);
            actions.setToken(data.data.token);
            actions.setMessage(data.message);
            window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.data.token

            return true;
        }).catch((error)=>{
            let err_msg = error;
        
            if(error?.response?.data)
                err_msg = error.response.data.message;
            localStorage.removeItem('user');
            actions.setMessage(err_msg);
            actions.setError(true);
            
            return false;
        });
}

export const logout = async()=>{
    let data ={
        id:store.user?.id
    }
    
    await axios.post("/api/logout",data)
        .then(async(response )=>{
            actions.setSuccess(true);
            actions.setUser(null);
            actions.setMessage(response.data.message);
            await localStorage.removeItem('user');

            return true;
        }).catch((error)=>{
            let err_msg = error;
        
            if(error?.response?.data)
                err_msg = error.response.data.message;
            
            actions.setMessage(err_msg);
            actions.setError(true);
            
            return false;
        });
}

function unset(){
    actions.setSuccess(false);
    actions.setUser(null);
    actions.setMessage(false);
}
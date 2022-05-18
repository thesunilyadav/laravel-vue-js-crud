<template>
    <h4 class="card-title">
        Manager Registration
    </h4>
    <form>
  <div class="imgcontainer">
    <img :src="image" alt="Avatar" class="avatar">
  </div>

  <div class="m-5 mt-0 mb-0">
    <label for="name"><b>Name</b></label>
    <input type="text" class="auth-input" placeholder="Enter Name" v-model="user.name" >
    
    <label for="email"><b> Email </b></label>
    <input type="text" class="auth-input" placeholder="Enter Email" v-model="user.email" >

    <label for="password"><b>Password</b></label>
    <input type="password" class="auth-input" placeholder="Enter Password" v-model="user.password" >

    <label for="cpassword"><b> Confirm Password</b></label>
    <input type="password" class="auth-input" placeholder="Enter Password" v-model="user.password_confirmation" >

    <button type="button" class="btn-auth" @click="registration" > Register</button>
  </div>
</form>
</template>

<script setup>
    import image from "../../asset/images/avtar-1.jpg"
    import {reactive, ref } from "vue"
    import {register} from "../../services/AuthService"
    import { useRouter } from "vue-router"
    import { store } from "../../store/store"

    const router = useRouter();

    const user = reactive({
        name:'',
        email:'',
        password:'',
        password_confirmation:'',
    });

    async function registration() {
      await register(user);
      
        if(store.user){
          router.push({name:'Home'})
        };
    }
    
</script>
<template>
    <div class="container">
        <div class="row justify-content-center mt-3">
            <div class="col-md-8">
                <div class="card">
                    <h2 class="card-header"> Employee Management </h2>
                    {{store.user}}
                    <div class="card-body">
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active" :key="index" v-for="(route,index) in routes">
                                        <a class="nav-link"> 
                                            <span v-if="!store.user && route.isPrivate == false">
                                                <router-link :to="route.path"> {{route.name}} </router-link>
                                            </span>
                                            <span v-if="store.user && route.isPrivate == true">
                                                <router-link :to="route.path"> {{route.name}} </router-link>
                                            </span>
                                        </a> 
                                    </li>
                                </ul>
                                <div v-if="store.user" class="mr-2">
                                <span> Hello, {{ store.user.name}}</span>
                                <button @click="signOut" class="ml-2 mr-2 btn btn-danger">Logout</button>
                                </div>
                            </div>
                        </nav>
                        <notification-component></notification-component>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import routes from "./router/routes"
    import { store, actions} from './store/store'
    import NotificationComponent from "./views/common/NotificationComponent.vue"
    import { useRouter } from "vue-router"
    import { logout } from "./services/AuthService"

    const router = useRouter();

    async function signOut(){
        await logout();
        if(!store.user){
            router.push({ name: "Login" });
        }
    }

</script>

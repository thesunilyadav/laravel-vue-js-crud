import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import { store } from "../store/store";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, _, next) => {
    console.log(store.user);
    if (!store.user && to.name != "Login" && to.name != "Register") {
        next({ path : "/login"});
    } else if(store.user && (to.name == "Login" || to.name == "Register")) {
        next({ path : "/"});
    }else{
        next()
    }
  });

export default router;
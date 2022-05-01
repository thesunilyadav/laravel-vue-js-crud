import HomeComponent from "../views/pages/HomeComponent.vue"
import LoginComponent from "../views/auth/LoginComponent.vue"
import RegisterComponent from "../views/auth/RegisterComponent.vue"

const routes =[
    {
        name: 'Login',
        path: '/login',
        isPrivate : false,
        component: LoginComponent
    },
    {
        name: 'Register',
        path: '/register',
        isPrivate : false,
        component: RegisterComponent
    },
    {
        name: 'Home',
        path: '/',
        isPrivate : true,
        component: HomeComponent
    },
];

export default routes;
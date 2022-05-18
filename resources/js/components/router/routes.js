import HomeComponent from "../views/pages/HomeComponent.vue"
import LoginComponent from "../views/auth/LoginComponent.vue"
import RegisterComponent from "../views/auth/RegisterComponent.vue"
import AddComponent from "../views/pages/student/AddComponent.vue"

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
    {
        name: 'AddStudent',
        path: '/add-student',
        isPrivate : true,
        component: AddComponent
    },
];

export default routes;
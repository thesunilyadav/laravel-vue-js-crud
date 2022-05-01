<template>
    <h4 class="card-title">Manager Login</h4>
    <form>
        <div class="imgcontainer">
            <img :src="image" alt="Avatar" class="avatar" />
        </div>

        <div class="m-5">
            {{ user }}
            <label for="uname"><b>Username</b></label>
            <input
                type="text"
                placeholder="Enter Username"
                v-model="user.email"
            />

            <label for="psw"><b>Password</b></label>
            <input
                type="password"
                placeholder="Enter Password"
                v-model="user.password"
            />

            <button @click="signin" class="btn-auth" type="button">
                Login
            </button>
        </div>
    </form>
</template>

<script setup>
  import image from "../../asset/images/avtar-1.jpg";
  import { reactive } from "vue";
  import { login } from "../../services/AuthService";
  import { store } from "../../store/store";
  import { useRouter } from "vue-router";

  const user = reactive({
      email: "",
      password: "",
  });

  const router = useRouter();

  async function signin() {
      await login(user);
      if (store.user) {
          router.push({ name: "Home" });
      }
  }
</script>

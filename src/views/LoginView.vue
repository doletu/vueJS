/* eslint-disable */
<template>
  <div class="mt-8">
    <div class="row h-2/3">
      <h1 class="font-bold text-[50px]">Login Form</h1>
    </div>
    <div class="container mx-auto px-8">
      <form class="flex flex-col justify-start space-y-6" @submit="onSubmit">
        <div class="row">
          <label class="flex flex-col" for="userName">
            <span class="font-semisolid">userName</span>
            <input
              type="text"
              id="userName"
              class="form-control px-4 py-3 rounded-lg"
              placeholder="userName"
              v-model="userName"
            />
          </label>
        </div>
        <div class="row mt-5">
          <label class="flex flex-col" for="password">
            <span class="font-semisolid">Password</span>
            <input
              type="password"
              id="password"
              class="form-control px-4 py-3 rounded-lg"
              placeholder="*******"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-1/2 bg-primary text-white font-bold rounded-lg">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useLogin } from "@/composable/useLogin";

export default {
  setup() {
    const {error, isPending,loginUser} =useLogin();
    
    const userName = ref("");
    const password = ref("");

    async function onSubmit() {
      await loginUser(userName.value,password.value);
    }
    return { userName,password,error,isPending,onSubmit };
  },
};
</script>

<style></style>

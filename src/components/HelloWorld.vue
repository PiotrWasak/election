<script setup lang="ts">
import { useCurrentUser } from 'vuefire';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { ref } from 'vue';
import { useFirebaseAuth } from 'vuefire';

defineProps<{
  msg: string
}>()

const auth = useFirebaseAuth()
const googleAuthProvider = new GoogleAuthProvider()

const error = ref(null)

function signinPopup() {
  error.value = null
  if (!auth) return;
  signInWithPopup(auth, googleAuthProvider).catch((reason) => {
    console.error('Failed sign', reason)
    error.value = reason
  })
}

function logOut() {
  if (!auth) return
  signOut(auth);
}

const user = useCurrentUser();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>Zakłady wyborcze 2023</h3>
    <div v-if="user">
      <p>Witaj {{ user?.displayName }}</p>
      <p>Zalogowano jako: {{ user?.email }}</p>
      <button @click="logOut"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 active:bg-blue-800">
        Wyloguj
      </button>
    </div>
    <div v-else>
      <img width="200" @click="signinPopup" src="@/assets/google_btn.png" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

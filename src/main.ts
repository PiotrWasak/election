import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCS6jfWPaS9ULRtbGaVcgWGdi61SYZ5QNA",
    authDomain: "elections-86b8b.firebaseapp.com",
    projectId: "elections-86b8b",
    storageBucket: "elections-86b8b.appspot.com",
    messagingSenderId: "369687186588",
    appId: "1:369687186588:web:1733816fba13f51828b159",
    measurementId: "G-JXKXHVH0J1"
  };

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDb = getFirestore(firebaseApp)

  
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

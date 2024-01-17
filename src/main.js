import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

import './assets/scss/all.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';

const options = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

app.use(VueSweetalert2, options);
app.use(router);
app.mount('#app')

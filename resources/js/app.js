import { createApp } from 'vue';
import App from './vue/App.vue';
import PrimeVue from 'primevue/config';

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputMask from 'primevue/inputmask';


import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';


const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);


app.component('InputMask', InputMask);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Toast', Toast);
app.mount('#app')
import { createApp } from 'vue';
import App from '@/App.vue';
// @ts-ignore
import Croppa from 'vue-croppa';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-croppa/dist/vue-croppa.css';

const app = createApp(App);
app.use(Croppa);
app.mount('#app');

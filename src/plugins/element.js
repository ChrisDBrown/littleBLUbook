import Vue from 'vue'
import { Button, CheckboxButton, Container, Dialog, Footer, Header, Main, Table, TableColumn } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

locale.use(lang)

Vue.use(Button)
Vue.use(CheckboxButton)
Vue.use(Container)
Vue.use(Dialog)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Main)
Vue.use(Table)
Vue.use(TableColumn)

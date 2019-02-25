import Vue from 'vue'
import {
  Button,
  CheckboxButton,
  Col,
  Container,
  Dialog,
  Footer,
  Header,
  Main,
  Row,
  Scrollbar,
  Switch,
  Table,
  TableColumn
} from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css';

locale.use(lang)

Vue.use(Button)
Vue.use(CheckboxButton)
Vue.use(Col)
Vue.use(Container)
Vue.use(Dialog)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Scrollbar)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)

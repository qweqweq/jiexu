import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import 'vue-material-design-icons/styles.css'
import '../assets/style/main.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#CBAA5C',
    secondary: '#083759'
  },
  iconfont: 'mdi'
})

// index.js
// import wcPassword from './wc-password.vue'
// export default wcPassword

import wcPassword from './wc-password.vue'
const install = Vue => {
  Vue.component('wcPassword', wcPassword)
}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

export default { install }


<template>
  <div id="app">
    <div>{{pwd}}</div>
    <mini-keyboard v-model="pwd" />
    <wc-password maxlength="6" @change="handleChange" />
  </div>
</template>
<script>
import miniKeyboard from "@/components/mini-calculator/src/";
import wcPassword from "@/components/password-box/src/";

export default {
  components: {
    miniKeyboard,
    wcPassword,
  },
  data() {
    return {
      pwd: "",
    };
  },
  methods: {
    handleChange(e) {
      this.pwd = e;
      console.log(e, "change");
    },
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  display: flex;
}

.el-container {
  height: calc(100%-112px) !important;
}
</style>

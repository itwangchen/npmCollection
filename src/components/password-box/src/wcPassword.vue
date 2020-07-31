<template>
  <input
    ref="passwordWeiTai"
    id="password"
    class="input__inner password-box"
    @input="handleChange"
    type="text"
    v-bind:value="val"
    password
  />
</template>

  <script>
export default {
  name: "wcPassword",
  model: {
    prop: "val",
    event: "input",
  },
  props: {
    val: [String, Number],
  },
  data() {
    return {
      pwd: "",
    };
  },
  methods: {
    handleChange(e) {
      let weitai = e.target;
      let newPassword = weitai.value;
      let oldPassword = weitai.getAttribute("password");
      let deta = newPassword.length - oldPassword.length;
      let truePassword = "";
      let p = weitai.selectionEnd; //光标结束时的位置

      for (let i = 0; i < newPassword.length; i++) {
        let c = newPassword.charAt(i);
        if (i < p && c != "●") {
          truePassword += c;
        } else if (i < p && c == "●") {
          truePassword += oldPassword.charAt(i);
        } else {
          truePassword += oldPassword.substr(
            oldPassword.length - newPassword.length + p,
            newPassword.length - p
          );
          break;
        }
      }
      newPassword = truePassword.replace(/\S/g, "●");

      weitai.setAttribute("password", truePassword);
      weitai.value = newPassword;
      // 解决在win8中光标总是到input框的最后
      weitai.selectionEnd = p;
      weitai.selectionStart = p;
      this.$emit("input", truePassword);
    },
  },
};
</script>
<style scoped lang='less'>
#password.password-box {
  // margin: 50px auto;
  position: relative;
  font-size: 14px;
  display: inline-block;
}
#password.input__inner::after {
  content: "**";
}
#password.input__inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
border:1px solid rgba(155,155,155,1);
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 36px;
  line-height: 36px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 200px;
  -webkit-text-security: disc;
  -moz-text-security: disc;
}
#password.input__inner:focus {
  outline: none;
  box-shadow: 0px 0px 4px 0px rgba(67, 120, 242, 0.5);
  border-radius: 4px;
  border: 1px solid rgba(67, 120, 242, 1);
}
</style>


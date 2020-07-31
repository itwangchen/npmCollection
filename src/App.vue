<script>
import miniKeyboard from "@/components/mini-calculator/src/";
import wcPassword from "@/components/password-box/src/";

export default {
  components: {
    miniKeyboard,
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
      // <password-box  onInput={this.handleChange}/>
    },
  },
  render() {
    return (
      <div id="app">
        <div>{this.pwd}</div>
        <wcPassword maxlength="6" v-model={this.pwd} />1
        <mini-keyboard v-model={this.pwd} />
      </div>
    );
  },
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

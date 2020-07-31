  <!-- app.vue -->
  <template>
  <div class="calculator userSelect">
    <div class="calculator_num">{{sum}}</div>
    <div class="calculator_l">
      <ul class="numbers">
        <li :key="i" v-for="(item,i) in nums" @click="numClick(item)">{{item}}</li>
      </ul>
    </div>
    <div class="calculator_r">
      <div class="clearNum numOff" @click="delNum">X</div>
      <div class="handNok" @click="calculatorOk">
        确
        <br />定
      </div>
    </div>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."], //计算器数字
      sum: this.value,
    };
  },
  props: {
    value: {
      // 必须要使用value
      default: "",
    },
  },
  methods: {
    Fixed2(num) {
      let blo = /(^[1-9]+$)|(^-?\d+\.?\d{0,2}$)/.test(num);
      return blo;
    },
    delNum() {
      let strNum = this.value + "";
      this.sum = strNum.substr(0, strNum.length - 1);
      // this.$emit("numChange", strNum);
      this.$emit("input", strNum.substr(0, strNum.length - 1));
    },
    calculatorOk() {
      let value = this.value - 0;
      this.sum = value;
      this.$emit("input", value);
      // this.$emit("numChange", value);
    },
    numClick(num) {
      let strNum = this.value;
      strNum += num + "";
      if (!this.Fixed2(strNum)) return;
      this.sum = strNum;
      this.$emit("input", strNum);
      // this.$emit("numChange", strNum);
      console.log(strNum);
    },
  },
};
</script>
<style scoped lang='less'>
.calculator {
  border-radius: 4px;
  padding: 10px 0;
  text-align: center;
  width: 360px;
  height: 322px;
  overflow: hidden;
  background: #eeeeee;
  user-select: none;
}

.calculator_l {
  position: relative;
  margin-left: 8px;
  width: 260px;
  float: left;
}

.calculator_r {
  padding-left: 0px;
  float: left;
  width: 92px;
}

.calculator_num {
  margin: 6px 18px;
  text-align: right;
  padding-right: 2.5em;
  font-size: 24px;
  font-family: "Montserrat-Bold";
  font-weight: bold;
  color: rgba(44, 44, 44, 1);
  border-radius: 4px;
  line-height: 50px;
  width: 328px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  height: 50px;
}

.numbers {
  font-weight: 600;
  font-size: 16px;
  overflow: hidden;
}

.numbers li,
.numOff {
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  line-height: 50px;
  border-radius: 3px;
  margin-top: 8px;
  margin-left: 8px;
  width: 76px;
  font-size: 24px;
  font-weight: 600;
  color: rgba(44, 44, 44, 1);
  height: 50px;
  float: left;
  background: #fff;
}

.numbers li:hover,
.numOff:hover {
  background: rgba(244, 244, 244, 1);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1);
}

.numOff {
  font-size: 20px;
  box-shadow: none;
  font-weight: 500;
  font-family: MicrosoftYaHei;
  color: rgba(44, 44, 44, 1);
  float: none !important;
  margin-left: 0px !important;
}

.numbers li:nth-child(10) {
  width: 160px;
}

.clearNum {
  cursor: pointer;
  border-radius: 50%;
  margin-left: 10px;
  border-radius: 4px;
  font-weight: 700;
}

.handNok {
  cursor: pointer;
  line-height: 47px;
  box-sizing: border-box;
  padding-top: 35px;
  margin-top: 8px;
  color: #fff;
  font-size: 20px;
  background: linear-gradient(
    180deg,
    rgba(76, 145, 250, 1) 0%,
    rgba(67, 120, 242, 1) 100%
  );
  box-shadow: 0px 1px 2px 0px rgba(68, 122, 243, 0.3);
  font-family: MicrosoftYaHei;
  border-radius: 4px;
  width: 76px;
  height: 166px;
}

/* 计算器结束 */
</style>


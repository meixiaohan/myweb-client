<template>
  <div class="mybill">
    <HeaderNav/>
    <div class="container">
      <div class="edit_form">
        <el-form
          :model="Mybill"
          status-icon
          :rules="rules"
          ref="Mybill"
          label-width="100px"
          class="ruleForm"
        >
          <h1>请输入今天的消费情况</h1>
          <el-form-item label="早餐" prop="breakfast">
            <el-input
              type="text"
              v-model.number="Mybill.breakfast"
              placeholder="早餐花销"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="午餐" prop="lunch">
            <el-input v-model.number="Mybill.lunch" placeholder="午餐花销"></el-input>
          </el-form-item>
          <el-form-item label="晚餐" prop="dinner">
            <el-input v-model.number="Mybill.dinner" placeholder="晚餐花销"></el-input>
          </el-form-item>
          <el-form-item label="交通" prop="transport">
            <el-input v-model.number="Mybill.transport" placeholder="交通花销"></el-input>
          </el-form-item>
          <el-form-item label="购物" prop="shopping">
            <el-input v-model.number="Mybill.shopping" placeholder="购物花销"></el-input>
          </el-form-item>
          <el-form-item label="其他" prop="other">
            <el-input v-model.number="Mybill.other" placeholder="其他花销"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="info" round @click="onSubmit('Mybill')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="container">
      <div class="black_line"></div>
      <h1>消费折线图(最近七次记录)</h1>
      <span v-if="!isLocalStorage" style="color:red">暂时没有查询到数据</span>
      <div id="bill_echarts" ref="echarts"></div>
    </div>
  </div>
</template>


<script>
import HeaderNav from "../components/HeaderNav";
import moment from "moment";
export default {
  name: "keepmoney",
  components: {
    HeaderNav
  },
  data() {
    return {
      isLocalStorage: false,
      MyLocalStroage: {},
      cost: {
        BFC: [],
        LC: [],
        DC: [],
        TC: [],
        SC: [],
        OC: [],
        DT: []
      },
      Mybill: {
        breakfast: "",
        lunch: "",
        dinner: "",
        transport: "",
        shopping: "",
        other: "",
        date: ""
      },
      rules: {
        today_salary: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        breakfast: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        lunch: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        dinner: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        shopping: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        transport: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ],
        other: [
          {
            required: true,
            message: "此项必填！",
            trigger: "blur"
          }
        ]
      },
      option: {
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: [
            "早饭消费",
            "午饭消费",
            "晚饭消费",
            "交通消费",
            "购物消费",
            "其他消费"
          ]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [],
          axisLabel: {
            interval: 0, //0：全部显示，1：间隔为1显示对应类目，2：依次类推，（简单试一下就明白了，这样说是不是有点抽象）
            rotate: 40 //倾斜显示，-：顺时针旋转，+或不写：逆时针旋转
          }
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "早饭消费",
            type: "line",
            // stack: "总量",
            data: []
          },
          {
            name: "午饭消费",
            type: "line",
            // stack: "总量",
            data: []
          },
          {
            name: "晚饭消费",
            type: "line",
            // stack: "总量",
            data: []
          },
          {
            name: "交通消费",
            type: "line",
            // stack: "总量",
            data: []
          },
          {
            name: "购物消费",
            type: "line",
            // stack: "总量",
            data: []
          },
          {
            name: "其他消费",
            type: "line",
            // stack: "总量",
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    if (localStorage.Mybill) {
      this.isLocalStorage = true;
      this.MyLocalStroage = JSON.parse(localStorage.getItem("Mybill"));
      let keys = Object.keys(this.MyLocalStroage);
      this.changeData(keys);
    }
  },
  watch: {
    MyLocalStroage(newL, oldL) {
      let keys = Object.keys(newL);
      this.changeData(keys);
    }
  },
  methods: {
    onSubmit: function(_form) {
      this.$refs[_form].validate(vali => {
        if (vali) {
          let time = moment().format("YYYY-MM-DD");
          // let time = moment().subtract("days", 1).format("YYYY-MM-DD");
          console.log(time);
          this.Mybill.date = time;
          this.MyLocalStroage[time] = this.Mybill;
          localStorage.setItem("Mybill", JSON.stringify(this.MyLocalStroage));
          this.MyLocalStroage = JSON.parse(localStorage.getItem("Mybill"));
          this.isLocalStorage = true;
          this.$message({ message: "账单记录成功！", type: "success" });
        }
      });
    },
    drawEcharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("bill_echarts"));
      // 绘制图表
      myChart.setOption(this.option);
      window.onresize = function() {
        myChart.resize();
      };
    },
    changeData(keys) {
      if (keys.length >= 7) {
        console.log("大于7");
        keys = keys.reverse();
        for (let i = 0; i < 7; i++) {
          /* 给Echarts的数组赋值 */
          this.cost.BFC[i] = this.MyLocalStroage[keys[i]].breakfast;
          this.cost.LC[i] = this.MyLocalStroage[keys[i]].lunch;
          this.cost.DC[i] = this.MyLocalStroage[keys[i]].dinner;
          this.cost.TC[i] = this.MyLocalStroage[keys[i]].transport;
          this.cost.SC[i] = this.MyLocalStroage[keys[i]].shopping;
          this.cost.OC[i] = this.MyLocalStroage[keys[i]].other;
          this.cost.DT[i] = this.MyLocalStroage[keys[i]].date;
        }
        /* 写入 option */
        this.option.xAxis.data = this.cost.DT.reverse();
        this.option.series[0].data = this.cost.BFC.reverse();
        this.option.series[1].data = this.cost.LC.reverse();
        this.option.series[2].data = this.cost.DC.reverse();
        this.option.series[3].data = this.cost.TC.reverse();
        this.option.series[4].data = this.cost.SC.reverse();
        this.option.series[5].data = this.cost.OC.reverse();
      } else {
        console.log("小于7");
        this.cost = {
          BFC: [],
          LC: [],
          DC: [],
          TC: [],
          SC: [],
          OC: [],
          DT: []
        };
        for (let item in keys) {
          this.cost.BFC.push(this.MyLocalStroage[keys[item]].breakfast);
          this.cost.LC.push(this.MyLocalStroage[keys[item]].lunch);
          this.cost.DC.push(this.MyLocalStroage[keys[item]].dinner);
          this.cost.TC.push(this.MyLocalStroage[keys[item]].transport);
          this.cost.SC.push(this.MyLocalStroage[keys[item]].shopping);
          this.cost.OC.push(this.MyLocalStroage[keys[item]].other);
          this.cost.DT.push(this.MyLocalStroage[keys[item]].date);
        }
        this.option.xAxis.data = this.cost.DT;
        this.option.series[0].data = this.cost.BFC;
        this.option.series[1].data = this.cost.LC;
        this.option.series[2].data = this.cost.DC;
        this.option.series[3].data = this.cost.TC;
        this.option.series[4].data = this.cost.SC;
        this.option.series[5].data = this.cost.OC;
      }
      this.drawEcharts();
    }
  }
};
</script>


<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 120px;
}

.edit_form {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  padding: 20px 20px 0 0;
  border: solid 1px rgb(253, 247, 247);
  text-align: center;
  border-radius: 10px;
  background: rgb(255, 250, 250);
  box-shadow: 0px 0px 20px rgb(136, 127, 127);
}

.edit_form h1 {
  padding-bottom: 30px;
}

.ruleForm {
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}

.ruleForm button {
  transform: translateX(-50px);
}
.ruleForm input {
  width: 20px;
}

.black_line {
  background: rgb(129, 119, 119);
  height: 3px;
  margin-bottom: 40px;
}

h1 {
  color: rgb(99, 107, 107);
}

#bill_echarts {
  width: 1000px;
  height: 600px;
  padding-top: 20px;
  margin: 0 auto;
}


input{
  border: solid 1px #000;
}


@media (min-width: 1201px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .container {
    width: 970px;
  }
  h1 {
    font-size: 28px;
  }
  #bill_echarts {
    width: 800px;
    height: 600px;
  }
}

@media (min-width: 770px) and (max-width: 991px) {
  .container {
    width: 750px;
  }
  h1 {
    font-size: 24px;
  }
  #bill_echarts {
    width: 600px;
    height: 400px;
  }
}

@media (max-width: 769px) {
  h1 {
    font-size: 20px;
  }
  #bill_echarts {
    width: 400px;
    height: 320px;
  }
}

@media (max-width: 500px) {
  h1 {
    font-size: 20px;
  }
  #bill_echarts {
    width: 400px;
    height: 320px;
  }
}
</style>

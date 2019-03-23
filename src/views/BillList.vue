<template>
  <div class="billlist">
    <HeaderNav></HeaderNav>
    <div class="container">
      <div class="welcome">
        <div class="title">
          <h1>
            账单列表
            <br>
            <div class="black_line"></div>
          </h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list_table">
        <el-table :data="tableList[0]" style="width: 90%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" label-width="100" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.breakfast }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.lunch }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.dinner }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.transport }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.shopping }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.other }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="账单日期" prop="date"></el-table-column>
          <el-table-column label="总消费" prop="total"></el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>


<script>
import HeaderNav from "../components/HeaderNav";
export default {
  name: "billlist",
  components: {
    HeaderNav
  },
  data() {
    return {
      tableList: [],
      currpage: 1,
      pagesize: 10
    };
  },
  mounted() {
      this.getTableList();
  },
  methods: {
    getTableList() {
      if (localStorage.Mybill) {
        this.tableList.push(JSON.parse(localStorage.getItem("Mybill")));
        let keys = Object.keys(this.tableList[0]);
        for(let  key in keys ){
            let total = this.tableList[0][keys[key]].breakfast+this.tableList[0][keys[key]].lunch+this.tableList[0][keys[key]].dinner+this.tableList[0][keys[key]].transport+this.tableList[0][keys[key]].shopping+this.tableList[0][keys[key]].other;
            this.tableList[0][keys[key]].total = total;
            console.log(key)
        }
        console.log(this.tableList)
      }
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
  /* padding-top: 100px; */
}

.welcome {
  padding: 110px 0 40px 0;
}

.welcome .title h1 {
  font-size: 50px;
  font-weight: 600;
}

.black_line {
  width: 60px;
  height: 3px;
  background: #000;
  margin: 20px 0 0 0;
}

.list_table {
  border: 2px solid rgb(119, 113, 113);
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}



.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
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
}

@media (min-width: 770px) and (max-width: 991px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 500px) and (max-width: 769px) {
  .container {
    width: 500px;
  }
}

@media (min-width: 320px) and (max-width: 499px) {
  .container {
    width: 400px;
  }
}
</style>

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
      <div class="list_table animated bounceInUp">
        <el-table
          :data="tableList.slice((currpage - 1) * pagesize, currpage * pagesize)"
          style="width: 90%"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="早饭消费:">
                  <span>{{ props.row.breakfast }}</span>
                </el-form-item>
                <el-form-item label="午饭消费:">
                  <span>{{ props.row.lunch }}</span>
                </el-form-item>
                <el-form-item label="晚饭消费:">
                  <span>{{ props.row.dinner }}</span>
                </el-form-item>
                <el-form-item label="交通消费:">
                  <span>{{ props.row.transport }}</span>
                </el-form-item>
                <el-form-item label="购物消费:">
                  <span>{{ props.row.shopping }}</span>
                </el-form-item>
                <el-form-item label="其他消费:">
                  <span>{{ props.row.other }}</span>
                </el-form-item>
                <el-form-item label="总花销:">
                  <span>{{ props.row.total }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="账单日期" prop="date"></el-table-column>
          <el-table-column label="总消费" prop="total"></el-table-column>
          <el-table-column label="账单类型" prop="type"></el-table-column>
        </el-table>
      </div>
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="pagesize"
          :total="tableList.length"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

:page-sizr:"pagesize" 
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
      pagesize: 7
    };
  },
  mounted() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      if (localStorage.Mybill) {
        let mybill = JSON.parse(localStorage.getItem("Mybill"));
        let keys = Object.keys(mybill);
        for (let key in keys) {
          var total =
            parseInt(mybill[keys[key]].breakfast) +
            parseInt(mybill[keys[key]].lunch) +
            parseInt(mybill[keys[key]].dinner) +
            parseInt(mybill[keys[key]].transport) +
            parseInt(mybill[keys[key]].shopping) +
            parseInt(mybill[keys[key]].other);
          mybill[keys[key]].total = total;
          mybill[keys[key]].type = "生活账单";
          this.tableList.push(mybill[keys[key]]);
        }
        this.tableList = this.tableList.reverse();
      }
    },
    handleCurrentChange(cpage){
					this.currpage = cpage;      
    },
    handleSizeChange(psize){
      this.pagesize = psize;
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
  border: 2px solid rgb(233, 223, 223);
  border-radius: 5px;
}

.pagination {
  width: 90%;
  text-align: center;
  margin-top: 50px;
}

.demo-table-expand {
  font-size: 0;
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

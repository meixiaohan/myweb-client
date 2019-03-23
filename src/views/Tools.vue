<template>
  <div class="tools">
    <Header></Header>
    <div class="container">
      <div class="welcome">
        <div class="title">
          <h1>我的小工具
            <br>
            <div class="black_line"></div>
          </h1>
        </div>
      </div>
    </div>
    <div class="content_container">
      <div class="tool" v-for="(tool, index) in tools" :key="index">
        <router-link :to="`${tool.url}`">
          <div class="tool_title">{{tool.title}}</div>
          <div class="tool_content">
            <div class="name">{{tool.name}}</div>
            <div class="desc">{{tool.desc}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../components/HeaderNav";
export default {
  name: "tools",
  components: {
    Header
  },
  data() {
    return {
      tools: [
        {
          title: "记",
          name: "记账本",
          desc: "用于记录自己每天的开销的小工具！",
          url: "/tools/mybill"
        }
      ]
    };
  }
};
</script>


<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 100px;
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

.content_container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  /* border-left: 3px solid rgba(131, 128, 128, 0.2);
  border-right: 3px solid rgba(131, 128, 128, 0.2); */
  margin-top: 80px;
}

.tool {
  border: solid 1px rgb(236, 232, 232);
  border-radius: 5px;
  cursor: pointer;
}

.tool:hover {
  transform: translateY(-4px) translateX(-3px);
  box-shadow: 10px 10px 20px rgba(37, 36, 36, 0.4);
}

.tool .tool_title {
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background: rgb(216, 207, 207);
  height: 225px;
  border-radius: 5px;
  font-size: 100px;
  font-weight: 300;
  color: aliceblue;
  text-align: center;
  line-height: 225px;
}

.tool_content {
  background: rgb(238, 229, 229);
}

.tool_content .name {
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 400;
  color: rgb(73, 30, 30);
}
.tool_content .desc {
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: rgb(73, 30, 30);
}

@media (min-width: 1201px) {
  .container,
  .content_container {
    width: 1170px;
  }

  .tool {
    width: 250px;
  }

  .tool .tool_title {
    width: 250px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .container,
  .content_container {
    width: 970px;
  }
  .welcome .title h1 {
    font-size: 44px;
  }

  .tool,
  .tool .tool_title {
    width: 225px;
  }
}

@media (min-width: 770px) and (max-width: 991px) {
  .container,
  .content_container {
    width: 750px;
  }
  .welcome .title h1 {
    font-size: 40px;
  }

  .tool {
    width: 160px;
  }

  .tool .tool_title {
    width: 160px;
    height: 160px;
    line-height: 160px;
  }
}

@media (min-width: 500px) and (max-width: 769px) {
  .container,
  .content_container {
    width: 520px;
  }
  .welcome .title h1 {
    font-size: 35px;
  }
  .tool {
    width: 200px;
  }
  .tool .tool_title {
    width: 200px;
    height: 200px;
    line-height: 200px;
  }
}

@media (min-width: 320px) and (max-width: 499px) {
 .tool{
   width: 90%;
   margin-bottom: 30px;
 }
}

</style>

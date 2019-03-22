<template>
  <div class="about">
    <Header/>
    <div class="container">
      <div id="page1">
        <div class="info_container">
          <div class="photo">
            <img src="../assets/mxh.jpg" alt srcset>
          </div>
          <span class="name">{{name}}</span>
          <span class="sex">{{sex}}</span>
          <div class="phone">
            <span>手机</span>
            <span>{{phone}}</span>
          </div>
        </div>
      </div>
      <div class="black_line"></div>
      <div id="page2">
        <div class="title">
          <h4>个人介绍</h4>
          <span class="introduce">{{introduce}}</span>
        </div>
      </div>
      <div class="black_line"></div>
      <div id="page3">
        <div class="page_title">项目经验</div>
        <div class="box" v-for="project in project_experience">
          <div class="content">
            <div class="left_content">
              <span class="time">{{ project.time}}</span>
            </div>
            <div class="right_content">
              <div class="project_title">{{project.title}}</div>
              <div class="project_details">{{project.project_introduce}}</div>
              <div class="github">
                Github地址：{{project.url}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="black_line"></div>
      <div id="page4">
        <div class="page_title">教育背景</div>
        <div class="box" v-for="project in school_experience">
          <div class="content">
            <div class="left_content">
              <span class="time">{{ project.time}}</span>
            </div>
            <div class="right_content">
              <div class="project_title">{{project.title}}</div>
              <div class="get_time">{{project.get_time}}</div>
              <div class="project_details" v-html="project.project_introduce"></div>
            </div>
          </div>
          <div class="content" v-for="value in project">
            <div class="left_content">
              <span class="time">{{ value.time}}</span>
            </div>
            <div class="right_content">
              <div class="project_title">{{value.title}}</div>
              <div class="get_time">{{value.get_time}}</div>
              <div class="project_details" v-html="value.project_introduce"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="black_line"></div>
      <div id="page5">
        <div class="page_title">资格证书</div>
        <div class="box">
          <div class="content">
            <div class="left_content"></div>
            <div class="right_content">
              <div class="project_title">《英语四级》</div>
              <div class="get_time">2017-02 永久有效</div>
            </div>
          </div>
        </div>
      </div>
      <div class="black_line"></div>
      <div id="page6">
        <div class="page_title">职业技能</div>
          <div class="content">
            <div class="skill">
              <div class="ski" v-for="(ski, index) in skills" :key="index">
                {{ski.skill}}
              </div>
            </div>
          </div>
      </div>
      <div class="black_line"></div>
      <div id="page7">
        <div class="page_title">求职意向</div>
        <div class="content">
            <div class="left_content">
              <span class="time">期望地点</span>
            </div>
            <div class="right_content">
              <div class="project_title">成都</div>
            </div>
        </div>
        <div class="content">
            <div class="left_content">
              <span class="time">期望职位</span>
            </div>
            <div class="right_content">
              <div class="project_title">前端工程师或者相应实习岗位</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/HeaderNav";
export default {
  name: "about",
  components: {
    Header
  },
  data() {
    return {
      name: "梅笑寒",
      sex: "男",
      birthday: "1997年3月26号",
      phone: 17780614653,
      introduce:
        "熟练掌握HTML5/CSS3/JS等前端的设计语言和技术。了解并能熟练使用js的jQuery库以及Vue.js框架。了解java和python等高级语言，但对nodejs更熟悉，能使用nodejs完成后台的搭建并实现相应功能。了解关系型数据库Mysql和非关系型数据库Mongodb。学习能力强，对新鲜事物抱有好奇心。",
      school: "成都信息工程大学",
      project_experience: [
        {
          title: "悦书城购书网站demo",
          project_introduce:
            "该项目是由express + ejs模板 + BootStrap + jQuery + Mysql 写的一个简单的购书网站demo，实现了用户登录注册、查看用户订单、查看书籍详情、按书名查找图书(模糊查找)等功能。",
          url: "https://github.com/meixiaohan/YSC",
          time: "大学期间"
        },
        {
          title: "用户列表操作",
          project_introduce:
            "art-template + express + jQuery +Ajax + mock.js + mocha + should.js + instanbul 的一个人员名单增删查改的项目demo",
          url: "https://github.com/meixiaohan/UserList",
          time: "大学期间"
        },
        {
          title: "Oneplus6手机官网的界面模仿",
          project_introduce:
            "模仿一加手机6官网界面的几个界面的实现，实现了其中一家六手机详情界面、商城界面、论坛界面、博客界面以及服务界面。",
          url: "https://github.com/meixiaohan/OnePlus6",
          time: "大学期间"
        },
        {
          title: "H5的页面初次体验",
          project_introduce:
            "初次体验手机H5展示页面的设计，通过jQuery以及css设计一些动画以及点击的交互效果。使用了jQuery以及touchSwipe.js来实现手机端的下划上划页面的切换效果。",
          url: "https://github.com/meixiaohan/H5-Page",
          time: "大学期间"
        },
        {
          title: "Halloween-theme-H5-Page",
          project_introduce:
            "万圣节主题的H5页面，对H5界面的再次练习。使用到css3动画、jQuery动画来完成动画效果，touchSwipe.js来模拟手机端的换页操作。",
          url: "https://github.com/meixiaohan/Halloween-theme-H5-Page",
          time: "大学期间"
        },
        {
          title: "“简单点” 订单管理系统",
          project_introduce:
            "毕业设计的题目，正在完成中，PC项目使用vue、elementUI、Echarts等完成前端页面，使用nodejs+express搭建后台服务器。采用前后端分离的设计方式完成。移动端计划使用mui来设计。",
          url: "暂无",
          time: "大学期间"
        },
        {
          title: "无人驾驶小车",
          project_introduce:
            "跟着学校老师团队做了一学期的无人汽车相关的研究,自己学习了Python,去了解了机器学习框架Tensorflow以及机器视觉的库Opencv。边学边做,在学长和带队老师的帮助下,完成了一些小任务。",
          url: "暂无",
          time: "2016-09 至 2017-06"
        }
      ],
      school_experience: [
        {
          title: "成都信息工程大学·本科",
          project_introduce: "",
          time: "2015-09 至 2019-06",
          get_time: ""
        },
        {
          title: "成都信息工程大学学生社团联合会优秀部长",
          project_introduce: "",
          time: "获奖经历",
          get_time: "2017-05"
        },
        {
          title: "成都信息工程大学学生社团联合会活动部部长",
          project_introduce:
            "1、带领社联与学生会合作策划举办了16年的新生迎新晚会。<br/>2、组织社联与职业规划社团策划举办了2017年的双流人才杯职业规划大赛。<br/>3、在任职的一年里,社联活动部获得了社联年度优秀部门的荣誉。",
          time: "学生职务",
          get_time: "2016-06 至 2017-06"
        },
        [
          {
            title: "成都信息工程大学学生社团联合会 活动部成员",
            project_introduce:
              "在进入大学的第一年里组织活动部的其他成员顺利举办了15年迎新晚会、草根晚会和游园会等一系列大型活动。并协助学校其他的社团举办了数十个大大小小的活动。",
            time: "社团经历",
            get_time: "2015-10 至 2016-09"
          },
          {
            title: "成都信息工程大学环境保护协会 · 活动部部员",
            project_introduce:
              "1.给学校附近水渠清淤,经过一年的处理,原本发臭的水渠变得干净。<br/>2.在废品手工艺大赛中,我们团队作品获得了一等奖。<br/>3.在学校组织了旧衣物回收行动,将收到的旧衣物捐给了偏远山区。",
            time: "社团经历",
            get_time: "2015-10 至 2016-9"
          }
        ]
      ],
      skills: [
        {
          skill: "HTML5/CSS/JS"
        },
        {
          skill: "jQuery以及常用的类库"
        },
        {
          skill: "熟悉Vue.js框架"
        },
        {
          skill: "BootStrap、ElementUI等前端框架"
        },
        {
          skill: "能使用java、node.js等写简单的后台"
        },
        {
          skill: "mysql、mongodb数据库的简单使用"
        },
        {
          skill: "了解Python"
        },
        {
          skill: "常用的git命令"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.footer {
  cursor: pointer;
}


.container {
  position: absolute;
  top: 110px;
  left: 50%;
  padding: 0 15px;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  
  border-left: 3px solid rgba(131, 128, 128, 0.2);
  border-right: 3px solid rgba(131, 128, 128, 0.2);
  z-index: 1;
  background: #fff;
  width: 100%;
}

#page1,
#page2,
#page3,
#page4,
#page5,
#page6,
#page7 {
  padding-bottom: 70px;
}

/* page1 */
#page1 .info_container {
  position: relative;
  padding-top: 40px;
  text-align: center;
}

#page1 .info_container .photo {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: solid 1px #fff;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
}
#page1 .info_container .photo img {
  width: 80%;
}

#page1 .info_container .name,
#page1 .info_container .sex {
  display: inline-block;
  padding-top: 20px;
}

#page1 .info_container .name {
  font-size: 20px;
  font-weight: 450;
}
#page1 .info_container .sex {
  margin-left: 10px;
  color: rgb(83, 82, 82);
}

.phone {
  margin-top: 20px;
}

.phone span:first-child {
  color: rgb(83, 82, 82);
}

.phone span:nth-child(2) {
  margin-left: 10px;
}

/* page2 */
#page2 {
  text-align: center;
}

#page2 h4 {
  font-weight: 200;
  padding-top: 14px;
  font-size: 24px;
}

#page2 .introduce {
  display: inline-block;
  width: 86%;
  text-align: left;
  margin-top: 30px;
  text-indent: 2em;
}

/* page3 公共组件*/

/* page4 公共组件 */

/* page5 */
.skill{
  text-align: center;
}

.ski {
  display: inline-block;
  height: 40px;
  line-height: 40px;
  margin-right: 30px;
  color: rgb(83, 82, 82);
  
}

/* 公共组件 */
.black_line {
  height: 4px;
  background: rgba(131, 128, 128, 0.2);
  margin: 0 auto;
  border-radius: 10px;
}

.page_title {
  width: 90%;
  margin: 30px auto;
  font-size: 23px;
}

.content {
  width: 80%;
  margin: 0 auto;
  position: relative;
}

.left_content {
  width: 15%;
  display: inline-block;
}

.right_content {
  width: 85%;
  padding-left: 20px;
  border-left: solid 2px rgb(168, 162, 162);
  display: inline-block;
}

.time {
  width: 130px;
  position: absolute;
  top: 5px;
  color: rgb(83, 82, 82);
  white-space: normal;
}

.project_title {
  font-size: 22px;
  font-weight: 300;
  padding-bottom: 5px;
}

.project_details {
  padding-left: 2em;
  color: rgb(83, 82, 82);
  padding-bottom: 10px;
}

.github {
  padding-left: 2em;
}

.box {
  padding-bottom: 20px;
}

.get_time {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  color: rgb(83, 82, 82);
}

/* 媒体查询 */
@media (min-width: 1201px) {
  .container {
    width: 1170px;
  }
  .black_line {
    width: 1100px;
  }
}

@media (min-width: 992px) and (max-width: 1200px) {
  .container {
    width: 970px;
  }
  .black_line {
    width: 950px;
  }
  .time {
    left: 0;
    width: 100px;
    font-size: 13px;
  }
  .project_title {
    font-size: 20px;
  }
}

@media (min-width: 770px) and (max-width: 991px) {
  .container {
    width: 750px;
  }
  .black_line {
    width: 720px;
  }
  .time {
    left: 0;
    width: 80px;
    font-size: 13px;
  }
  .project_title {
    font-size: 18px;
  }
  .get_time {
    display: block;
    position: static;
  }
}

@media (min-width: 500px) and (max-width: 769px) {
  .container {
    width: 500px;
  }
  .black_line {
    width: 490px;
  }
  .time {
    left: 0;
    width: 50px;
    font-size: 12px;
  }
  .project_title {
    font-size: 16px;
  }
  .get_time {
    display: block;
    position: static;
  }
}


@media (min-width: 320px) and (max-width: 499px) {
  .container {
    width: 400px;
  }
  .black_line {
    width: 400px;
  }
  .time {
    left: 0;
    width: 50px;
    font-size: 12px;
  }
  .github{
    width: 70px;
    font-size: 12px;
  }
  
  .project_title {
    font-size: 16px;
  }
  .get_time {
    display: block;
    position: static;
  }
}
</style>

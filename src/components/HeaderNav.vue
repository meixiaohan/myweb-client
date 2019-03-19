<template>
  <div class="header-container" :class="isShadow ? shadowClass : ''">
    <div class="header" >
      <div class="navbar-left">
        <span class="red-word">Mei's</span>
        <span>Blog</span>
      </div>
      <div class="navbar-right">
        <div :class="[navbartoggleClass,isOpen ? openClass : '']" @click="openMenu">
          <div class="navbar-icon" >
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <div :class="[popMenuClass , isOpen ? openClass : '']">
        <div class="menu">
          <ul>
            <li><router-link to="/home"><span>我的主页</span></router-link></li>
            <li> <router-link to="/about" ><span>我的信息</span> </router-link></li>
            <li> <router-link to="/tools" ><span>小工具</span> </router-link></li>
            <li><router-link to="/" ><span>继续开发中</span></router-link></li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      isOpen: false,
      isShadow:false,
      openClass: "open",
      navbartoggleClass: "navbar-toggle",
      popMenuClass:"popMenu",
      shadowClass:"shadow",
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop >50 ? this.isShadow=true : false;
      scrollTop <=50 ? this.isShadow =false :true;
    }
  }
};
</script>

<style scoped>

.header-container{
    width: 100%;
    height: 70px;
    position: fixed;
    top:0;
    z-index: 2;
    background: #fff;
}

.shadow{
  box-shadow: 0 0px 30px #000;
  border-bottom: 1px solid #aaa;
}

/* nav */


.header {
  width: 100%;
  height: 60px;
}



.header .navbar-left {
  float: left;
  margin-left: 25px;
  margin-top: 12px;
}

.header .navbar-left .red-word {
  color: rgb(179, 9, 9);
}

.header .navbar-left span {
  font-size: 28px;
  font-weight: 700;
}

.header .navbar-right {
 float: right;
  width: 100px;
  height: 60px;
}

.header .navbar-right .navbar-toggle {
  width: 50px;
  height: 45px;
  display: block;
  position: relative;
  top: 10px;
  cursor: pointer;
   z-index: 1001;
}

.header .navbar-right .navbar-toggle span {
  display: block;
  width: 32px;
  height: 3px;
  background: rgb(0, 0, 0);
  border: 1px solid rgb(0, 0, 0);
  position: absolute;
  top: 23px;
  left: 11px;
  border-radius: 5px;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: transform;
}

.navbar-icon span:before {
  content: "";
  display: block;
  width: 30px;
  border: 1px solid rgb(0, 0, 0);
  height: 1px;
  background: rgb(0, 0, 0);
  position: absolute;
  top: -10px;
  transform: translateX(-1px);
  transition: top ease 0.25s, opacity 0.1s ease-in;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: transform;
  border-radius: 5px;
}

.navbar-icon span:after {
  content: "";
  display: block;
  width: 30px;
  border: 1px solid rgb(0, 0, 0);
  height: 1px;
  background: rgb(0, 0, 0);
  position: absolute;
  bottom: -10px;
  transform: translateX(-1px);
  transition: bottom ease 0.25s, opacity 0.1s ease-in;
  border-radius: 5px;
}

.open .navbar-icon span:before {
  top: 0;
  transform: rotate(-90deg) translateX(2.2px);
  transition: transform 0.22s ease-in 0.12s;
  background-color: #fff;
  border: solid  1px #fff;
}

.open .navbar-icon span:after {
  bottom: 0;
  opacity: 0;
}

.navbar-toggle.open .navbar-icon span {
  transform: rotate(225deg);
  transition: transform 0.22s ease-in 0.12s;
  background-color: #fff;
  border: solid  1px #fff;
}


/* popMenu */
.popMenu{
    width: 100%;
    height: 100%;
    background: rgb(17, 17, 17);
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .25s linear ;
}

.open{
    opacity: .8;
    visibility: visible;
    z-index: 1000;
    transition: all .2s linear;
}


.menu{
  width: 100%;
  height: 50%;
  position: relative;
  top: 50%;
  transform: translateY(-50%)
}

.menu ul{
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.menu ul li {
  width: 240px;
  margin: 0 auto;
  list-style: none;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  white-space: nowrap;
  opacity: 0;
}

.menu ul li span{
  cursor: pointer;
  font-size: 3rem;
  color: #fff;
  opacity: .7;
}

.open ul li {
  animation: fadeInUp .35s ease forwards;
  animation-delay: .2s;
}

.open li:nth-of-type(1){
  animation-delay: .25s;
}
.open li:nth-of-type(2){
  animation-delay: .35s;
}
.open li:nth-of-type(3){
  animation-delay: .45s;
}
.open li:nth-of-type(4){
  animation-delay: .55s;
}

.menu ul li span:hover{
  color: red;
  transform: translateY(-1px);
  transition: transform .1s linear ;
  text-decoration: line-through;
}


@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(100%)
    }

    100% {
        opacity: 1;
        transform: none;
    }
}



@media (min-width: 992px) and (max-width: 1200px) {
  .menu ul li {
    font-size: 2.8rem;
  }
}

@media (min-width: 770px) and (max-width: 991px) {
  .menu ul li {
    font-size: 2.6rem;
  }
}

@media (max-width: 769px){
  .menu ul li {
    font-size: 2.4rem;
  }

}

</style>

<template>
  <div class="home">
    <HeaderNav/>
    <div class="container">
      <div class="welcome">
        <div class="title">
          <h1>你好，欢迎来到我的主页。
            <br>
            <span style="color:red">I</span>
            <div class="typing-word">
              <span>{{this.word}}</span>
              <span class="point-cursor">|</span>
            </div>
            <div class="black_line"></div>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";

export default {
  name: "home",
  components: {
    HeaderNav
  },
  data() {
    return {
      word: "",
      text: "'m God_wan.",
      letter: [],
      index: 1,
    };
  },
  watch: {
    index(newindex){
      if (newindex%4 == 1) {
        this.text = "'m  God_wan .";
      } else if (newindex%4 == 2) {
        this.text = "'m a Front-end Programmer .";
      } else if (newindex%4 == 3) {
        this.text = "'m a Graduate of CUIT.";
      }
    }
  },
  mounted() {
    this.StartTyping();
  },
  methods: {
    StartTyping() {
      this.letter = this.text.split("");
      for (let i = 0; i < this.letter.length; i++) {
        var that =this;
        setTimeout(
          (function(i) {
            return function() {
              that.Typing(i)
            };
          })(i),
          (function(i) {
            return i * 150;
          })(i)
        );
      }
    },
    Typing(i) {
      this.word += this.letter[i];
      if(i==this.letter.length-1){
        setTimeout(() => {
          this.word = "";
          this.index++;
          if(this.index==4){
            this.index=1
          }
          this.StartTyping();
        }, 800);
      }
    }
  }
};
</script>


<style scoped>
.home {
  width: 100%;
  height: 100%;
}

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

.welcome .title h1 .typing-word {
  display: inline-block;
}

.point-cursor {
  font-weight: 100;
  animation: lighting 1s infinite;
}


.black_line{
  width: 60px;
  height: 6px;
  background: #000;
  margin: 20px 0 0 0;
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
   .welcome .title h1{
    font-size: 44px;
  }
}

@media (min-width: 770px) and (max-width: 991px) {
  .container {
    width: 750px;
  }
  .welcome .title h1{
    font-size: 40px;
  }
}

@media (max-width: 769px){
  .container {
    width: 520px;
  }
  .welcome .title h1{
    font-size: 35px;
  }
}

@keyframes lighting {
  0% {
    opacity: 0;
  }
  25%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  75%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

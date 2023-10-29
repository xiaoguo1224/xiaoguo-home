<template>
  <!DOCTYPE html>
  <html lang="en">
    <body>
      <div id="app">
        <vue-particles
          :class="{ hide: isHide }"
          color="#8B008B"
          :particleOpacity="0.7"
          :particlesNumber="150"
          shapeType="star"
          :particleSize="6"
          linesColor="#409EFF"
          :linesWidth="1"
          :lineLinked="true"
          :lineOpacity="0.4"
          :linesDistance="150"
          :moveSpeed="6"
          :hoverEffect="true"
          hoverMode="grab"
          :clickEffect="true"
          clickMode="push"
        >
        </vue-particles>
        <router-view></router-view>
        <header id="header" class="header fixed-top d-flex align-items-center">
          <div
            class="container-fluid d-flex align-items-center justify-content-between"
          >
            <router-link to="/">
              <div class="logo d-flex align-items-center me-auto me-xl-0">
                <!-- Uncomment the line below if you also wish to use an image logo -->
                <!-- <img src="../assets/img/logo.png" alt=""> -->
                <router-link to="/blog">
                  <h1>返回</h1>
                  <span>.</span></router-link
                >
              </div>
            </router-link>

            <!-- Nav Menu -->
            <nav id="navmenu" class="navmenu">
              <ul>
                <li><a href="" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Friend</a></li>

                <li><a href="#contact">Contact</a></li>
              </ul>

              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            <!-- End Nav Menu -->

            <router-link to="/blog" class="btn-getstarted"> Blog </router-link>
          </div>
        </header>
        <br /><br />
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content bg-purple"></div>
          </el-col>
          <el-col :span="16"
            ><div class="grid-content bg-purple">
              <component
                :is="parameter"
                class="markdown-body"
                style="text-align: left; margin-left: 30px"
              ></component></div
          ></el-col>
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        </el-row>

        <!--//main-wrapper-->
      </div>
    </body>
  </html>
</template>
<script>
import "../assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../assets/vendor/glightbox/js/glightbox.min.js";
import "../assets/vendor/purecounter/purecounter_vanilla.js";
import "../assets/vendor/isotope-layout/isotope.pkgd.min.js";
import "../assets/vendor/swiper/swiper-bundle.min.js";
import "../assets/vendor/aos/aos.js";
import "../assets/vendor/php-email-form/validate.js";
import "../assets/js/main.js";
import "../assets blog/plugins/popper.min.js";
import "../assets blog/fontawesome/js/all.min.js";
import Java_1 from "../docs/day01-Java基础语法.md";
import Java_2 from "../docs/day02-Java基础语法.md";
import Python from "../docs/Python.md";
export default {
  data() {
    return {
      isHide: false,
      currutKind: 1,
      parameter: "", //文章对应组件名字
      blogList: [
        {
          id: 1,
          title: "Java基础语法1",
          kind: 2,
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...",
          name: "Java_1",
          img: "",
        },
        {
          id: 2,
          title: "Java基础语法2",
          kind: 2,
          content:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...",
          name: "Java_2",
          img: "",
        },
        {
          id: 3,
          title: "Python基础语法",
          kind: 1,
          content:
            "JLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...",
          name: "Python",
          img: "",
        },
      ],
    };
  },
  mounted() {
    this.getParameters();
  },
  methods: {
    handleCommand(command) {
      this.currutKind = command;
      console.log(this.currutKind);
    },
    getParameters() {
      // 获取文章参数  点击跳转获取参数  或者 刷新页面从url中获取参数
      this.parameter = this.$route.query.name || location.search.split("=")[1];
    },
  },
};
</script>

<style scoped>
.hide {
  z-index: -1;
}
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: fixed;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
@import "../assets/vendor/bootstrap/css/bootstrap.min.css";
@import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "../assets/vendor/glightbox/css/glightbox.min.css";
@import "../assets/vendor/swiper/swiper-bundle.min.css";
@import "../assets/css/main.css";
</style>

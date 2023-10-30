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
                <h1>Append</h1>
                <span>.</span>
              </div>
            </router-link>

            <!-- Nav Menu -->
            <nav id="navmenu" class="navmenu">
              <el-button
                type="danger"
                icon="el-icon-loading"
                circle
                @click="isHide = !isHide"
                >{{ isHide ? "开启" : "关闭" }}背景特效</el-button
              >
              <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            <!-- End Nav Menu -->

            <router-link to="/" class="btn-getstarted">Home </router-link>
          </div>
        </header>
        <br /><br />
        <el-row :gutter="20">
          <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="16"
            ><div class="grid-content bg-purple">
              <br class="main-wrapper" />
              <section class="cta-section theme-bg-light py-5">
                <div class="container text-center single-col-max-width">
                  <br />
                  <br />
                  <h2 class="heading" style="">小郭的Blog</h2>
                  <div class="intro">
                    Welcome to my blog. Subscribe and get my latest blog post in
                    your inbox.
                  </div>
                  <div class="col-md-1">
                    <el-dropdown @command="handleCommand">
                      <el-button type="primary">
                        技术分类<i
                          class="el-icon-arrow-down el-icon--right"
                        ></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="1">Python</el-dropdown-item>
                        <el-dropdown-item command="2">Java</el-dropdown-item>
                        <el-dropdown-item command="3">Vue</el-dropdown-item>
                        <el-dropdown-item command="4">Flask</el-dropdown-item>
                        <el-dropdown-item command="5"
                          >机器学习</el-dropdown-item
                        >
                        <el-dropdown-item command="6" divided
                          >全部</el-dropdown-item
                        >
                      </el-dropdown-menu>
                    </el-dropdown>
                  </div>

                  <!--//single-form-max-width-->
                </div>
                <!--//container-->
              </section>
              <section class="blog-list px-3 py-5 p-md-5">
                <div class="container single-col-max-width">
                  <div v-if="isSelect == true">
                    <div class="item mb-5" v-for="(item, index) in blogList">
                      <div v-if="item.kind == currutKind">
                        <blog :item="item"></blog>
                      </div>
                    </div>
                  </div>
                  <div v-else>
                    <div class="item mb-5" v-for="(item, index) in blogList">
                      <blog :item="item"></blog>
                    </div>
                  </div>
                  <nav class="blog-nav nav nav-justified my-5">
                    <a
                      class="nav-link-prev nav-item nav-link d-none rounded-left"
                      href="#"
                      >Previous<i
                        class="arrow-prev fas fa-long-arrow-alt-left"
                      ></i
                    ></a>
                  </nav>
                </div>
              </section>
            </div>
          </el-col>
        </el-row>

        <br />
        <footer class="footer text-center py-2 theme-bg-dark">
          <small class="copyright"
            >Designed with <span class="sr-only">love</span
            ><i class="fas fa-heart" style="color: #fb866a"></i> by
            <a target="_blank" href="http://www.mobanwang.com" title="网页模板"
              >xiaoguo</a
            >
            for developers</small
          >
        </footer>
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
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import JavaList1 from "../docs/集合01.md";
import JavaList2 from "../docs/集合02.md";
import JavaList3 from "../docs/集合03.md";
import PythonDefine from "../docs/Python变量类型.md";
import PythonIf from "../docs/Python条件语句.md";
import PythonFor from "../docs/Python循环语句.md";
import numpy from "../docs/numpy.md";
import pandas from "../docs/pandas.md";
import matplotlib from "../docs/matplotlib.md";
import matplotlib3D from "../docs/matplotlib三维图.md";
import matplotlibLine from "../docs/matplotlib交线图.md";
import blog from "../components/blog.vue";
export default {
  components: { blog },
  data() {
    return {
      isHide: false,
      currutKind: 1,
      blogList: [
        {
          id: 1,
          title: "集合1",
          kind: 2,
          content: "关于List集合的相关用法以及函数",
          name: "JavaList1",
        },
        {
          id: 2,
          title: "集合2",
          kind: 2,
          content: "一些关于Java的Set类型的用法，以及部分数据结构",
          name: "JavaList2",
        },
        {
          id: 3,
          title: "集合3",
          kind: 2,
          content: "关于Map的相关用法",
          name: "JavaList3",
        },
        {
          id: 4,
          title: "Python 变量类型",
          kind: 1,
          content:
            "变量是存储在内存中的值，这就意味着在创建变量时会在内存中开辟一个空间。基于变量的数据类型，解释器会分配指定内存，并决定什么数据可以被存储在内存中。因此，变量可以指定不同的数据类型，这些变量可以存储整数，小数或字符。",
          name: "PythonDefine",
        },
        {
          id: 5,
          title: "Python 条件语句",
          kind: 1,
          content:
            "Python条件语句是通过一条或多条语句的执行结果（True或者False）来决定执行的代码块。",
          name: "PythonIf",
        },
        {
          id: 6,
          title: "Python 循环语句",
          kind: 1,
          content:
            "本章节将向大家介绍Python的循环语句，程序在一般情况下是按顺序执行的。编程语言提供了各种控制结构，允许更复杂的执行路径。",
          name: "PythonFor",
        },
        {
          id: 7,
          title: "numpy",
          kind: 1,
          content: "numpy是Python的一种开源的数值计算扩展，用于快速处理数组。",
          name: "numpy",
        },
        {
          id: 8,
          title: "pandas",
          kind: 1,
          content:
            "pandas是一个Python库，它为Python提供了高性能，易于使用的数据结构，以及用于数据清洗和分析的工具。",
          name: "pandas",
        },
        {
          id: 9,
          title: "matplotlib",
          kind: 1,
          content:
            "matplotlib是Python的一个绘图库，我们可以使用它创建一些十分美观的图",
          name: "matplotlib",
        },
        {
          id: 10,
          title: "matplotlib三维图",
          kind: 1,
          content:
            "matplotlib是Python的一个绘图库，我们可以使用它创建一些十分美观的图",
          name: "matplotlib3D",
        },
        {
          id: 11,
          title: "matplotlib交线图",
          kind: 1,
          content:
            "matplotlib是Python的一个绘图库，我们可以使用它创建一些十分美观的图",
          name: "matplotlibLine",
        },
      ],
      isSelect: false,
    };
  },
  methods: {
    handleCommand(command) {
      if (command == 6) {
        this.isSelect = false;
      } else {
        this.currutKind = command;
        this.isSelect = true;
        console.log(this.currutKind);
      }
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
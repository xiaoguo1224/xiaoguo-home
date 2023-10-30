<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />

      <title>Home</title>
      <meta content="" name="description" />
      <meta content="" name="keywords" />

      <!-- Favicons -->
      <link href="../../assets/img/favicon.png" rel="icon" />
      <link
        href="../../assets/img/apple-touch-icon.png"
        rel="apple-touch-icon"
      />

      <!-- Fonts -->
      <link href="https://fonts.googleapis.com" rel="preconnect" />
      <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
    </head>

    <body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">
      <!-- ======= Header ======= -->
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
      <!-- End Header -->

      <main id="main">
        <!-- Hero Section - Home Page -->
        <section id="hero" class="hero">
          <img src="../assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
          <div class="container">
            <div class="row">
              <div class="col-lg-10">
                <h2 data-aos="fade-up" data-aos-delay="100">欢迎光临</h2>
                <p data-aos="fade-up" data-aos-delay="200">
                  来自于xiaoguo-home
                </p>
              </div>
              <!-- class="col-lg-5" -->
              <div
                style="
                  text-align: center;
                  width: 60%;
                  justify-self: center;
                  margin-left: 15%;
                  color: #ffffff;
                "
              >
                <router-link to="/blog">
                  <vue-typed-js
                    :strings="[
                      '欢迎来到我的Blog，我将会记录我学习路程中所整理的资料,点击了解详情......',
                    ]"
                    :startDelay="300"
                    :typeSpeed="70"
                  >
                    <h2>
                      <span class="typing" style="color: #bac8e2"></span>
                    </h2> </vue-typed-js
                ></router-link>

                <!-- <form
                  action="#"
                  class="sign-up-form d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="搜索blog"
                  />
                  <input type="submit" class="btn btn-primary" value="搜索" />
                </form> -->
              </div>
            </div>
          </div>
        </section>
        <!-- End Hero Section -->

        <!-- Clients Section - Home Page -->
        <section id="clients" class="clients">
          <div class="container-fluid" data-aos="fade-up">
            <div class="row gy-4">
              <div class="col-xl-2 col-md-3 col-6 client-logo" id="1">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-1.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->

              <div class="col-xl-2 col-md-3 col-6 client-logo" id="2">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-2.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->

              <div class="col-xl-2 col-md-3 col-6 client-logo" id="3">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-3.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->

              <div class="col-xl-2 col-md-3 col-6 client-logo" id="4">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-4.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->

              <div class="col-xl-2 col-md-3 col-6 client-logo" id="5">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-5.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->

              <div class="col-xl-2 col-md-3 col-6 client-logo" id="6">
                <router-link to="/blog">
                  <img
                    src="../assets/img/clients/client-6.png"
                    class="img-fluid"
                    alt=""
                /></router-link>
              </div>
              <!-- End Client Item -->
            </div>
          </div>
        </section>
        <!-- End Clients Section -->

        <!-- About Section - Home Page -->
        <section id="about" class="about">
          <div
            class="container"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-center"
          >
            <div class="row align-items-xl-center gy-5">
              <div class="col-xl-5 content">
                <img src="../assets/img/me.jpg" class="img-fluid" alt="" />
                <h3>About Me</h3>
                <h2>小郭</h2>
                <p>能够使用java，python，flask，vue等技术</p>
                <a href="" class="read-more">
                  <router-link to="/blog" style="color: aliceblue">
                    <span>Read More</span><i class="bi bi-arrow-right"></i
                  ></router-link>
                </a>
              </div>

              <div class="col-xl-7">
                <div class="row gy-4 icon-boxes">
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="icon-box">
                      <a href="#recent-posts">
                        <i class="bi bi-buildings"></i>
                      </a>
                      <h3>风景照</h3>
                      <p>记录我喜欢的风景</p>
                    </div>
                  </div>
                  <!-- End Icon Box -->

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="300">
                    <div class="icon-box">
                      <a href="https://www.xtu.edu.cn/">
                        <i class="bi bi-clipboard-pulse"></i>
                      </a>
                      <h3>湘大介绍</h3>
                      <p>
                        综合性全国重点大学、国家“双一流”建设高校，是教育部、国家国防科技工业局与湖南省重点共建高校
                      </p>
                    </div>
                  </div>
                  <!-- End Icon Box -->
                  <br />
                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="400">
                    <div class="icon-box">
                      <router-link to="/blog">
                        <i class="bi bi-command"></i>
                        <h3>技术学习</h3>
                        <p>查看我的blog</p></router-link
                      >
                    </div>
                  </div>
                  <!-- End Icon Box -->

                  <div class="col-md-6" data-aos="fade-up" data-aos-delay="500">
                    <div class="icon-box">
                      <i class="bi bi-graph-up-arrow"></i>
                      <h3>正在努力ing</h3>
                      <p>努力.....</p>
                    </div>
                  </div>
                  <!-- End Icon Box -->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End About Section -->

        <!-- Stats Section - Home Page -->
        <section id="stats" class="stats">
          <img src="../assets/img/stats-bg.jpg" alt="" data-aos="fade-in" />

          <div
            class="container position-relative"
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-delay="100"
          >
            <div class="row gy-4">
              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="232"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <a href="https://gitee.com/xiaoguo-home/xiaoguo-home">
                    <p style="font-size: 30px">源代码</p></a
                  >
                </div>
              </div>
              <!-- End Stats Item -->

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="521"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <a href="https://chat.openai.com/">
                    <p style="font-size: 30px">Chatgpt</p></a
                  >
                </div>
              </div>
              <!-- End Stats Item -->

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="1453"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <a href="https://www.runoob.com/">
                    <p style="font-size: 30px">菜鸟教程</p></a
                  >
                </div>
              </div>
              <!-- End Stats Item -->

              <div class="col-lg-3 col-md-6">
                <div class="stats-item text-center w-100 h-100">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="32"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <a
                    href="https://www.zhihu.com/tardis/zm/art/77669451?source_id=1005"
                  >
                    <p style="font-size: 30px">Matlab</p></a
                  >
                </div>
              </div>
              <!-- End Stats Item -->
            </div>
          </div>
        </section>
        <!-- End Stats Section -->

        <!-- Services Section - Home Page -->
        <!-- Faq Section - Home Page -->
        <section id="faq" class="faq">
          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div class="content px-xl-5">
                  <h3><span>常见技术问题</span><strong>Questions</strong></h3>
                  <p>学习的越多，问题越多？？？？</p>
                </div>
              </div>

              <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <div class="faq-container">
                  <div class="faq-item faq-active">
                    <router-link
                      :to="{ name: 'log', query: { name: 'numpy' } }"
                      style="color: #6978af"
                    >
                      <h3>
                        <span class="num">1.</span>
                        <span>如何使用numpy</span>
                      </h3>
                    </router-link>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <!-- End Faq item-->

                  <div class="faq-item">
                    <router-link
                      :to="{ name: 'log', query: { name: 'pandas' } }"
                      style="color: #6978af"
                    >
                      <h3>
                        <span class="num">2.</span>
                        <span>如何使用pandas</span>
                      </h3>
                    </router-link>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>

                  <div class="faq-item">
                    <a
                      href="https://www.zhihu.com/tardis/zm/art/77669451?source_id=1005"
                    >
                      <h3>
                        <span class="num">3.</span>
                        <span>如何使用matlab</span>
                      </h3>
                    </a>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <!-- End Faq item-->

                  <div class="faq-item">
                    <router-link
                      :to="{ name: 'log', query: { name: 'JavaList1' } }"
                      style="color: #6978af"
                    >
                      <h3>
                        <span class="num">4.</span>
                        <span>如何使用java集合</span>
                      </h3>
                    </router-link>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <!-- End Faq item-->

                  <div class="faq-item">
                    <router-link
                      :to="{ name: 'log', query: { name: 'JavaList3' } }"
                      style="color: #6978af"
                    >
                      <h3>
                        <span class="num">5.</span>
                        <span>如何使用java map</span>
                      </h3>
                    </router-link>
                    <i class="faq-toggle bi bi-chevron-right"></i>
                  </div>
                  <!-- End Faq item-->
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- End Faq Section -->

        <!-- Team Section - Home Page -->
        <section id="team" class="team">
          <!--  Section Title -->
          <div class="container section-title" data-aos="fade-up">
            <h2>Friend</h2>
            <p>看看我朋友们的播客吧</p>
          </div>
          <!-- End Section Title -->

          <div class="container">
            <div class="row gy-5">
              <div
                class="col-lg-4 col-md-6 member"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="https://zlx650.github.io/">
                  <div class="member-img">
                    <img
                      src="https://zlx650.github.io/image/1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                  </div>
                  <div class="member-info text-center">
                    <h4>欣</h4>
                    <span>xinxin的小屋</span>
                    <p>超牛的好吧</p>
                  </div>
                </a>
              </div>
              <!-- End Team Member -->
            </div>
          </div>
        </section>
        <!-- End Team Section -->

        <!-- Recent-posts Section - Home Page -->
        <section id="recent-posts" class="recent-posts">
          <!--  Section Title -->
          <div class="container section-title" data-aos="fade-up">
            <h2>近日照片</h2>
            <p>观察一下生活的美</p>
          </div>
          <!-- End Section Title -->

          <div class="container">
            <div class="row gy-4">
              <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <article>
                  <div class="post-img" style="height: auto">
                    <img
                      src="../assets//img/NewPict/Girl.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Girl</p>

                  <h2 class="title">
                    <a href="">美丽的小陈</a>
                  </h2>

                  <div class="d-flex align-items-center">
                    <div class="post-meta">
                      <p class="post-date">
                        <time datetime="2022-01-01">Jan 1, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <!-- End post list item -->

              <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article>
                  <div class="post-img">
                    <img
                      src="https://tse3-mm.cn.bing.net/th/id/OIP-C.QEDPFtLN4R2SZcbo0QhnSAHaEo?pid=ImgDet&rs=1"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Forest</p>

                  <h2 class="title">
                    <a href="">森林景观</a>
                  </h2>

                  <div class="d-flex align-items-center">
                    <div class="post-meta">
                      <p class="post-date">
                        <time datetime="2022-01-01">Jun 5, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <!-- End post list item -->

              <div
                class="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <article>
                  <div class="post-img">
                    <img
                      src="https://img.zcool.cn/community/01cf156091572611013e3b7d457872.jpg@3000w_1l_0o_100sh.jpg"
                      alt=""
                      class="img-fluid"
                    />
                  </div>

                  <p class="post-category">Chen Zhou</p>

                  <h2 class="title">
                    <a href="">我的家乡 超级美的</a>
                  </h2>

                  <div class="d-flex align-items-center">
                    <div class="post-meta">
                      <p class="post-date">
                        <time datetime="2022-01-01">Jun 22, 2022</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
              <!-- End post list item -->
            </div>
            <!-- End recent posts list -->
          </div>
        </section>
        <!-- End Recent-posts Section -->

        <!-- Contact Section - Home Page -->
        <section id="contact" class="contact">
          <!--  Section Title -->
          <div class="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p></p>
          </div>
          <!-- End Section Title -->

          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="row gy-4">
                  <div class="col-md-6">
                    <div class="info-item" data-aos="fade" data-aos-delay="200">
                      <i class="bi bi-geo-alt"></i>
                      <h3>Address</h3>
                      <p>湘潭大学</p>
                      <p>China</p>
                    </div>
                  </div>
                  <!-- End Info Item -->

                  <div class="col-md-6">
                    <div class="info-item" data-aos="fade" data-aos-delay="300">
                      <i class="bi bi-telephone"></i>
                      <h3>Call Us</h3>
                      <p>xxxx</p>
                      <p>xxxxx</p>
                    </div>
                  </div>
                  <!-- End Info Item -->

                  <div class="col-md-6">
                    <div class="info-item" data-aos="fade" data-aos-delay="400">
                      <i class="bi bi-envelope"></i>
                      <h3>Email Us</h3>
                      <p>xxxx</p>
                      <p>xxxx</p>
                    </div>
                  </div>
                  <!-- End Info Item -->

                  <div class="col-md-6">
                    <div class="info-item" data-aos="fade" data-aos-delay="500">
                      <i class="bi bi-clock"></i>
                      <h3>Open Hours</h3>
                      <p>Monday - Friday</p>
                      <p>9:00AM - 05:00PM</p>
                    </div>
                  </div>
                  <!-- End Info Item -->
                </div>
              </div>

              <div class="col-lg-6">
                <form
                  action="#"
                  method="post"
                  class="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div class="row gy-4">
                    <div class="col-md-6">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="6"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>

                    <div class="col-md-12 text-center">
                      <div class="loading">Loading</div>
                      <div class="error-message"></div>
                      <div class="sent-message">
                        Your message has been sent. Thank you!
                      </div>

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
              <!-- End Contact Form -->
            </div>
          </div>
        </section>
        <!-- End Contact Section -->
      </main>

      <!-- Scroll Top Button -->
      <a
        href="#"
        id="scroll-top"
        class="scroll-top d-flex align-items-center justify-content-center"
        ><i class="bi bi-arrow-up-short"></i
      ></a>

      <!-- Vendor JS Files -->
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
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted } from "vue";
AOS.init();
export default {};
</script>

<style scoped>
@import "../assets/vendor/bootstrap/css/bootstrap.min.css";
@import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
@import "../assets/vendor/glightbox/css/glightbox.min.css";
@import "../assets/vendor/swiper/swiper-bundle.min.css";
@import "../assets/css/main.css";
</style>
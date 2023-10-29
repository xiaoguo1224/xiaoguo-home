<template>
  <div class="row g-3 g-xl-0" data-aos="fade-up">
    <!-- <div class="col-2 col-xl-3">
      <img
        class="img-fluid post-thumb"
        src="../assets/img/features-light-1.jpg"
        alt="image"
      />
    </div> -->
    <div class="col">
      <router-link
        :to="{ name: 'log', query: { name: item.name } }"
        style="color: #6978af"
      >
        <h3 class="title mb-1">
          <a class="text-link" href="blog-post.html">{{ item.title }}</a>
        </h3>

        <div
          class="intro"
          style="text-align: left; margin-left: 20px; margin-top: 30px"
        >
          {{ item.content }}
        </div>
        <!-- <div style="color: #b98282">Read more &rarr;</div> -->
      </router-link>
      <!-- <a class="text-link" href="blog-post.html"
                    >Read more &rarr;</a
                  > -->
    </div>
    <!--//col-->
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>


<template>
  <div id="article-new">
    <div class="article-heading">
      <div class="container overflow-hidden">
        <div class="header-container">
          <h2 style="margin-bottom: 30px">Help Chat Settings</h2>
        </div>
        <div class="row gx-5">
          <div class="col col-form-container">
            <div class="p-3 border bg-light">
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Introductory message</label
                >
                <textarea
                  class="form-control"
                  id="school-performance-others"
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getDatabase, ref, update } from "firebase/database";

export default {
  name: "chatSettings",
  props: ["dataProps"],
  data: function () {
    return {};
  },
  mounted() {
    console.log(this.dataProps);
  },
  methods: {},
};
</script>
<style scoped>
#article-new {
  padding: 50px;
}
.col-form-container {
  text-align: left;
}
.error {
  display: block;
}
</style>
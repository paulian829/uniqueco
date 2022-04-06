<template>
  <div id="university-list">
    <div class="flex-list">
      <div class="search-bar-container">
        <div class="row">
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >School Name</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Location?</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div class="col search-btn-container">
            <button class="btn btn-primary">Search</button>
            <button class="btn btn-primary">Reset</button>
          </div>
        </div>
      </div>
      <div class="school-container">
          <h1>test</h1>
      </div>
    </div>
  </div>
</template>

<script>
import unversityList from "../../manyschools.json";

export default {
  data() {
    return {
      data: unversityList,
    };
  },
};
</script>

<style>
div#university-list {
  min-height: 100vh;
  background: #e4eef4;
}
.flex-list {
  height: 100%;
  padding: 50px;
}
.search-bar-container {
  max-width: 1280px;
  width: 100%;
  background: white;
  box-shadow: 0 0 50px #ccc;
  border-radius: 4px;
  margin: 0 auto;
  padding: 30px 30px 20px 30px;
  text-align: left;
}
.search-bar-container label {
  font-size: 20px;
  font-weight: 600;
}
.search-bar-container input {
  font-size: 18px;
  padding: 10px;
}

.search-bar-container button {
  padding: 10px 50px;
}

.search-btn-container {
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}
</style>
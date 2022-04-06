<!-- eslint-disable prettier/prettier -->
<template>
  <div id="messages">
    <div class="row">
      <div class="col-3 full-width message-list-container">
          <div v-for="(messages,key) in data.listOfMessages" :key="key">
              <h2>test</h2>
          </div>
      </div>
      <div class="col-9 message-container" ><h1>test</h1></div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src
import data from "../../data.json";
export default {
  name: "Messages",
  data(){
      return {
          data:data
      }
  },
  components: {},
};
</script>

<style>
#messages.row{
    height: 100vh;
}
.message-list-container, .message-container{
    height: 100%;
}
.message-list-container{
    background: #A8C7DC;
}


</style>

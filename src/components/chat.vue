<template>
  <div class="chat-widget">
    <div class="unopened-icon" v-show="!chatOpened" @click="toggleChat(true)">
      How can I help you?
    </div>
    <div class="opened-widged" v-show="chatOpened">
      <div class="widget-header" @click="toggleChat(false)">
        <strong>UniqueCo Help Chat</strong>
      </div>
      <div class="chat-container" id="container" ref="list">
        <div class="dialog-left">
          How can I help you? Click on the topic you want to explore
          <div class="help-topics">
            <br />
            <div
              @click="addMessage(key)"
              v-for="(item, key) in helpOptions"
              :key="key"
              class="help-topic-item"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
        <div v-for="(item, key) in conversation" :key="key">
          <div class="dialog-right">
            {{ item.title }}
          </div>
          <div class="dialog-left">
            {{ item.content }}
            <br />
            <br />
            <p>Do you have any other question?</p>
            <div class="help-topics">
              <div
                @click="addMessage(key)"
                v-for="(item, key) in helpOptions"
                :key="key"
                class="help-topic-item"
              >
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      chatOpened: true,
      helpOptions: {
        test1: {
          title: "Lorem Ipsum",
          content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
        },
        test2: {
          title: "Lorem Ipsum",
          content: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
        },
      },
      conversation: {},
      randomID: "",
    };
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    toggleChat(status) {
      this.chatOpened = status;
    },
    addMessage(key) {
      let id = this.makeid(5);
      let data = this.helpOptions[key];
      //   this.conversation[id] = data
      //   this.randomID = id

      this.$set(this.conversation, id, {
        title: data.title,
        content: data.content,
      });

      var container = this.$el.querySelector("#container");
      container.scrollTop = container.scrollHeight;
    },
    makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    scrollToEnd: function () {
      // scroll to the start of the last message
      this.$el.scrollTop = this.$refs.list
    },
  },
};
</script>


<style scoped>
:root {
  --main-light-color: #f9bbb1;
  --main-dark-color: #481b0b;
  --main-background-color: black;
}

.chat-widget {
  position: absolute;
  z-index: 999;
  bottom: 3rem;
  right: 3rem;
}
.unopened-icon {
  background: red;
  width: 200px;
  border-radius: 9999px;
  padding: 20px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}
.opened-widged {
  width: 600px;
  height: 800px;
  margin-right: -3rem;
  margin-bottom: -3rem;
  background: white;
}
.widget-header {
  padding: 10px 0;
  background: red;
  color: white;
  cursor: pointer;
}
.dialog-left {
  padding: 15px;
  background: rgb(240, 186, 85);
  border-radius: 8px;
  max-width: 50%;
  color: black;
  text-align: left;
  clear: both;
}

.dialog-right {
  padding: 15px;
  background: rgb(240, 186, 85);
  border-radius: 8px;
  max-width: 50%;
  color: black;
  text-align: left;
  float: right;
  clear: both;
}
.chat-container {
  margin: 15px;
  height: 740px;
  overflow-y: scroll;
}
.help-topics {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.help-topic-item {
  padding: 8px;
  background: whitesmoke;
  border-radius: 999px;
  margin-bottom: 10px;
}
</style>

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
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  v-model="chatState"
                  @change="toggleChatStage()"
                />
                <label class="form-check-label" for="flexSwitchCheckChecked"
                  >Toggle Help Chat visibility</label
                >
              </div>
              <br />
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Introductory message</label
                >
                <textarea
                  class="form-control"
                  id="school-performance-others"
                  cols="30"
                  rows="3"
                  v-model="introMessage"
                  @blur="saveAll()"
                ></textarea>
              </div>
              <br />
              <div>
                <div class="row">
                  <div class="col-sm-5 col-md-6">
                    <h5>
                      Question and Answers
                      <button
                        type="button"
                        class="btn btn-primary"
                        style="margin-left: 20px"
                        @click="() => addRow()"
                      >
                        <Icon icon="akar-icons:plus" />
                      </button>
                    </h5>
                  </div>
                </div>

                <br />
                <div class="row" v-for="(key, index) in QnA" :key="key + index">
                  <div class="col-sm-5 col-md-6">
                    <div class="mb-3">
                      <label for="question" class="form-label"
                        >Question
                        <button
                          type="button"
                          class="btn btn-warning"
                          style="margin-left: 20px"
                          @click="() => removeRow(index)"
                        >
                          <Icon icon="akar-icons:minus" /></button
                      ></label>
                      <textarea
                        class="form-control"
                        id="school-performance-others"
                        cols="30"
                        rows="2"
                        v-model="QnA[index].question"
                        @blur="saveAll()"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    class="col-sm-5 offset-sm-2 col-md-6 offset-md-0"
                    style="margin-top: 13px"
                  >
                    <div class="mb-3">
                      <label for="question" class="form-label">Answer</label>
                      <textarea
                        class="form-control"
                        id="school-performance-others"
                        cols="30"
                        rows="2"
                        v-model="QnA[index].answer"
                        @blur="saveAll()"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, update } from "firebase/database";
import { Icon } from "@iconify/vue2";

export default {
  name: "chatSettings",
  props: ["dataProps"],
  components: { Icon },
  data: function () {
    return {
      chatState: false,
      introMessage: "",
      QnA: {},
    };
  },
  mounted() {
    console.log(this.dataProps);
    let data = this.dataProps;
    if (data.helpChat) {
      this.chatState = data.helpChat.chatState;
      this.introMessage = data.helpChat.introMessage;
      this.QnA = data.helpChat.QnA;
    }
  },
  methods: {
    toggleChatStage() {
      this.saveAll();
    },
    addRow() {
      let random =
        Math.random().toString(36).substring(2) +
        new Date().getTime().toString(36);

      this.$set(this.QnA, random, {
        question: "Question goes here",
        answer: "This is a response",
      });
      this.saveAll();
    },
    removeRow(key) {
      console.log(key);
      this.$delete(this.QnA, key);
      this.saveAll();
    },
    saveAll() {
      let data = {
        chatState: this.chatState,
        introMessage: this.introMessage,
        QnA: this.QnA,
      };
      const db = getDatabase();
      const updates = {};
      updates[`university/${this.dataProps.Uid}/helpChat`] = data;
      update(ref(db), updates)
        .then(() => {
          this.$toast.success("Chat Settings Saved!", {
            // optional options Object
          });
        })
        .catch((e) => {
          this.$toast.error(e, {
            // optional options Object
          });
        });
    },
  },
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
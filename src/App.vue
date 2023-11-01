<template>

  <h3>VUE3 所見即所得編輯器</h3>
  <froala id="edit" :tag="'textarea'" :config="config" v-model:value="model"></froala>

  <hr>
  <h3>下方顯示您編輯的結果</h3>
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <div v-html="model" class="fr-view"></div>
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <!--  顯示編輯內容的 DOM 容器記得要掛 fr-view class -->
  <hr>
  <h3>下方顯示您編輯的 HTML</h3>
  <textarea v-model="model" style="width: 100%" rows="20"></textarea>
</template>

<script>
import editorConfig from '@/config/editorConfig'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      config: editorConfig,
      model: '<p>所見即所得編輯器 Edit Your Content Here! </p>' // put your HTML content here
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

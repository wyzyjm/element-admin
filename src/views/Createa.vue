<template>
  <div>
    <el-form ref="form" @submit.native.prevent="saveAticle" :model="article" label-width="80px">
      <el-form-item label="文章名称">
        <el-input v-model="article.name"></el-input>
      </el-form-item>

      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.desc"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      article: {
        name: "",
        desc: ""
      }
    };
  },
  methods: {
    saveAticle() {
      console.log(this.article);
    }
  }
};
</script>
<style  scoped>
</style>
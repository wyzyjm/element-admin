<template>
  <div>
    <el-menu class="el-menu-vertical-demo" router :default-openeds="defaultOpen">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          文章管理
        </template>
        <el-menu-item index="/list">
          <i class="el-icon-document"></i>
          <span slot="title">文章列表</span>
        </el-menu-item>
        <el-menu-item index="/list/create">
          <i class="el-icon-setting"></i>
          <span slot="title">新建文章</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/test">测试页面</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认展开项
      defaultOpen: ["1"]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

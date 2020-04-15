<template>
  <div id="app">
    <el-container style="height:100vh">
      <!-- 侧边栏 -->
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <AsideNav></AsideNav>
      </el-aside>

      <el-container>
        <!-- 右侧头部 -->
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideNav from "@/components/AsideNav.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    AsideNav
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  height: 100vh;
  color: #333;
}
</style>


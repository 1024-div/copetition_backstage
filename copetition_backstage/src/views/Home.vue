<template>
    <el-container>
      <el-aside width="auto">
        <home-aside></home-aside>
      </el-aside>
      <el-container>
        <el-header>
          <home-header></home-header>
        </el-header>
        <el-main>
          <el-card :body-style="{height:'95%',wight:'100%',padding: '20px'}">
            <router-view/>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import HomeAside from "../components/Home/HomeAside";
import HomeHeader from "../components/Home/HomeHeader";
export default {
  name: 'Home',
  components: {
    HomeAside,
    HomeHeader
  }
}
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-aside{
  background-color: silver;
}
.el-header {
  background-color: #409EFF;

}
.el-main {
  background-color: #EBEEF5;
  overflow: hidden;
}
.el-card {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}
</style>

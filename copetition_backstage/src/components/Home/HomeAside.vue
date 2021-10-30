<template>
  <div class="aside">
    <div class="aside_avatar">
      <div>
        <el-avatar :size="50" :src="loginimage"></el-avatar>
      </div>
      <div style="font-weight: bold;font-size: 18px">
        root
      </div>
    </div>
    <el-divider></el-divider>
    <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
        router="true"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>竞赛管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="apply">竞赛申请</el-menu-item>
          <el-menu-item index="admin">赛事管理</el-menu-item>
          <el-menu-item index="notice">通知发放</el-menu-item>
          <el-menu-item index="certificate">证书颁布</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="message">
        <i class="el-icon-menu"></i>
        <template #title>消息管理</template>
      </el-menu-item>
      <el-menu-item index="user">
        <i class="el-icon-setting"></i>
        <template #title>账号管理</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import loginimage from '@/assets/image/login.jpg'
export default {
  name: "LoginAside",
  data(){
    return {
      isCollapse: false,
      loginimage
    }
  }
}
</script>

<style scoped>
.aside {
  height: 100%;
  background-color: #FFFFFF;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.aside_avatar {
  padding: 10px 10px;
}
.aside_avatar>div {
  width: 100%;
  margin: 10px 0;
  text-align: center;
  display: inline-block;
}
.el-divider {
  margin: 20px 0;
}
</style>
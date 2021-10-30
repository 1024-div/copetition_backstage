<template>
  <el-row>
    <el-col :span="1" :offset="23">
      <el-dropdown>
        <el-avatar :size="40" :src="loginimage"></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item icon="el-icon-user">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "LoginHeader"
}
</script>

<style scoped>
.el-avatar {
  margin-top: 10px;
}
</style>
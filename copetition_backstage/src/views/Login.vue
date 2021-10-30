<template>
  <div class="login_back">
    <el-card class="login_card">
      <template #header>
        <h2 style="text-align: center">后台管理</h2>
      </template>
      <el-form ref="form" :model="form" label-width="70px" label-position="left">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pwd" show-password></el-input>
        </el-form-item>
        <el-form-item label-width="0">
          <el-button type="primary" @click="login">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import login from '@/assets/api/OrgApi.js'
export default {
  name: "Login",
  data(){
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    // 登录
    login(){
      console.log(this.form)
      login.login(this.form.name,this.form.pwd);
    }
  }
}
</script>

<style scoped>
.login_back {
  width: 100%;
  height: 100%;
  background-image: url("../assets/image/login.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.login_card {
  width: 500px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.el-form-item {
  margin: 30px 0;
}
.el-button {
  width: 100%;
}
</style>
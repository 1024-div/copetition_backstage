<template>
  <div class="back">
    <el-card>
      欢迎登录本系统
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data(){
    return {
    }
  }
}
</script>

<style scoped>
.back {
  height: 100%;
  background-image: url("../../assets/image/hello.jpg");
  background-size: cover;
}
.el-card {
  width: 500px;
  background: rgba(255,255,255,0.1);
  border: none;
  font-weight: bold;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  color: rgba(0,0,0,0.7);
}
</style>
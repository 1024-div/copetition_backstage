<template>
  <el-form ref="form" :model="form" label-width="120px">
    <el-descriptions
        class="margin-top"
        title="账号信息"
        :column="1"
        border
    >
      <template #extra>
        <el-button type="primary" size="small" @click="modify">{{ ismodify?'保存':'修改' }}</el-button>
      </template>
      <el-descriptions-item>
  <!--      <el-form-item label="Activity name">-->
  <!--        <el-input v-model="form.name"></el-input>-->
  <!--      </el-form-item>-->
        <template #label>
          <i class="el-icon-user"></i>
          社团/组织名称
        </template>
        <p v-if="!ismodify">{{form.name}}</p>
        <el-input v-if="ismodify" v-model="form.name"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-mobile-phone"></i>
          头像
        </template>
        <el-avatar v-if="!ismodify" :size="80" :src="circleUrl"></el-avatar>
        <el-upload
            v-if="ismodify"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList"
        >
          <el-avatar :size="80" :src="circleUrl">
          </el-avatar>
        </el-upload>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-location-outline"></i>
          联系地址
        </template>
        <p v-if="!ismodify">{{form.address}}</p>
        <el-input v-if="ismodify" v-model="form.address"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          主席/负责人
        </template>
        <el-tag>School</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-tickets"></i>
          主席/负责人联系方式
        </template>
        <p>13965665451</p>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          创办时间
        </template>
        <p v-if="!ismodify">{{form.org_start_time}}</p>
        <el-input v-if="ismodify" v-model="form.org_start_time"></el-input>
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          账号
        </template>
        1405947124
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <i class="el-icon-office-building"></i>
          简介
        </template>
        <p v-if="!ismodify">{{form.jianjie}}</p>
        <el-input rows="5" class="textarea" v-if="ismodify" v-model="form.jianjie" type="textarea"></el-input>
      </el-descriptions-item>
    </el-descriptions>
  </el-form>
</template>

<script>
import circleUrl from '@/assets/image/login.jpg'
export default {
  name: "CpeUser",
  data(){
    return {
      ismodify: false,
      circleUrl,
      form: {
        name: '社团/组织名称',
        address: '安徽滁州',
        org_start_time: '2021-10-27',
        jianjie: '据台湾“中央社”25日报道，澳大利亚“天空新闻”24日播放该国国防部长达顿（Peter Dutton）接受媒体采访的视频，他声称，面对中国大陆可能会以武力“侵犯”台湾，澳大利亚将坚持与美国同进退。很快就有岛内网友讽刺，“意思是美国退澳大利亚也退，对吧！”“意思是澳大利亚是美国的跟班小弟。'
      }
    }
  },
  methods: {
    //切换为修改编辑
    modify(){
      if(this.ismodify){
        this.ismodify = false;
      }else {
        this.ismodify = true;
      }
    }
  }
}
</script>

<style scoped>
.textarea,p {
  width: 900px;
}
</style>
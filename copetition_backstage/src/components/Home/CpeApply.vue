<template>
  <el-scrollbar height="100%" style="padding: 0 10px">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="赛事名称">
        <el-input v-model="form.match_name"></el-input>
      </el-form-item>
      <el-form-item label="赛事类型">
        <el-cascader
            v-model="form.category_id"
            :options="options"
            @focus="getOptions"
            :props="{value:'id',label:'name'}"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-select v-model="form.mode_id" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

<!--      参考知网文献《浅论高等职业院校专业技能竞赛等级认定规则》-->
      <el-form-item label="比赛级别">
        <el-select v-model="form.level_id" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="官网链接">
        <el-input v-model="form.match_link"></el-input>
      </el-form-item>
      <el-form-item label="比赛主题">
        <el-input v-model="form.match_theme" type="textarea"></el-input>
      </el-form-item>

<!--      form.match_details-->
      <el-form-item label="详情介绍">
        <div ref='editor'></div>
<!--        <el-input v-model="form.desc" type="textarea"></el-input>-->
      </el-form-item>

      <el-form-item label="建议参加对象">
        <el-input v-model="form.match_target" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="队伍数量限制">
        <el-input-number v-model="form.match_max_team" :min="1" :max="10"/>
      </el-form-item>
      <el-form-item label="针对学校和专业">
        <el-input v-model="form.school_id"></el-input>
      </el-form-item>
      <el-form-item label="奖项设置">
        <el-input v-model="form.match_prize" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="其他事项">
        <el-input v-model="form.match_other" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="赛事负责人">
        <el-input v-model="form.match_director_id" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="咨询电话">
        <el-input v-model="form.match_phone" type="textarea"></el-input>
      </el-form-item>

      <el-form-item label="报名开始时间">
        <el-col :span="11">
          <el-date-picker
              v-model="start_time1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
              v-model="start_time2"
              placeholder="Pick a time"
              style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="报名结束时间">
        <el-col :span="11">
          <el-date-picker
              v-model="over_time1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
              v-model="over_time2"
              placeholder="Pick a time"
              style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>

<!--      form.match_plan-->
      <el-form-item label="其他时间安排">
        <div ref='editor1'></div>
      </el-form-item>
<!--      form.files-->
      <el-form-item label="添加附件">
        <el-upload
            class="upload-demo"
            :on-change="handleChange"
            :file-list="fileList"
            :auto-upload="false"
            action="Fake Action"
        >
          <el-button size="small" type="primary" :loading="isupload">{{ isupload?"正在上传":"点击上传" }}</el-button>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>

<!--      封面上传 form.image-->
      <el-form-item label="宣传图片上传">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-scrollbar>
</template>

<script>
import WangEditor from 'wangeditor';
import Tool from "../../assets/api/Tool";
import Public from "../../assets/api/Public";
export default {
  name: "CpeApply",
  data(){
    return {
      form: {
        match_name: '',
        region: '',
        category_id: '',
        mode_id: '',
        level_id: '',
        match_link : '',
        match_theme: '',
        match_details: '',
        match_target: '',
        match_plan: '',
        match_process: '',
        match_max_team: 1,
        school_id: '',
        match_prize: '',
        match_other: '',
        match_director_id: '',
        match_phone: '',
        start_time: '',
        over_time: '',
        files: '',
        image: ''
      },
      activities:[
        {
          content: 'Event start',
          timestamp: '2018-04-15',
        },
        {
          content: 'Approved',
          timestamp: '2018-04-14',
        },
        {
          content: 'Approved',
          timestamp: '2018-04-13',
        },
        {
          content: 'Success',
          timestamp: '2018-04-11',
        },
      ],
      //详情介绍富文本标签
      editor:'',
      content: {
        html: '',
        text: '',
      },
      instance: null,
      //其他时间安排富文本标签
      editor1: '',
      content1: {
        html: '',
        text: '',
      },
      instance1: null,
      // 附件列表
      fileList: [],
      //是否在上传状态中
      isupload: false,
      // 比赛类型列表
      options: null,
      //报名开始时间
      start_time1: '',
      start_time2: '',
      //报名结束时间
      over_time1: '',
      over_time2: ''
    }
  },
  methods: {
    //上传图片
    unploadimage(resultFiles,insertImgFn){
      let imgUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F04%2F20200504161424_HckP4.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637981891&t=44280bf4126a739a6f935f9b2548af36';
      console.log(resultFiles);
      console.log(insertImgFn)
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中// resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中
      insertImgFn(imgUrl)
    },
    handleChange(file,fileList){
      this.isupload = true;
      console.log(fileList)
      Tool.unploadImage({
        name: file.name,
        md5: '',
        file: file.raw,
        success(res){
          this.isupload = false;
          console.log(res)
        },
        fail(err){
          console.log(err)
        }
      });
    },
    // 获取比赛类型
    getOptions() {
      Public.getAllCategory(data => {
        this.options = Tool.handleTree(data);
        console.log(this.options)
      })
    },
    //提交表单
    onSubmit(){
      console.log(this.form)
    }
  },
  mounted() {
    let _this = this;
    this.instance = new WangEditor(this.$refs.editor);
    Object.assign(this.instance.config, {
      customUploadImg: _this.unploadimage,
      showLinkImg: false,
      onchange() {
        console.log(_this.instance.txt.html())
        console.log('change');
      },
    });
    this.instance.create();

    this.instance1 = new WangEditor(this.$refs.editor1);
    Object.assign(this.instance1.config, {
      customUploadImg: _this.unploadimage,
      showLinkImg: false,
      onchange() {
        console.log(_this.instance1.txt.html())
        console.log('change');
      },
    });
    this.instance1.create();
  },
  beforeUnmount() {
    this.instance.destroy();
    this.instance = null;
  }
}
</script>

<style scoped>
.avatar-uploader{
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 180px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
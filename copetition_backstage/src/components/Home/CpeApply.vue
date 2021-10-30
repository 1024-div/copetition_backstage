<template>
  <el-scrollbar height="100%">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="赛事名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="赛事类型">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="比赛级别">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="官网链接">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="比赛主题">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="详情介绍">
        <div ref='editor'></div>

<!--        <el-input v-model="form.desc" type="textarea"></el-input>-->
      </el-form-item>
      <el-form-item label="建议参加对象">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="队伍数量限制">
        <el-input-number v-model="num" :min="1" :max="10"/>
      </el-form-item>
      <el-form-item label="针对学校和专业">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="奖项设置">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="其他事项">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="赛事负责人">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="咨询电话">
        <el-input v-model="form.desc" type="textarea"></el-input>
      </el-form-item>

      <el-form-item label="报名开始时间">
        <el-col :span="11">
          <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
              v-model="form.date2"
              placeholder="Pick a time"
              style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="报名结束时间">
        <el-col :span="11">
          <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
              v-model="form.date2"
              placeholder="Pick a time"
              style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="活动时间安排">
        
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-scrollbar>
</template>

<script>
import { ref,reactive,onMounted,onBeforeUnmount } from 'vue'
import WangEditor from 'wangeditor';
export default {
  name: "CpeApply",
  setup(){
    const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const activities = reactive([
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
    ]);
    const num = ref(1);

    //富文本标签
    const editor = ref();
    const content = reactive({
      html: '',
      text: '',
    });

    let instance;
    onMounted(() => {
      instance = new WangEditor(editor.value);
      Object.assign(instance.config, {
        customUploadImg: unploadimage,
        showLinkImg: false,
        onchange() {
          console.log(instance.txt.html())
          console.log('change');
        },
      });
      instance.create();
    });

    onBeforeUnmount(() => {
      instance.destroy();
      instance = null;
    });
    //上传图片
    const unploadimage = (resultFiles,insertImgFn)=>{
      let imgUrl = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F04%2F20200504161424_HckP4.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1637981891&t=44280bf4126a739a6f935f9b2548af36';
      console.log(resultFiles);
      console.log(insertImgFn)
      // resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中// resultFiles 是 input 中选中的文件列表
      // insertImgFn 是获取图片 url 后，插入到编辑器的方法

      // 上传图片，返回结果，将图片插入到编辑器中
      insertImgFn(imgUrl)
    }

    return {
      form,
      activities,
      num,
      editor,
      content,
    }
  }
}
</script>

<style scoped>

</style>
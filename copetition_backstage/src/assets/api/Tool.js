import request from "../../utils/request";
import { ElMessage } from 'element-plus'

export default{
    //通用图片上传
    unploadImage(data){
        let form = new FormData();
        form.append("md5", data.md5);
        form.append("name", data.name);
        form.append("file",data.file);
        request({
            url: '/File/uploadFile',
            method: 'post',
            data: form,
            headers:{"ContentType": "multipart/form-data",}
        }).then(res=>{
            ElMessage({
                message: "文件上传成功",
                type: 'success',
            })
            data.success(res);
        }).catch(err=>{
            ElMessage({
                message: "文件上传失败",
                type: 'warning',
            })
            data.fail(err);
        })
    },
    // 通用视频上传
    unloadVoid(){

    },
    // 通用文件上传
    unloadFile(){

    },
    // 通用文件下载
    downloadFile(){

    },
    //树形化数据列表
    handleTree(data, id, parentId, children, rootId) {
        id = id || 'id'
        parentId = parentId || 'parent_id'
        children = children || 'children'
        rootId = rootId || Math.min.apply(Math, data.map(item => { return item[parentId] })) || 0
        //对源数据深度克隆
        const cloneData = JSON.parse(JSON.stringify(data))
        //循环所有项
        const treeData = cloneData.filter(father => {
            let branchArr = cloneData.filter(child => {
                //返回每一项的子级数组
                return father[id] === child[parentId]
            });
            branchArr.length > 0 ? father.children = branchArr : '';
            //返回第一层
            return father[parentId] === rootId;
        });
        return treeData != '' ? treeData : data;
    }
}





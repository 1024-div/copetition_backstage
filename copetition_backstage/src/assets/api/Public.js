import request from "../../utils/request";
import { ElMessage } from 'element-plus'
export default {
    getAllCategory(success){
        request({
            url: '/Category/getAllCategory',
            method: 'get',
        }).then(res=>{
            success(res.data);
        }).catch(err=>{
            ElMessage({
                message: "数据获取失败，请检查您的网络",
                type: 'warning',
            })
        })
    }
}
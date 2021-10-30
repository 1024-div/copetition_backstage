import request from "../../utils/request";
import {ElMessage} from "element-plus";
import store from '@/store'
import router from "../../router";

export default {
    // 登录
    login(name,pwd) {
        request({
            method: 'get',
            url: '/org/login',
            data: {
                name: name,
                pwd: pwd
            }
        }).then(res=> {
            if(res.data){ //登录成功
                store.commit('toLogin', {name, pwd});
                console.log(store.state.user)
                router.push('/home');
            }else { //登录失败
                ElMessage({
                    message: '账号密码错误请重新检查确认',
                    type: "warning"
                })
            }
        }).catch(err=>{
            console.log(err)
        })
    },
    // 账号管理，修改账号信息
    modify(){

    }
}
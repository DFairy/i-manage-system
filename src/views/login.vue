<template>
   <div class='login'>
       <img src="../common/img/avatar.jpg" class="avatar">
       <div class="login-form">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.user" placeholder="Username" size="large" prefix="ios-person-outline"/>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password" size="large" prefix="ios-lock-outline"/>
                </FormItem>
                <FormItem>
                    <Button type="primary" @click="handleSubmit('formInline')" long>Login</Button>
                </FormItem>
            </Form>
            <div class="tip">tips:用户名和密码随便填，密码不得小于6位数</div>
       </div>
   </div>
</template>

</script>

<script>
export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    console.log(valid)
                    if (valid) {
                        this.$Message.success('登录成功!');
                        this.$router.push('/dashBoard');
                    } else {
                        this.$Message.error('您的密码或用户名错误，请重新输入!');
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
@import "../common/style/mixin.less";
@import "../common/style/animation.less";
.login{
    width: 100%;
    height: 100%;
    background: url(../common/img/bg.png) no-repeat;
    background-size: cover;
    background-position: center center;
    .center;
    .avatar{
        .avatarImg(100px,100px);
        &:hover{
            .rotate;
        }
    }
    .login-form{
        width: 400px;
        height: 300px;
        margin-top:30px;
        position: relative;
        background: rgba(255,255,255,0.1);
        padding: 50px 30px 0 30px;
        border-radius: 5px;
        &::before{
            content: "";
            position: absolute;
            top: -20px;
            left: 50%;
            width:0;
            height:0;
            margin-left:-10px;
            border-left:13px solid transparent;
            border-right:13px solid transparent;
            border-bottom:20px solid rgba(255,255,255,0.1);
            z-index: 1000;
        }
        .ivu-btn-primary{
            .gradient-blue;
            border: 0;
            letter-spacing: 2px;
            box-shadow: 0 0 10px #397799;
            &:hover{
                opacity: 0.8;
            }
        }
        .tip{
            color: #fff;
        }
    }
}
</style>

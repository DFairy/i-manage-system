<template>
  <Header class="head">
    <div class='head-name'>后台管理系统</div>
    <ul class='head-list'>
      <li>
        <Tooltip content="全屏" placement="bottom">
            <Icon type="ios-expand" size="26" color='#fff' />
        </Tooltip>
      </li>
      <li>
        <Tooltip content="未读消息" placement="bottom">
          <Badge type="error" :count="5">
            <Icon type="ios-notifications-outline" size="26" color='#fff'></Icon>
          </Badge>
        </Tooltip>
      </li> 
      <li> 
         <img src="../common/img/avatar.jpg" class="avatar">       
     </li>
     <li>
       <Poptip trigger="hover" placement="bottom-end" >
         <div>
           <span class='admin-name'>admin</span>
           <Icon type="ios-arrow-down" size="16" color='#fff'/>
         </div>
         <div slot="content">
           <ul class='login-out'>
             <li>
               <a href="javascript:void(0)">
                <Button type="text">项目仓库</Button>
               </a>
             </li>
             <li>
               <router-link to="/login">
                  <Button type="text">退出登录</Button>
                </router-link>
              </li>
           </ul>
        </div>
       </Poptip>
     </li>
    </ul>
  </Header>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
@import "../common/style/animation.less";
@import "../common/style/mixin.less";
.ivu-layout-header {
  background: #242f42 !important;
  line-height: 0;
}
body .ivu-poptip-popper {
  min-width: 100px !important;
}
.head {
  width: 100%;
  .flex(space-between);
  .head-name {
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .head-list {
    width: 250px;
    .flex(space-between);
    li {
      cursor: pointer;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 3px solid #ddd;
        &:hover {
          .rotate;
        }
      }
      .admin-name {
        color: #fff;
        font-size: 14px;
      }
      .login-out li {
        padding: 20px;
        color: #fff;
      }
    }
  }
}
</style>
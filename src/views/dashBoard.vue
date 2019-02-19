<template>
   <div class="dash-board">
      <div class="dash-title">
         <div class="col-3 dash-introduce">
             <Card class="m-20">
               <div class="dash-introduce-p">
                  <img src="../common/img/avatar.jpg" class="avatar">
                  <div>
                     <div class="introduce-name">admin</div>
                     <div>超级管理员</div>
                  </div>
               </div>
               <hr>
               <div class="dash-introduce-p" style="margin-top:10px">
                  <div>上次登录时间：</div>
                  <div>2019-02-18</div>
               </div>
               <div class="dash-introduce-p">
                  <div>上次登录地点：</div>
                  <div>无锡</div>
               </div>
            </Card>
            <Card>
               <p slot="title">语言详情</p>
               <p>
                  <span>Vue</span>
                  <Progress :percent="80" status="active"></Progress>
                  <span>Javascript</span>
                  <Progress :percent="50" status="active"></Progress>
                  <span>Html</span>
                  <Progress :percent="80" status="active"></Progress>
                  <span>Css</span>
                  <Progress :percent="95" status="active"></Progress>
               </p>
            </Card>
         </div>
         <div class="col-7 l-20">
            <ul class="panel">
               <li>
                  <div class="panel-icon" style="background:#34bfa3">
                     <i class="fa fa-user fa-4x"></i>
                  </div>
                  <div class="panel-content">
                     <h1 class="color-green">123456</h1>
                     <h3>用户访问量</h3>
                  </div>
               </li>
               <li>
                  <div class="panel-icon" style="background:#f4516c">
                     <i class="fa fa-bell fa-4x"></i>
                  </div>
                  <div class="panel-content">
                     <h1 class="color-red">123456</h1>
                     <h3>系统消息</h3>
                  </div>
               </li>
               <li>
                  <div class="panel-icon" style="background:#36a3f7">
                     <i class="fa fa-cubes fa-4x"></i>
                  </div>
                  <div class="panel-content">
                     <h1 class="color-blue">1234</h1>
                     <h3>数量</h3>
                  </div>
               </li>
            </ul>
            <Card>
               <div class="schart">
                  <line-chart></line-chart>
               </div>
            </Card>
         </div>
      </div>
      <!-- <Row>
        <i-col span="8">
        </i-col>
        <i-col span="16">col-12</i-col>
    </Row> -->
   </div>
</template>

<script>
import lineChart from 'components/charts/lineChart.vue'
export default {
   components:{lineChart}
}
</script>

<style lang='less' scoped>
@import "../common/style/mixin.less";
@import "../common/style/animation.less";
.dash-board{
   width: 100%;
   height: 100%;
   background: #f0f0f0;
   .dash-title{
      .flex(flex-start);
      .dash-introduce{
         .dash-introduce-p{
            .flex(space-between);
            color: #333;
            font-size:14px;
            padding-bottom: 5px;
            .avatar{
               .avatarImg(100px,100px);
            }
            .introduce-name{
               color: #222;
               font-size: 26px;
               font-weight: 500;
            }
         }
      }
      .panel{
         .flex(space-around);
         margin-bottom: 20px;
         li{
            // padding: 0 20px;
            width: 30%;
            margin-right:2%;
            background: #fff;
            .flex(space-between);
            border-radius: 5px;
            .panel-icon{
               padding: 25px;
               color: #fff;
               i{
                  &:hover{
                     .rotate;
                  }
               }
            }
            .panel-content{
               text-align: center;
               width: 100%;
               h1{
                  font-weight: 500;
               }
            }
         }
      }
      .schart{
         width: 100%;
         height: 324px;
      }
   }
}
</style>
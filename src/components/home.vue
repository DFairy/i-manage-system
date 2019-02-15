<template>
 <div class="home">
    <Layout class="h-100">
        <v-head></v-head>
        <Layout style="flex-direction:row" class="h-100">
            <v-side></v-side>
            <Layout>
                <tags></tags>
                <Content :style="{margin: '14px', minHeight: '280px', background: '#fff'}">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </Content>
            </Layout>
        </Layout>
    </Layout>
</div>
</template>

<script>
import vHead from "./v-head";
import vSide from "./v-side";
import Tags from "./tags";
import bus from './bus.js'
export default {
  components: {
    vHead,
    vSide,
    Tags
  },
  data(){
      return{
          tagsList:[]
      }
  },
  created(){
      bus.$on('tags',msg=>{
          let arr=[]
          for(let i=0;i<msg.length;i++){
              msg[i].name&&arr.push(msg[i].name)
          }
          this.tagsList=arr
      })
  }
};
</script>

<style lang='less' scoped>
.home{
    height: 100%;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.h-100{
    height: 100%;
}
</style>
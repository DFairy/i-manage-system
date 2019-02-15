<template>
  <Sider  :style="{background: 'rgb(50, 65, 87)'}" >
    <Menu active-name="0"  width="auto"  accordion >
      <div v-for="(items,id) in $router.options.routes" :key="id">
       <div v-for="(item,index) in items.children" :key="index">
          <MenuItem :name="index" :to="item.path" v-if='!item.children' :class="$route.path==item.path?'active':''">
            <i class="fa" :class="item.icon"></i>
            <span>{{item.meta.title}}</span>
          </MenuItem>
          <Submenu name="3" v-if='item.children' >
              <template slot="title">
                <i class="fa" :class="item.icon"></i>
                <span>{{item.meta.title}}</span>
              </template>
              <MenuItem :name="values+''" :to="value.path" v-for="(value,values) in item.children" :key='values'
              :class="$route.path==value.path?'active':'' ">{{value.meta.title}}</MenuItem>
          </Submenu>
        </div>
      </div>    
    </Menu>

  </Sider>
</template>

<script>

export default {
};
</script>

<style lang='less' scoped>
.ivu-menu-light {
  background: rgb(50, 65, 87);
}
.ivu-menu{
  color: #fff;
}
.ivu-menu-item{
  color: #fff;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
  background: transparent;
}
.ivu-menu-vertical.ivu-menu-light:after {
  height: 0;
}
.collapsed-menu span{
  width: 0px!important;
  transition: width .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 18px;
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  // transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
  color:#fff
}
.ivu-menu-light.ivu-menu-vertical .active:not(.ivu-menu-submenu){
  color: #2d8cf0;
  z-index: 3;
}
</style>
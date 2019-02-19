<template>
   <div>
       <i-table  :columns="columns" :data="tableData"></i-table>
   </div>
</template>

<script>
export default {
    props:{
        // border:{
        //     type:Boolean,
        //     default:false
        // },
        columns:{
            type:Array,
            default(){
                return []
            }
        },
        tableData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style lang='less' scoped>
</style>
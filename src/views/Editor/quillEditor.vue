<template>
    <div>
        <Card>
            <p slot='title'>vue-quill-editor:github地址 <a href="https://github.com/surmon-china/vue-quill-editor" target="blank">https://github.com/surmon-china/vue-quill-editor</a> </p>
            <p>
                <quill-editor v-model="content" :options="editorOption" ref="myQuillEditor" ></quill-editor>   
            </p>
        </Card>
        <i-button type="primary" @click="submit" style="margin-top:20px" >提交内容</i-button>
        <Input v-model="value" type="textarea" :rows="10" style="margin-top:20px" />
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
    components:{quillEditor},
    data(){
        return{
            value:"",
            content:"",
            editorOption: {
                placeholder: '请输入...'
            }
        }
    },
    created(){
        this.$nextTick(()=>{
            console.log(this.editor)
        })
    },
    computed:{
        editor(){
            return this.$refs.myQuillEditor.quill
        }
    },
    methods:{
        submit(){
            this.value=this.content
        }
    }
}
</script>

<style lang='less' scoped>
</style>
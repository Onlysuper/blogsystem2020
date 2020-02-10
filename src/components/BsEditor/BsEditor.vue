<template>
    <div class="tu-wen">
         
         <quill-editor
            v-model="content"                 
            ref="myQuillEditor"               
            :options="editorOption"            
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
            >
          </quill-editor>
</div>
</template>

<script>


</script> 
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'; 
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

@Component({
 components:{
    quillEditor
  } 
})
export default class HelloWorld extends Vue {
//   @Prop() private msg!: string;
    content : any = `<p>hello world</p>`;
    editorOption : any = {}
    onEditorBlur(any : quill) {
        // console.log('editor blur!', quill)
    }
    onEditorFocus(any : quill) {
        // console.log('editor focus!', quill)
    }
    onEditorReady(any : quill) {
        // console.log('editor ready!', quill)
    }
    onEditorChange({ any : quill, html, text }) {
        console.log('editor change!', quill, html, text)
        this.content = html
    }
}
</script>
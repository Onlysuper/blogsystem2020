// <template>
//     <div>
//         {{content}}
//         {{editorOption}}
//         <!-- <quill-editor ref="myTextEditor"
//             v-model="content"
//             :config="editorOption"
//             @blur="onEditorBlur($event)"
//             @focus="onEditorFocus($event)"
//             @ready="onEditorReady($event)">
//         </quill-editor> -->
//     </div>
// </template>

// <script lang="ts">
// import { Component, Prop, Vue } from 'vue-property-decorator';
// import VueQuillEditor from 'vue-quill-editor';

// @Component({
//   components:{
//     VueQuillEditor
//   } 
// })
// export default class BsEditor extends Vue {
//     content : any = `<p>hello world</p>`;
//     editorOption : any = {}
//     onEditorBlur(any : quill) {
//     console.log('editor blur!', quill)
//     }
//     onEditorFocus(quill) {
//     console.log('editor focus!', quill)
//     }
//     onEditorReady(quill) {
//     console.log('editor ready!', quill)
//     }
//     onEditorChange({ quill, html, text }) {
//         console.log('editor change!', quill, html, text)
//         this.content = html
//     }
// }
// </script> 
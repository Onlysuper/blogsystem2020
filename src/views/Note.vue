<template>
  <div class="note-page">
    <BsEditor></BsEditor>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BsEditor from "@src/components/BsEditor/BsEditor.vue";

@Component({
  components:{
    BsEditor
  }
})
export default class NotePage extends Vue {

}
// export default {
  
// }
</script>
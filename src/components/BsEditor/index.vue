<template>
    <quill-editor ref="myTextEditor"
        v-model="content"
        :config="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
    </quill-editor>
</template>
<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
export default {
    components: {
        quillEditor
    }
}
</script>
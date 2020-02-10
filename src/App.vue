
<template>
    <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class App extends Vue {
  mounted(): void {
    console.log('巴拉巴拉')
  }
}
// export default class App extends Vue {
//   isCollapsed: boolean = false;
//   get rotateIcon() {
//      return [
//                 'menu-icon',
//                 this.isCollapsed ? 'rotate-icon' : ''
//             ];
//   }
//   get menuitemClasses(){
//     return [
//               'menu-item',
//               this.isCollapsed ? 'collapsed-menu' : ''
//           ]
//   }
//   collapsedSider () {
//     //   this.$refs.side1.toggleCollapse();
//   }
//   menuSelecte (name:any) {
//       if(name){
//           this.$router.push({
//               path:'/'+name
//           })
//       }
//   }
//   escLogin(){
//       console.log('退出登录');
//       this.$router.push({
//           path:'/login'
//       })
//   }

// }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>

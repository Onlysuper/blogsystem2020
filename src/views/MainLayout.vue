<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .head-right{
        text-align: right;
        .avatar-box{
            margin-right: 10px
        }
    }
</style>
<template>
  <Layout>
        <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" @on-select="menuSelecte">
                <MenuItem name="note">
                    <Icon type="ios-navigate"></Icon>
                    <span>笔记</span>
                </MenuItem>
                <MenuItem name="article">
                    <Icon type="article"></Icon>
                    <span>文章</span>
                </MenuItem>
                <MenuItem name="about">
                    <Icon type="about"></Icon>
                    <span>关于</span>
                </MenuItem>
            </Menu>
        </Sider>
        <Layout>
            <Header :style="{padding: 0}" class="layout-header-bar">
                <Row>
                    <Col span="8"><Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon></Col>
                    <Col span="8" offset="8" class="head-right">
                        <Dropdown trigger="click" style="margin-right: 20px">
                            <a href="javascript:void(0)">
                                <Avatar class="avatar-box" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem @click.native="escLogin">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
            <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                <router-view></router-view>
            </Content>
        </Layout>
  </Layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class MainLayout extends Vue {
  isCollapsed: boolean = false;
  get rotateIcon() {
     return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ];
  }
  get menuitemClasses(){
    return [
              'menu-item',
              this.isCollapsed ? 'collapsed-menu' : ''
          ]
  }
  collapsedSider () {
    //   this.$refs.side1.toggleCollapse();
  }
  menuSelecte (name:any) {
      if(name){
          this.$router.push({
              path:'/'+name
          })
      }
  }
  escLogin(){
      console.log('退出登录');
      this.$router.push({
          path:'/login'
      })
  }
}
</script>

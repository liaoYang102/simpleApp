<template>
  <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="icon"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <div class="item-container" :style="contentStyle"><text>111</text>
      <wxc-button text="确定"
              @wxcButtonClicked="wxcButtonClicked"></wxc-button>
    </div>

    <!-- 第二个页面内容-->
    <div class="item-container" :style="contentStyle"><text>特别推荐</text></div>

    <!-- 第三个页面内容-->
    <div class="item-container" :style="contentStyle"><text>消息中心</text></div>

    <!-- 第四个页面内容-->
    <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
  </wxc-tab-bar>
</template>

<style scoped>
  .item-container {
    width: 750px;
    background-color: #f2f3f4;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  const navigator = weex.requireModule("navigator");
  import { getEntryUrl } from "./utils";
  import { WxcTabBar, Utils,WxcButton } from 'weex-ui';

  // https://github.com/apache/incubator-weex-ui/blob/master/example/tab-bar/config.js
  import Config from './config'

  export default {
    components: { WxcTabBar,WxcButton },
    data: () => ({
      tabTitles: Config.tabTitles,
      tabStyles: Config.tabStyles
    }),
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };

      // navigator.push({
        // url: "./detail.html",
        // url: getEntryUrl("assets/views/release"),
        // animated: "true"
      // });
    },
    methods: {
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        // console.log(index);
      },
      wxcButtonClicked (e) {
        console.log(e)
      }
    }
  };
</script>
<template>
  <div class="container">
    <div class="topScreen" style="height:170px;width:750px;background-color: #EFEFEF;">
      <div class="miniBar">
        <wxc-icon name="back" style="font-size:42px;width:5%;margin:0 20px 0 10px"></wxc-icon>
        <wxc-searchbar @searchbarCancelClick="searchbarCancelClick" style="flex:1" :bar-style="barStyle" placeholder="请输入小区或者商圈名"></wxc-searchbar>
        <wxc-icon name="filter" style="font-size:40px;width:5%;margin:0 25px"></wxc-icon>
      </div>
      <div class="houseSelect">
          <div class="selectsScreen">
            <div class="screenOne" @click="visibleTop = true"><text>区域</text><div class="up"></div></div>
            <div class="screenOne"><text>价格</text><div class="up"></div></div>
            <div class="screenOne"><text>房型</text><div class="up"></div></div>
            <div class="screenOne"><text>更多</text><div class="up"></div></div>
            <!-- <image clas="borderImage" style="width:42px;height:42px;" :src="get_img_path('sort.png')"/> -->
          </div>
          <wxc-popup
               :show="visibleTop"
               @wxcPopupOverlayClicked="popupOverlayBottomClick(false)"
               pos="top"
               height="576">
            <div class="popupContent">
              <div class="popupTop" style="border-bottom:1px solid #E6E6E6">
                <div style="flex-direction:row;flex-wrap: wrap;">
                  <list class="left" style="flex:1;height:480px">
                    <cell v-for="(num,index) in address" :key="index" style="padding-left:30px">
                      <text style="padding-top:20px;padding-bottom:20px;font-size:30px;border-bottom:1px solid #E6E6E6;">{{num}}</text>
                    </cell>
                  </list>
                  <list class="right" style="flex:1;background-color:#E8E7E7;height:480px">
                    <cell v-for="(num,index) in address" :key="index" style="padding-left:30px">
                      <text style="padding-top:20px;padding-bottom:20px;font-size:30px;border-bottom:1px solid #DCDCDC;" @click="showList">{{num}}</text>
                    </cell>
                  </list>
                  <list class="right" :class="showDom?'showDom':'hideDom'" style="flex:1;background-color:#E8E7E7;height:480px" >
                    <wxc-checkbox-list :config="config" :list="list" @wxcCheckBoxListChecked="wxcCheckBoxListChecked" class="houseCheck"></wxc-checkbox-list>
                  </list>
                </div>
                <div class="btn" style="padding-top:16px;padding-bottom:16px;padding-left:30px;padding-right:30px;">
                  <wxc-button text="重置" :textStyle="textStyle" @wxcButtonClicked="wxcButtonClicked" style="border-radius:2px;background-color:#E8E7E7;margin-right:20px;flex:1;height:60px;"></wxc-button>
                  <wxc-button text="确认" :textStyle="confirmStyle" @wxcButtonClicked="wxcButtonClicked" style="border-radius:2px;background-color:#4E76F3;flex:1;height:60px;"></wxc-button>
                </div>
              </div>
            </div>
          </wxc-popup>
      </div>
    </div>
  </div>
</template>

<style scope>
.miniBar{
  background-color: #EFEFEF;
  flex-direction:row;
  flex-wrap: wrap;
  align-items: center;
}
.miniBar .wxc-search-bar input{
  background-color: #D0D0D0!important;
  background-color: #D0D0D0;
}
.miniBar .wxc-search-bar p{
  display: none;
}
.miniBar .wxc-search-bar .search-bar-close{
  right: 15px!important;
  right: 15px;
}
.selectsScreen{
  background-color: #EFEFEF;
  flex-direction:row;
  flex-wrap: wrap;
  align-items: center;
  padding-left:10px;
  padding-right:10px;
}
.screenOne{
  flex: 1;
  flex-direction:row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size:28px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.up{
  width: 0;height: 0;border-left: 6px solid transparent;border-right: 6px solid transparent;border-bottom: 6px solid #505050;font-size: 0;line-height: 0;margin-left:5px;
}
.houseSelect .wxc-overlay{
  top: 84px!important;
  top: 84px;
}
.houseSelect .wxc-popup{
  margin-top: 84px;
}
.popupTop{
  flex-direction:column;
  flex-wrap: wrap;
}
.btn{
  flex-direction:row;
  flex-wrap: wrap;
}
.showDom{
  display: inherit;
}
.hideDom{
  display: none;
}
.houseCheck .cell-indent{
  background-color:#E8E7E7!important;
  padding-top:8px!important;
  padding-bottom:8px!important;
  font-size:30px!important;
  background-color:#E8E7E7;
  font-size:30px;
}
</style>
<script>
  import { WxcSearchbar,WxcIcon,WxcPopup,WxcButton,WxcCheckbox,WxcCheckboxList  } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    components: {WxcSearchbar,WxcIcon,WxcPopup,WxcButton,WxcCheckbox,WxcCheckboxList },
    data: () => ({
      barStyle: {
        overflow:"hidden",
        width:"600px",
        backgroundColor: '#EFEFEF',
      },
      visibleTop:false,
      address:["区域","地铁","附近"],
      list: [
        { title: '选项1', value: 1 },
        { title: '选项2', value: 2, checked: true },
        { title: '选项3', value: 3 },
        { title: '选项4', value: 4 }
      ],
      textStyle:{
        color:"#808080",
        fontSize:'30px'
      },
      confirmStyle:{
        color:"#fff",
        fontSize:'30px'
      },
      showDom:false,
      config:{
        checkedColor: '#4E76F3'
      }
    }),
    methods: {
      searchbarCancelClick(){
      },
      popupOverlayBottomClick (visible) {
          this.visibleTop = visible;
      },
      wxcButtonClicked(){

      },
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      },
      showList(){
        this.showDom = true;
      }
    }
  };
</script>
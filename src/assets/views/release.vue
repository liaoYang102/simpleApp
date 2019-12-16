<template>
  <div class="container">
    <scroller class="demo">
        <wxc-minibar background-color="#fff">
            <wxc-icon name="back" slot="left"></wxc-icon>
            <text style="font-size: 36px;font-weight:500;" slot="middle">免费发布房源</text>
        </wxc-minibar>
        <div class="reload">
            <text style="font-size: 20px;line-height:44px;color:#fff;flex:1;margin-left:31px;">请勿上传包含链接或与房源无关的图片</text>
            <!-- <image class = "border-image" style="width:100%;height:365px;" :src="get_img_path('photo_bg.png')"/> -->
            <!-- <image class = "border-image" style="position:absolute;left:50%;top:50%;width:200px;height:200px;margin-left:-100px;margin-top:-80px;" :src="get_img_path('up_load.png')"/> -->
        </div>
        <div class="cell" style="width:750px;height:19px;background-color:#eee"></div>
        <div class="select">
            <wxc-cell label="城市"
                        title="上海"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false"></wxc-cell>
            <wxc-cell label="小区名称"
                        :has-arrow="true"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false"></wxc-cell>
            <wxc-cell label="详细地址"
                        :has-arrow="true"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false"></wxc-cell>
        </div>
        <div class="cell" style="width:750px;height:19px;background-color:#eee"></div>
        <div class="select" style="justify-content: left;">
            <wxc-cell label="楼层"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false">
                        <input slot="title" placeholder="请输入共"></input>
                        <text style="font-size:30px;color:#808080">层</text>
                        </wxc-cell>
            <wxc-cell label="面积"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false">
                        <input slot="title" placeholder="请输入"></input>
                        <text style="font-size: 30px;color:#808080">平</text>
                        </wxc-cell>
            <wxc-cell label="户型"
                        :has-arrow="true"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false"></wxc-cell>
            <wxc-cell label="朝向"
                        :has-arrow="true"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false"></wxc-cell>
            <wxc-cell label="期望售价"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false">
                        <input slot="title" placeholder="请输入"></input>
                        <text style="font-size: 30px;color:#808080">万元</text>
                        </wxc-cell>
            <wxc-cell label="称呼"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false">
                        <input slot="title" placeholder="如何称呼您"></input>
                        </wxc-cell>
            <wxc-cell label="联系方式"
                        :has-arrow="false"
                        @wxcCellClicked="wxcCellClicked"
                        :has-top-border="false">
                        <input slot="title" placeholder="请输入联系方式"></input>
                        </wxc-cell>
        </div>
        <div class="cell" style="width:750px;height:19px;background-color:#eee"></div>
        <div class="singe-select" style="padding:30px">
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;">建筑类型</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData1"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;margin-top:20px">装修</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData2"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;margin-top:20px">电梯</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData3"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;margin-top:20px">额外面积</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData4"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;margin-top:20px">用途</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData5"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
            <text style="font-size: 30px;font-weight:400;color:#505050;margin-bottom:20px;margin-top:20px">权属</text>
            <wxc-grid-select
                :single="true"
                :cols="4"
                :customStyles="customStyles"
                :list="testData6"
                @select="params => onSelect('res3', params)">
            </wxc-grid-select>
        </div>
        <div class="cell" style="width:750px;height:19px;background-color:#eee"></div>
        <text style="font-size: 30px;font-weight:400;color:#505050;padding-bottom:10px;background-color:#eee;padding-left:30px">房源介绍</text>
        <textarea class="textarea" placeholder="请输入房源的详细介绍。"></textarea>
        <div class="btn" style="width:750px;justify-content: center;background-color:#EEEEEE;padding-top:30px;padding-bottom:30px;padding-left:18px;padding-right:18px;">
            <wxc-button text="完成" @wxcButtonClicked="wxcButtonClicked" style="background-color:#4E76F3"></wxc-button>
        </div>
    </scroller>
  </div>
</template>

<style scoped>
 .reload{
    width: 750px;
    height: 408px;
    background-color: #3A3C41;
    align-items: top;
    justify-content: left;
    position: relative;
  }
  .textarea {
    font-size: 28px;
    width: 750px;
    height:316px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
    color: #333;
  }
</style>

<script>
  import { WxcMinibar,WxcIcon,WxcCell,WxcGridSelect,WxcButton  } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    components: { WxcMinibar,WxcIcon,WxcCell,WxcGridSelect,WxcButton },
    data: () => ({
      customStyles: {
        lineSpacing: '30px',
        width: '150px',
        height: '52px',
        icon: '',
        color: '#505050',
        checkedColor: '#4E76F3',
        disabledColor: '#eeeeee',
        borderColor: '#979797',
        checkedBorderColor: '#BBCBFF',
        backgroundColor: '#ffffff',
        checkedBackgroundColor: '#BBCBFF',
      },
      testData1:[{title:"板楼"},{title:"塔楼"},{title:"板塔结合"},{title:"平房"}],
      testData2:[{title:"精装修"},{title:"普通装修"},{title:"毛胚"}],
      testData3:[{title:"有电梯"},{title:"无电梯"}],
      testData4:[{title:"有"},{title:"无"},{title:"不清楚"}],
      testData5:[{title:"普通住宅"},{title:"商业类"},{title:"别墅"},{title:"四合院"},{title:"车位"},{title:"其他"}],
      testData6:[{title:"商品房"},{title:"公房"},{title:"经适房"},{title:"其他,"}]
    }),
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      },
      wxcCellClicked (e) {
        console.log(e)
      },
      onSelect (res, {selectIndex, checked, checkedList}) {
        Vue.set(this, res, `本次选择的index：${selectIndex}\n是否选中：${checked ? '是' : '否'}\n选中列表：${checkedList.map(item => item.title).join(',')}`);
      },
       wxcButtonClicked (e) {
        console.log(e)
      }
    }
  };
</script>
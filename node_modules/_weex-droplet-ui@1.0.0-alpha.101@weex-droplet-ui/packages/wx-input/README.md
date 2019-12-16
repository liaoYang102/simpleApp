## demo
  
```html
<template>
    <div>
        <wx-input class="demo"
                icon="http://192.168.21.204:8120/assets/login/phoneIcon.png"
                :icon-style="iconStyle"
                placeholder="请输入手机号"></wx-input>
    </div>
</template>
<style scope>
    .demo {
        margin-top: 52px;
        margin-left: 40px;
        margin-right: 40px;
    }
</style>
<script>
    import WxInput from './index'
    export default {
        data () {
            return {
                iconStyle: {
                    width: "32px",
                    height: "40px"
                }
            }
        },
        components: { WxInput }
    }
</script>
```
## demo
  
```html
<template>
    <div>
        <div>
            <wx-field 
                label="用户名" 
                placeholder="请输入用户名"
                type="text"
                :autofocus="false"
                :disabled="false"
                maxlength="20"
                width="750px"
                height="100px"
                v-model="password1"></wx-field>
            <wx-field 
                label="密码" 
                placeholder="请输入密码"
                type="password"
                width="750px"
                v-model="password2"
                height="100px"></wx-field>
            <wx-field 
                label="电话" 
                placeholder="请输入电话号码"
                type="tel"
                width="750px"
                v-model="password3"
                height="100px"></wx-field>
        </div>
        <div class="wrap-button">
            <wx-button class="submit" @wxClick="wxClickHandle">提交</wx-button>
        </div>
    </div>
</template>
<style type="text/css">
    .wrap-button {
        height: 300px;
        width: 750px;
        justify-content: center;
        align-items: center;
    }
</style>
<script>
    import { WxField, WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    // import WxField from 'weex-droplet-ui/packages/wx-field';
    export default {
        components: { WxField, WxButton },
        data () {
            return {
                password1: '',
                password2: '',
                password3: '',
            }
        },
        methods: {
            wxClickHandle () {
                const value = this.password1 + this.password2 + this.password3;
                modal.toast({
                    message: value
                });
            }
        }
    };
</script>
```
## demo
```html
<template>
    <div class="wx-demo">
        <wx-button 
          height="80px"
          width="450px"
          borderRadius="200px"
          textColor="#fff"
          textFontSize="32px"
          :disabled="false"
          :styles="{}"
          @wxClick="wxClickHandle">测试1</wx-button>
    </div>
</template>

<script>
    import { WxButton } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
      components: {
          WxButton 
      },
      created () {

      },
      methods: {
          wxClickHandle () {
            modal.toast({
                message: 'clicked'
            })
          }
        }
    }
</script>

```
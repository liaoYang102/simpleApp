## demo
  
```html
<template>
    <div>
        <wx-cell 
            text="文字描述" 
            icon=""
            width="750px"
            height="100px"
            textColor="#333"
            textFontSize="32px"、
            :hasArrow="true"
            @wxClick="handleClick"></wx-cell>
        <wx-cell 
            text="文字描述" 
            icon=""
            width="750px"
            height="100px"
            textColor="#333"
            textFontSize="32px"
            :hasArrow="true"
            @wxClick="handleClick"></wx-cell>
    </div>
</template>

<script>
    import { WxCell } from '../../index';
    const modal = weex.requireModule('modal');
    // import WxCell from 'weex-droplet-ui/packages/wx-cell';
    export default {
        components: { WxCell },
        methods: {
            handleClick () {
                modal.toast({
                    message: 'test'
                });
            }
        }
    };
</script>
```
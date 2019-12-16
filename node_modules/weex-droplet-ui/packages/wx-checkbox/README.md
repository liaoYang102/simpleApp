## demo

```html
<template>
    <div class="wx-demo">
        <wx-checkbox 
            text="查看合同" 
            :checked="checked" 
            align="left"
            @wxClick="handleClick">
        </wx-checkbox>
    </div>
</template>
<script>
    import { WxCheckbox } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxCheckbox,
        },
        data () {
            return {
                 checked: false
            }
        },
        methods: {
            handleClick (checked) {
                this.checked = checked;
            },
        }
    }
</script>

```
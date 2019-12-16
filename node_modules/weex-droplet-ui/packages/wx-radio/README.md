## demo

```html
<template>
    <div class="wx-demo">
        <wx-radio 
            :items="items"
            @wxChange="handleChange">
        </wx-radio>
    </div>
</template>
<style type="text/css">
    .wx-demo {
        margin-top: 100px;
        margin-left: 100px;
    }
</style>
<script>
    import { WxRadio } from '../../index';
    const modal = weex.requireModule('modal');
    export default {
        components: {
            WxRadio,
        },
        data () {
            return {
                 items: [
                    {label: '有公积金', value: '0', checked: true},
                    {label: '无公积金', value: '1', checked: false},
                 ]
            }
        },
        methods: {
            handleChange (item) {
                modal.toast({
                    message: item.label
                })
            },
        }
    }
</script>

```
<template>
    <div v-show="show">
        <div class="social-share" data-sites="weibo,qq,qzone,tencent"></div>
    </div>
</template>
<script>
import 'social-share.js/dist/css/share.min.css'
import share from 'social-share.js/dist/js/social-share.min.js'
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        open() {
            this.show = true;
        },
        close() {
            // this.show = false;
        }
    }
}
</script>

<style scoped>
div {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    top: 0;
    left: 0;
}
</style>


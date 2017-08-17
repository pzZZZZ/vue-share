<template>
    <div>
        <div class="social-share" :data-url="shareUrl" :data-disabled="shareDisabled" :data-title="shareTitle" :data-description="shareDescription" :data-sites="shareSites" :data-wechat-qrcode-title="shareWechatQrcodeTitle" :data-wechat-qrcode-helper="shareWechatQrcodeHelper"></div>
    </div>
</template>
<script>
import 'social-share.js/dist/css/share.min.css'
import 'social-share.js/dist/js/social-share.min.js'
export default {
    data() {
        return {
        }
    },
    props: {
        shareUrl: {
            type: [String],
            default: function () {
                return window.location.href;
            },
        },
        shareTitle: {
            type: [String, Number],
            default: function () {
                return document.title;
            },
        },
        shareDescription: {
            type: [String]
        },
        shareSites: {
            //启用的站点
            type: [Array],
        },
        shareDisabled: {
            type: [Array],
            default: function () {
                return []
            }
        },
        shareWechatQrcodeTitle: {
            //微信分享title文字
            type: [String],
            default: function () {
                return "微信扫一扫：分享"
            }
        },
        shareWechatQrcodeHelper: {
            //微信分享描述
            type: [String],
            default() {
                return `<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>`
            }
        }

    },
    methods: {

    },
    mounted() {
        // document.querySelector('.social-share1').share(this.config)
    }
}
</script>

<style scoped>
.social-share {
    display: block!important;
}
</style>


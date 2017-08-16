
// import {a} from './a/a.js';
import share from './a/components/a.vue'
const MyPlugin = {
    install: function (Vue, options) {
        Vue.myGlobalMethod = function () {
            console.log('running')
        }
        Vue.prototype.ajax = function () {
            console.log('this ajax ~~')
        };
        Vue.directive('my-directive', {
            bind(el, binding, vnode, oldVnode) {
                // 逻辑...
                console.log(el.innerHTML)
            }
        })
    }
};




export default MyPlugin;
export {a}
export {share}



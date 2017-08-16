import acom from './a.vue'
const a = {
    install: function (Vue, options) {
        let instance
        let act = {}
        instance = new (Vue.extend(acom))();
        document.body.appendChild(instance.$mount().$el)
        act.open = () => {
            instance.open()
        }
        act.close = () => {
            instance.close()
        }
        Vue.prototype.$a = act;
    }
}

export {
    a
}
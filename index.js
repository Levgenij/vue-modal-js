import ModalComponent from './modal.vue'

const Modal = {
    install: (Vue, options) => {
        Vue.component('modal', ModalComponent)

        Vue.mixin({
            created () {
                if (this.$options._componentTag === 'modal') {
                    Vue.modal = Vue.prototype.$modal = (data) => {
                        this.modal(data)
                    }
                }
            },
        })
    }
}

// register plugin if it is used via cdn or directly as a script tag
if (typeof window !== 'undefined' && window.Vue) {
    window.Modal = Modal
}

export default Modal

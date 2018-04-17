<script src="index.js"></script>
<template>
    <div>
        <sweet-modal ref="modal" :icon="icon" :title="title">
            <component :is="component" :data="data"></component>
            <div v-if="text" v-html="text"></div>
        </sweet-modal>
    </div>
</template>

<script>
  import { SweetModal } from 'sweet-modal-vue'

  export default {
    name: 'Modal',
    components: {'sweet-modal': SweetModal},
    data: function () {
      return {
        icon: '',
        title: '',
        data: '',
        component: '',
        text: '',
      }
    },
    methods: {
      modal: function (data) {
        if (!data) {
          return this.$refs.modal
        } else if (data === 'close') {
          return this.$refs.modal.close()
        } else if (typeof data === 'object') {
          if (data.icon) {
            this.icon = data.icon
          }
          if (data.title) {
            this.title = data.title
          }

          if (data.text) {
            this.text = data.text
          } else {
            this.component = data.component
            this.data = data.data
            this.text = ''
          }
        } else {
          this.component = false
          this.text = data
        }

        return this.$refs.modal.open()
      },
      open: function (data) {
          this.modal(data)
      }
    }
  }
</script>

## Usage

Modal extends <a target="_blank" href="http://sweet-modal-vue.adepto.as/"> sweet-modal-vue </a> functionalities. Also you can open your component in popup. <a target="_blank" href="http://sweet-modal-vue.adepto.as/">Demo </a>

Examples of using:

```bash
# install it via npm
npm install vue-modal-js --save
```
```javascript
// register the plugin on vue
import Modal from 'vue-modal-js'

Vue.use(Modal)

// add to your base template
<modal></modal>

```

```javascript
// simple modal
this.$modal('My message')

// configuring
this.$modal({icon:'warning',title: 'My custom title',text: 'My message'})

// Animated icon to show upon opening the modal.
// One of these values:
// - success
// - info
// - warning
// - error

// component to modal (you can specify props)
// include component
import MyComponent from './my-component.vue'
// or dynamic
	Vue.component('MyComponent', function (resolve, reject) {
		require(['./my-component.vue'], resolve)
	});

this.$modal({component: MyComponent, data: {name: userName, email: userEmail }})

// closing
this.$modal('close')
or
this.$modal.close()

```
 Also you can use it locally
 ```javascript
 // register the plugin on vue
import Modal from 'vue-modal-js/modal.vue'
 
    export default {
        components: {
            vueModal
        }
 
 // add to your base template
 <vue-modal ref="modal"></vue-modal>
 
 // use it
 this.$refs.modal.open('My message')
 ```
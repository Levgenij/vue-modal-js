
# Vue2 Modal JS

Vue2 Modal JS extends the functionalities of [sweet-modal-vue](http://sweet-modal-vue.adepto.as/). It allows you to open your components in a popup. [Demo](http://sweet-modal-vue.adepto.as/)

## Features

- **Simple Message Modals**: Display straightforward messages with ease.
- **Customizable Modals**: Tailor the appearance of modals with custom icons, titles, and messages.
- **Component Modals**: Open any Vue component within a modal, passing props and data as needed.
- **Flexible Modal Control**: Open and close modals programmatically with simple commands.
- **Local and Global Usage**: Use the modal plugin globally across your application or locally within specific components.

## Usage

### Installation

Install the package via npm:

```bash
npm install vue-modal-js --save
```

### Registering the Plugin

Register the plugin in your Vue project:

```javascript
import Vue from 'vue'
import Modal from 'vue-modal-js'

Vue.use(Modal)
```

Add the modal component to your base template:

```html
<modal></modal>
```

### Basic Usage

#### Simple Modal

Display a simple modal with a message:

```javascript
this.$modal('My message')
```

#### Configuring the Modal

Customize the modal with an icon, title, and message:

```javascript
this.$modal({
  icon: 'warning',
  title: 'My custom title',
  text: 'My message'
})
```

Available icon values:
- `success`
- `info`
- `warning`
- `error`

### Using a Component in the Modal

You can also open a custom component in the modal. Here are the steps:

#### Including a Component

Import the component:

```javascript
import MyComponent from './my-component.vue'
```

Or dynamically load the component:

```javascript
Vue.component('MyComponent', function (resolve, reject) {
  require(['./my-component.vue'], resolve)
})
```

Open the component in the modal and pass props:

```javascript
this.$modal({
  component: MyComponent,
  data: {
    name: userName,
    email: userEmail
  }
})
```

### Closing the Modal

Close the modal using one of the following methods:

```javascript
this.$modal('close')
// or
this.$modal.close()
```

### Using Locally

If you prefer to use the modal locally within a component, follow these steps:

#### Register the Plugin Locally

Import and register the modal component in your local component:

```javascript
import Modal from 'vue-modal-js/modal.vue'

export default {
  components: {
    vueModal: Modal
  }
}
```

Add the modal component to your template:

```html
<vue-modal ref="modal"></vue-modal>
```

#### Using the Modal Locally

Open the modal using the `ref`:

```javascript
this.$refs.modal.open('My message')
```

## Examples

### Simple Message Modal

```javascript
this.$modal('Hello, this is a simple message!')
```

### Custom Modal with Icon and Title

```javascript
this.$modal({
  icon: 'info',
  title: 'Information',
  text: 'This is a custom informational message.'
})
```

### Component Modal with Props

```javascript
import UserProfile from './UserProfile.vue'

this.$modal({
  component: UserProfile,
  data: {
    userId: 123
  }
})
```

### Closing a Modal Programmatically

```javascript
// Close the currently open modal
this.$modal('close')
// or
this.$modal.close()
```

### Using Locally within a Component

```javascript
import Vue from 'vue'
import Modal from 'vue-modal-js/modal.vue'

export default {
  components: {
    vueModal: Modal
  },
  methods: {
    openLocalModal() {
      this.$refs.modal.open('This is a locally used modal message.')
    }
  }
}
```

In your template:

```html
<vue-modal ref="modal"></vue-modal>
<button @click="openLocalModal">Open Local Modal</button>
```

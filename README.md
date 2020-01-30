# Vue-Modal

Create Reactive Vue Modals 

# Install
```
npm i @simpli/vue-modal
```

## Import
```typescript
import Vue from 'vue'
import VueModal from '@simpli/vue-modal'

Vue.use(VueModal)
```
On your Scss:
```scss
@import "~@simpli/vue-modal/scss/modal";
```

## Basic Usage
```html
<modal name="myModal">
  My Modal content
</modal>
```
On a Vue instance:
```typescript
this.$modal.open('myModal')
```
Outside a Vue instance:
```typescript
import {$modal} from '@simpli/vue-modal'

$modal.open('myModal')
```

## Reactive Visibility
```html
<a @click="message = 'hello'">Hi</a>
<modal v-model="message">{{ message }}</modal>
```
```typescript
data() {
  return {
    message: null
  }
}
```

## Other props
```html
<modal
  name="myModal"
  title="Modal Title"
  innerClass="aCssClassAppliedToTheModalWhiteFrame"
  effect="vueTransitionCssClass"
  backgroundEffect="vueTransitionCssClassForTheBackground"
  :closable="true"
  :closeOutside="true"
  @open="myOpenListener"
  @close="myCloseListener"
>
  {{ message }}
</modal>
```

## $modal Methods
```typescript
// opens the modal with a optional payload
$modal.open('modalName', { anyObject: 'as payload for the open event' })

// closes the modal
$modal.close('modalName')

// toggles the modal state, open-to-closed or closed-to-open
$modal.toggle('modalName', { anyObject: 'as payload for the open event' })

// closes all modals
$modal.closeAll()
```

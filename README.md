# out
VueJs directive to detect if element is clicked outside current Element

## Use

```js
import Vue from 'vue'
import directives from 'directive'

Vue.use(directives)

```

```html

<template>

  <div @click="isActive = !isActive" v-on="isActive">Toggle Show/Hide</div>

  <div v-show="isActive"> Toggleable content</div>

</template>

```
```js
<script>
  export default {
    data () {
      isActive: false
    },
  };
</script>
```

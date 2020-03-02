# out
VueJs directive to detect if element is clicked outside current Element

## Use

```js
import Vue from 'vue'
import directives from 'directive'

Vue.use(directives)

```

```js
<script>
  export default {
    data () {
      isActive: false
    },
  };
</script>

<template>
<div @click="isActive = !isActive" v-on="isActive">Toggle Show/Hide</div>
<div v-show="isActive"> Toggleable content</div>
</template>
```

# out
VueJs directive to detect if element is clicked outside current Element

## Use

```js
import Vue from 'vue'
import directives from 'directive'

Vue.use(directives)


<div @click="actionAcive = !actionAcive" v-on="actionActive">Toggle Show/Hide</div>
<div v-show="actionAcive"></div>
```

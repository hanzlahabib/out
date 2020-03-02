import directive from './out'

const plugin = {
    install(Vue) {
        Vue.directive('out', directive)
    },
    directive
}

export default plugin
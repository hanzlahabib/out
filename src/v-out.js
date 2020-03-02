const HAS_WINDOWS = typeof window !== 'undefined'

function bind(el, binding, vNode) {
    const handler = (e) => {
        if (!el.contains(e.target) && el !== e.target) {
            // and here is you toggle var. thats it
            vNode.context[binding.expression] = false
        }
    }
    el.out = handler
    document.addEventListener('click', handler)
}

function unbind(el, binding) {
    document.removeEventListener('click', el.out)
    el.out = null
}

const directive = {
    bind,
    unbind
}

export default HAS_WINDOWS ? directive : {}
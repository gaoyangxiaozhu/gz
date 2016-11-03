<template lang="html">
    <div class="duoshuo">

    </div>
</template>

<script>

import {
	loadScript
} from '../../lib/util'
export default {
    props:[ 'shortName', 'url', 'thread'],
    data () {
        return {}
    },
    computed: {},
    ready () {
        window.duoshuoQuery = {
            short_name: this.shortName
        }
        /* eslint-disable */
        loadScript('lib/duoshuo/index.js')
        .then(()=>{
            const url = this.url || window.location
            let container = this.$el
            console.log(container)
            console.log(typeof container)
            console.log(Object.prototype.toString.call(container))
            let el = document.createElement('div')
            el.setAttribute('data-thread-key', this.thread)
            el.setAttribute('data-url', url)
            container.innerHTML = ''
            container.appendChild(el)
            DUOSHUO.EmbedThread(el)
        })
        .catch((e) => {
            console.log(e.message)
        })
        // require(['../../lib/duoshuo'], () => {

        // })
        /* eslint-enable */
    },
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
</style>

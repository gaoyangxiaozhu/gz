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
            let url = this.url || window.location
            let thread = this.thread
            console.log(url, thread)
            let container = this.$el
            let el = document.createElement('div')
            el.setAttribute('data-thread-key', thread)
            el.setAttribute('data-url', url)
            container.innerHTML = ''
            DUOSHUO.EmbedThread(el)
            container.appendChild(el)
        })
        .catch((e) => {
            console.log(e)
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

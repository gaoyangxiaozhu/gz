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
        loadScript('http://static.duoshuo.com/embed.js')
        .then(()=>{
            let url = this.url || window.location
            let thread = this.thread
            let container = this.$el

            setTimeout(()=>{
                let el = document.createElement('div')
                el.setAttribute('data-thread-key', thread)
                el.setAttribute('data-url', url)
                container.innerHTML = ''
                DUOSHUO.EmbedThread(el)
                container.appendChild(el)
            }, 100)
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

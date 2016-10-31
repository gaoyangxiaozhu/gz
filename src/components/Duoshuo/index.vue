<template lang="html">
    <div class="duoshuo">

    </div>
</template>

<script>


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
        require(['../../lib/duoshuo'], () => {
            const url = this.url || window.location
            const container = this.$el
            const el = document.createElement('div')
            el.setAttribute('data-thread-key', this.thread)
            el.setAttribute('data-url', url)
            container.innerHTML = ''
            container.appendChild(el)

            DUOSHUO.EmbedThread(el)
        })
        /* eslint-enable */
    },
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
</style>

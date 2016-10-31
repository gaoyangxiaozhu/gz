<template lang="html">
    <section class="article-list">
        <article class="article-item" v-for="article in articles">
            <summary :article="article"></summary>
        </article>
    </section>
</template>
<script>

import Summary from '../Summary/'

export default {
    props:[ 'articles'],
    data () {
        return {}
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: { Summary }
}
</script>

<style lang="sass">
</style>

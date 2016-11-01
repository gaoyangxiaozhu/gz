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
.article-item{
    margin-bottom: 2.5rem;
    border-bottom: 1px solid #eef2f8;
}
</style>

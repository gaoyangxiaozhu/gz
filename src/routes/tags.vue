<template lang="html">
    <div class="main-content-wrap">
        <article-title-list :base="tag" :data="tags" v-if="!$loadingRouteData"></article-title-list>
        <loading v-if="$loadingRouteData"></loading>
    </div>
</template>

<script>
import {
    loadJSON
} from '../lib/util'

import ArticleTitleList from '../components/ArticleTitleList'
import Loading from '../components/Loading/'

export default {
    route:{
        data(transition){

            const dataURL = './async/tags.json'
            loadJSON(dataURL)
            .then((data) => {
                this.tags = data.data
                transition.next()
            })
            .catch((error) => {
                console.log(error.message)
                transition.next()
            })
        }
    },
    data () {
        return {
            tags:{}
        }
    },
    methods: {

    },
    components: {ArticleTitleList, Loading }
}
</script>

<style lang="sass">
</style>

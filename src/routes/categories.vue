<template lang="html">
    <div>
        <div class="main-content-wrap">
            <article-title-list base="category" :data="categories" v-if="!$loadingRouteData"></article-title-list>
            <loading v-if="$loadingRouteData"></loading>
        </div>
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
            const dataURL = './async/categories.json'
            loadJSON(dataURL)
            .then((data) => {
                this.categories = data.data
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
            categories:{}
        }
    },
    methods: {

    },
    components: {ArticleTitleList, Loading }
}
</script>

<style lang="sass">
</style>

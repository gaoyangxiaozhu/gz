<template lang="html">
    <div class="main-content-wrap">
        <article-list :articles="articleList" v-if="!$loadingRouteData"></article-list>
        <pagination :routename="home" :params="data.path" :cur="data._page" :total="data._totalPage" v-if="!$loadingRouteData"></pagination>
        <loading v-if="$loadingRouteData"></loading>
    </div>
</template>

<script>
import {
    loadJSON
} from '../lib/util'
import ArticleList from '../components/ArticleList'
import Loading from '../components/Loading/'
import Pagination from '../components/Pagination/'
export default {
    route:{
        data(transition){
            const page = this.$route.query.page || 0
            const tag = this.$route.params.tag
            const dataURL = `./async/tags/${tag}${ page > 1 ? '-' + page : ''}.json`
            loadJSON(dataURL)
            .then((data) => {
                this.data = data.data

                this.articleList = this.data.posts
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
            data: {},
            articleList:[]
        }
    },
    methods: {

    },
    components: {ArticleList, Loading, Pagination }
}
</script>

<style lang="sass">
</style>

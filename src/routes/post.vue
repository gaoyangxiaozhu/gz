<template lang="html">
    <div>
        <post :article="article" v-if="!$loadingRouteData"></post>
        <loading v-if="$loadingRouteData"></loading>
    </div>
</template>
<script>
import {
	loadJSON,
    pad
} from '../lib/util'

import Loading from '../components/Loading/'
import Post from '../components/Article/'
export default {
    route:{
        canActivate(transition){
            transition.next()
        },
        activate(transition){
            transition.next()
        },
        data(transition){

            const {
                year,
                month,
                day,
                name
            } = this.$route.params
            let dataURL = [parseInt(year), parseInt(month), parseInt(day), name].map((item) => typeof item === 'number' ? pad(item, 2) : item).join('/')

            dataURL = `./async/posts/${dataURL}.json`

            loadJSON(dataURL)
            .then((data) => {
                this.article = data.data
                transition.next()
            })
            .catch((error) => {
                console.log(`message: ${error.message || error}`)
                transition.next()
            })
        }
    },
    data () {
        return {
            article: {}
        }
    },
    created(){
    },
    computed: {},
    ready () {
    },
    attached () {},
    methods: {},
    components: { Loading, Post }
}
</script>

<style lang="sass">
</style>

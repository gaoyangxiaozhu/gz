<template lang="html">
    <div class="tree">
        <div class="tree-folder">
            <div class="tree-folder-header">
                <div class="tree-folder-name" @click="toggle">
                    <i class="fa" :class="{ 'fa-plus': !open, 'fa-minus': open}"></i>
                    <a v-link="">{{ data.name}}({{ data.count }})</a>
                </div>
                <div class="tree-folder-content" v-if="!isLoading" v-show="open">
                    <div class="tree-item" v-for="article in articles">
                        <a v-link="{ name: 'post', params: article.path }">{{ article.title }}</a>
                    </div>
                </div>
                <div class="tree-loader" v-if="isLoading">
                    <div class="tree-loading">
                        <i class="fa fa-spinner fa-pulse"></i>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import {
    loadJSON
} from '../../lib/util'

export default {
    props:['base', 'data'],
    data () {
        return {
            isLoading: false,
            open: false,
            articles: []
        }
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {
        toggle(){
            if(this.open){
                this.open = false
            }
            if(!this.open){
                if(this.articles.length){
                    this.open = !this.open
                }else{
                    const dataURL = `./async/${ this.base == 'category'?'categories':'tags'}/${this.data.name}.json`

                    this.isLoading = true
                    loadJSON(dataURL)
                    .then((data) => {
                        this.articles = data.data.posts
                        this.isLoading = false
                        this.open = true
                    })
                    .catch((error) => {
                        console.log(error.message)
                        this.isLoading = false

                    })
                }
            }
        }
    },
    components: {}
}
</script>

<style lang="css">
</style>

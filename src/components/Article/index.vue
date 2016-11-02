<template lang="html">
    <div class="post-main main-content-wrap">
        <article class="post yue" v-if="article">
            <div class="post-header">
                <h1 class="post-title">
                    {{ article.title }}
                </h1>
                <div class="post-meta">
                    <time itemprop="articlePublished" datetime="{{ time }}"> {{ time }}</time>
                    <span>in</span>
                    <a v-link="{name: 'category', params: { name: category.name} }" v-for="category in article.categories">
                        {{ $index > 0 ? category.name+', ': category.name }}
                    </a>
                </div>
            </div>
            <div class="post-content">
                {{{ article.content }}}
            </div>
            <div class="post-comment">
                <duoshuo v-if="useDuoshuo" :url="article.url" :thread="thread" :short-name="duoshuo"></duoshuo>
            </div>
        </article>
    </div>
</template>

<script>

import '../../lib/yue/yue.css'
import Duoshuo from '../Duoshuo/'
import {
    getConfig
} from '../../lib/util'

export default {
    props: [ 'article' ],
    data () {
        return {
        }
    },
    computed: {
        time: function(){
            if(this.article && 'path' in this.article){
                return `${this.article.path.month}月 ${this.article.path.day}, ${this.article.path.year}`
            }
            return ''
        }
    },
    created(){
        this.useDuoshuo = this.getConfig('theme/duoshuo')
        this.duoshuo = this.useDuoshuo
    },
    ready () {},
    attached () {},
    methods: {
        getConfig
    },
    components: { Duoshuo }
}
</script>

<style lang="sass">
</style>

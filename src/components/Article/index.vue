<template lang="html">
    <div class="post-main main-content-wrap">
        <article class="post" v-if="article">
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
            <div class="post-content yue">
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
@import "../../assets/css/variable";
.post-main{
    .post{
        /* copy from 天壤'blog */
        .highlight {
            overflow: auto;
            .comment, .title {
              color: #8d8687
            }
            .variable, .attribute, .tag, .regexp, .ruby .constant, .xml .tag .title, .xml .pi, .xml .doctype, .html .doctype, .css .id, .css .class, .css .pseudo {
              color: #ef6155
            }
            .number, .preprocessor, .built_in, .literal, .params, .constant {
              color: #f99b15
            }
            .ruby .class .title, .css .rules .attribute {
              color: #fec418
            }
            .string, .value, .inheritance, .header, .ruby .symbol, .xml .cdata {
              color: #48b685
            }
            .css .hexcolor {
              color: #5bc4bf
            }
            .function, .python .decorator, .python .title, .ruby .function .title, .ruby .title .keyword, .perl .sub, .javascript .title, .coffeescript .title {
              color: #06b6ef
            }
            .keyword, .javascript .function {
              color: #815ba4
            }
            .coffeescript .javascript, .javascript .xml, .tex .formula, .xml .javascript, .xml .vbscript, .xml .css, .xml .cdata {
              opacity: .5
            }
        }
        /* copy from 天壤's blog' */
        .post-meta{
            &,
            & a{
                color: $text-muted-color;
                font-size: 1.25rem;
            }
        }
        .post-content{
            text-align:justify;
            text-justify:inter-ideograph;
        }
    }
}
</style>

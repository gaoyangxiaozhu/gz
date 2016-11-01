<template lang="html">
    <div class="summary">
        <div class="summary-header">
            <h1 class="summary-header-title">
                <a v-link="{ name: 'post', params: article.path }"> {{ article.title }}</a>
            </h1>
        </div>
        <div class="summary-meta">
            <time itemprop="articlePublished" datetime="{{ time }}"> {{ time }}</time>
            <span>in</span>

            <a v-link="{name: 'category', params: { name: category.name } }" v-for="category in article.categories">
                {{ $index > 0 ? category.name+', ': category.name }}
            </a>
        </div>
        <div class="summary-exceprt">
            {{{ article.content }}}
        </div>
        <div class="summary-read-more">
            <a v-link="{ name: 'post', params: article.path }">read more</a>
        </div>
    </div>
</template>

<script>

export default {
    props: [ 'article' ],
    data () {
        return {
        }
    },
    computed: {},
    ready () {},
    created(){
        this.time = `${this.article.path.month}月${this.article.path.day}, ${this.article.path.year}`
    },
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
@import "../../assets/css/variable";

.summary{
    > .summary-header{
        .summary-header-title{
            color: $base-title-link-color;
            a{
                color: $base-title-link-color;
                &:hover{
                    color: darken($base-title-link-color, 10%);
                }
            }
        }
    }
    > .summary-meta{
        color: $text-muted-color;
        font-size: 1.25rem;
        time,
        span,
        a{
             color: $text-muted-color;
             &:hover{
                 color: darken($base-title-link-color, 5%);
             }
         }
    }

}
</style>

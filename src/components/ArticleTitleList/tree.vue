<template lang="html">
    <div class="tree">
        <div class="tree-folder" :class="{ 'open' : open }">
            <div class="tree-folder--header">
                <div class="tree-folder--name" >
                    <h4>
                        <i class="fa" :class="{ 'fa-plus': !open, 'fa-minus': open}" @click="toggle"></i>
                        <a v-link="{ name: base, params: {name: data.name } }">{{ data.name}}({{ data.count }})</a>
                    </h4>

                </div>
            </div>
            <div class="tree-folder--content" v-if="!isLoading" v-show="open">
                <div class="tree-item" v-for="article in articles">
                    <a v-link="{ name: 'post', params: article.path }">{{ article.title }}</a>
                    <span class="meta-font-style"> - {{ article.path.month }}月, {{ article.path.day}} &nbsp;{{ article.path.year}}</span>
                </div>
            </div>
            <div class="tree-loader" v-if="isLoading">
                <div class="tree-loading">
                    <i class="fa fa-spinner fa-pulse"></i>
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
                return
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

<style lang="sass" scoped>
@import "../../assets/css/variable";
$tree-bd-color: #9BB29D;

.tree,
.tree-folder,
.tree-folder--content{
    display: block;
    position: relative;
}

.tree{

    margin-bottom: 1rem;
    h4{
        font-weight: 300;
        i{
            cursor: pointer;
        }
    }
    a{
        color: $base-title-link-color;
        &:hover{
            color: $base-title-hover-color;
        }
    }


    .tree-folder{
        height: 100%;
        &.open{
            &:before{
                content: '';
                display: inline-block;
                width: 0;
                height: calc(100% - 29px - 15px);

                position: absolute;
                top: 29px;
                left: 6px;
                border: 1px solid $tree-bd-color;
            }
            .tree-folder--content{

                left: 2rem;

                .tree-item{
                    position: relative;
                    &:before{
                        content: '';
                        display: inline-block;

                        position: absolute;
                        width: 1rem;
                        top: 13px;
                        left: -16px;

                        border: 1px solid $tree-bd-color;
                    }
                }
            }
        }

    }


}
</style>

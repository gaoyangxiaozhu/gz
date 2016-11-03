<template lang="html">
    <div class="header">
        <header>
            <span class="header--btn">
                <i class="fa fa-bars" @click="toggle"></i>
            </span>
            <h1 class="header-title">
                <a v-link="{ name: 'home' }">{{ title }}</a>
            </h1>
        </header>
    </div>
</template>

<script>
import {
    getConfig
} from '../../lib/util'

export default {
    data () {
        return {}
    },
    computed: {},
    created(){
        this.title = getConfig('global/title')
    },
    ready () {},
    attached () {},
    methods: {
        toggle(){
            this.$parent.toggleSide()
        }
    },
    components: {}
}
</script>

<style lang="sass">
@import "../../assets/css/variable";

.header{
    position: relative;
    padding: 0 20px;
    color: $base-title-color;
    height: $default-navbar-height;

    overflow: hidden;

    &--btn{
        display: inline-block;
        height: $default-navbar-height;
        line-height: $default-navbar-height;
        font-size: 2rem;

        color: #7A7E83;
        cursor: pointer;
        float: left;

    }
    h1{
        float: right;
        text-align: center;
        height: 100%;
        line-height: $default-navbar-height;
        font-size: 1.5rem;
        padding: 0;
        width: calc(100% - 60px);
        a{
            color: #7A7E83;
            &:hover{
                color: darken(#7A7E83, 10%);
            }
        }
    }



}
</style>

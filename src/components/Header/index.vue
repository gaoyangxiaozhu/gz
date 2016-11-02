<template lang="html">
    <div class="header">
        <header>
            <span class="header--btn">
                <i class="fa fa-bars" @click="toggle"></i>
            </span>
            <h1 class="header-title">
                {{ title }}
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
            this.$parent.showSide = !this.$parent.showSide
        }
    },
    components: {}
}
</script>

<style lang="sass" scoped>
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

        cursor: pointer;
        float: left;

    }
    h1{
        float: right;
        text-align: center;
        height: 100%;
        line-height: $default-navbar-height;
        padding: 0;
        width: calc(100% - 60px);
    }



}
</style>

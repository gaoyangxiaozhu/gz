<template lang="html">
    <div class="header">

        <a class="header--btn">
            <i class="fa fa-bars" @click="toggle"></i>
        </a>
        <h1 class="header-title">
            <a v-link="{ name: 'home' }">{{ title }}</a>
        </h1>

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
    position: absolute;
    
    width: 100%;
    height: $default-navbar-height;

    color: $base-title-color;

    transform: translate(0, 0);

    overflow: hidden;
    &--btn{
        position: absolute;
        left: 20px;
        height: $default-navbar-height;
        line-height: $default-navbar-height;
        font-size: 2rem;


        color: #7A7E83;
        &:hover,
        &:active{
            color: #7A7E83;
        }
        cursor: pointer;
    }
    h1{
        text-align: center;
        height: $default-navbar-height;
        line-height: $default-navbar-height;
        font-size: 1.5rem;
        padding: 0;
        a{
            color: #7A7E83;
            &:hover{
                color: darken(#7A7E83, 10%);
            }
        }
    }



}
</style>

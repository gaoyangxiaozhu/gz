<template lang="html">
    <div :class="{'show-side': showSide }">
        <div id="header">
            <myhead></myhead>
        </div>
        <div id="sidebar">
            <sidebar></sidebar>
        </div>
        <div id="main">
            <router-view></router-view>
            <div id="footer" class="main-content-wrap">
                <foot></foot>
            </div>
        </div>

        <div id="onside" @click="toggleSide" :class="{ 'right': !showSide }">

            <i class="fa" :class="{ 'fa-desktop' : showSide, 'fa-bars' : !showSide}"></i>
        </div>
        <div id="mask" @click="toggleSide">
        </div>
    </div>
</template>

<script>
import Foot from './Footer/'
import Sidebar from './SideBar/'
import Myhead from './Header/'

export default {
    created(){},
    data () {
        return {
            showSide : false
        }
    },
    computed: {
    },
    ready () {
        const pageWidth = document.body.clientWidth || document.documentElement.clientWidth
        this.showSide = parseInt(pageWidth) >= 768 ? true : false

    },
    methods: {
        toggleSide(e) {
            this.showSide = !this.showSide
        },
    },
    components: { Foot, Sidebar, Myhead }
}
</script>

<style lang="sass">
@import "../assets/css/variable";

#header{
    display: block;
    height: 55px;
    top: 0;
    border: 1px solid #eef2f8;
    z-index: 9999;
    @media only screen and (min-width: #{$screen-sm-min}){
        display: none;
    }
}
#main{

    padding-top: 70px;
    display: block;
    width: 100%;

    transform-origin: left;
    transition: transform .25s ease-in-out;


    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        float: right;
        width: calc(100% - #{$default-md-sidebar-width});
        padding-top: 30px;
        transform : translateX(-#{$default-md-sidebar-width});
    }
    @media only screen and (min-width: #{$screen-md-min}){
        float: right;
        width: calc(100% - #{$default-lg-sidebar-width});
        transform : translateX(-#{$default-lg-sidebar-width});
        padding-top: 30px;
    }



}
.main-content-wrap{

    display: block;

    width: 750px;
    margin: auto;

    padding: 0 20px;


}

#sidebar{
    position: fixed;
    top: 0;
    height: 100%;
    overflow-y: auto;

    text-align: center;
    font-size: 1.6rem;
    background-color: #FFFFFF; //#B6B6B6

    padding: 0 10px;

    z-index: 9999;


    transform-origin: right;
    transition: transform .25s ease-in-out;

    //default
    transform: translateX(-#{$default-sidebar-width});
    width: $default-sidebar-width;

    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        transform: translateX(-#{$default-md-sidebar-width});
        width: $default-md-sidebar-width;
    }

    @media only screen and (min-width: #{$screen-md-min}){
        transform: translateX(-#{$default-lg-sidebar-width});
        width: $default-lg-sidebar-width;
    }


}
#onside{

    position: absolute;

    top: 30px;
    left: 200px;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.9;

    text-align: center;
    font-size: 2rem;

    color: #626262;
    z-index: 9999;

    cursor: pointer;

    //default not show
    display: none;


    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        display: block;
        left: 70px;
        &.right{
            left: calc(100% - #{$default-md-sidebar-width} + 30px);
        }
    }

    @media only screen and (min-width: #{$screen-md-min}){
        display: block;
        &.right{
            left: calc(100% - #{$default-lg-sidebar-width});
        }
    }

}
.show-side{
    #sidebar{
        transform: translateX(0px);
    }
    #main{
        transform: translateX(#{$default-sidebar-width});
    }

    @media only screen and (max-width: #{$screen-sm-min}){
        #mask{
            top: 0;
            opacity: 0.6;
            pointer-events: all;
        }
    }

    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        #sidebar,
        #main{
            transform : translateX(0);
        }
    }
    @media only screen and (min-width: #{$screen-md-min}){
        #sidebar,
        #main{
            transform: translateX(0);
        }

    }


}
#footer{
    color: #9eabb3;
    font-size: 1.4rem;

    margin-top: 30px;

    text-align: center;
}
#mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;

    pointer-events: none;
}
</style>

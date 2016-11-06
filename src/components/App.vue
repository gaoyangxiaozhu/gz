<template lang="html">
    <div v-cloak>
        <div id="header" v-bind:style="headStyle">
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

        <div id="onside" @click.stop="toggleSide" :class="{ 'right': !showSide }">
            <i class="fa" :class="{ 'fa-desktop' : showSide, 'fa-bars' : !showSide}"></i>
        </div>
        <div id="mask" @click.stop="toggleSide">
        </div>
    </div>
</template>

<script>
import Foot from './Footer/'
import Sidebar from './SideBar/'
import Myhead from './Header/'

const transformList = [
    'WebkitTransform',
    'transform',
    'MozTransform',
    'MsTransform',
    'oTransform'
]
export default {
    data () {
        return {
            showSide : false,
            headStyle: {}
        }
    },
    computed: {
    },
    created () {
        const pageWidth = document.body.clientWidth || document.documentElement.clientWidth

        if(parseInt(pageWidth) >= 768) this.toggleSide()

        window.addEventListener('scroll', (event) => {
            const toTop = parseInt(document.documentElement.scrollTop || document.body.scrollTop)
            if(!this.showSide){
                if(toTop > 45){
                    transformList.forEach((name) => {

                        this.headStyle[name] = 'translate3d(0, -55px, 0)'
                    })
                }else{
                    transformList.forEach((name) => {
                        this.headStyle[name] = ''
                    })
                }
                // trigger dom  view update
                this.headStyle = Object.assign({}, this.headStyle)
            }
        })
    },
    ready(){
        // set slider `indicate` effect when client width > 992
        // in other words, make `Home, Categories, Tags` change effect in sidebar when client width > 992
        const selfPageBtn = document.querySelector('.sidebar-buttons.self-page')
        const btnList = [].slice.call(selfPageBtn.querySelectorAll('li'), 0)
        let slider = selfPageBtn.querySelector('li.slider')

        selfPageBtn.style.position = 'relative'
        selfPageBtn.addEventListener('click', (event) => {
            const target = event.target
            btnList.forEach((item, index) => {
                if(target == item || target.parentNode == item || (target.parentNode && target.parentNode.parentNode == item)){
                    transformList.forEach((name) => {
                        slider['style'][name] = `translate(0, ${item.offsetTop}px)`
                    })
                    if(parseInt(document.body.clientWidth || document.documentElement.clientWidth) <  768){
                        this.toggleSide()
                    }
                }
            })
            event.preventDefault()
            event.stopPropagation()
        })
        //init sider position
        const activeLink = selfPageBtn.querySelector('li.active') || selfPageBtn.querySelector('li')
        transformList.forEach((name) => {
            slider['style'][name] = `translate(0, ${activeLink.offsetTop}px)`
        })

    },
    methods: {
        toggleSide(e) {
            this.showSide = !this.showSide
            if(this.showSide){
                document.body.classList ? document.body.classList.add('show-side') : document.body.className='show-side'
            }else{
                document.body.classList ? document.body.classList.remove('show-side') : document.body.className='show-side'

            }
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
    width: 100%;
    overflow: hidden;

    position: fixed;
    top: 0;

    border: 1px solid #eef2f8;
    background-color: #FFFFFF;

    z-index:2;
    transition: all .2s cubic-bezier(0.4, 0, 0.2, 1);
    @media only screen and (min-width: #{$screen-sm-min}){
        display: none;
    }
}
#main{
    position: relative;
    padding-top: 70px;
    display: block;
    width: 100%;
    min-height: 100%;
    transition: left .2s cubic-bezier(0.4, 0, 0.2, 1);

    @media only screen and (max-width: #{$screen-sm-min}){
        overflow-x: hidden;
    }
    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){

        float: right;
        width: calc(100% - #{$default-md-sidebar-width});
        padding-top: 30px;
        left: -$default-md-sidebar-width;

    }
    @media only screen and (min-width: #{$screen-md-min}){
        float: right;
        width: calc(100% - #{$default-lg-sidebar-width});
        padding-top: 30px;
        left: -$default-lg-sidebar-width;
    }
}

#sidebar{
    position: fixed;
    top: 0;
    height: 100%;
    overflow: auto;

    text-align: center;
    font-size: 1.6rem;
    background-color: #FFFFFF; //#B6B6B6

    padding: 0 0px;

    transition: left .2s cubic-bezier(0.4, 0, 0.2, 1);

    z-index: 3;

    //default
    left: -$default-sidebar-width;
    width: $default-sidebar-width;

    transform: translateZ(0);

    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        padding: 0 10px;

        left: -$default-md-sidebar-width;
        width: $default-md-sidebar-width;
    }

    @media only screen and (min-width: #{$screen-md-min}){
        left: 0;
        padding: 0 10px;

        border-right: 1px solid $base-bd-color;

        left: -$default-lg-sidebar-width;
        width: $default-lg-sidebar-width;
    }


}
#onside{

    //default not show
    display: none;

    @media only screen and (min-width: #{$screen-sm-min}){
        position: fixed;

        top: 30px;
        left: 200px;

        width: 40px;
        height: 40px;
        border-radius: 50%;
        opacity: 0.9;

        text-align: center;
        font-size: 2rem;

        color: #626262;
        z-index: -1;

        cursor: pointer;
    }
    @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
        z-index: 4;
        display: block;
        left: 40px;
        top: 15px;
        &.right{
            left: calc(100% - #{$default-md-sidebar-width} + 30px);
        }
    }

    @media only screen and (min-width: #{$screen-md-min}){
        z-index:4;
        display: block;
        &.right{
            left: calc(100% - #{$default-lg-sidebar-width});
        }
    }

}
.show-side{
    #sidebar{
        left: 0;
    }
    #header,
    #main{
        left: $default-sidebar-width;
    }
    #mask{
        opacity: 0.3;
        pointer-events: all;
        z-index:2;
    }

    @media only screen and (min-width: #{$screen-sm-min}){
        #mask{
            display: none;
        }
        #main{
            left: 0;
        }
    }
    @media only screen and (min-width: #{$screen-md-min}){
        #main{
            left: 0;
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
    top: 0;
    width: 100%;
    height: 100%;

    z-index:0;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
    background-color: #000;
    opacity: 0;


    pointer-events: none;

    @media only screen and (min-width: #{screen-sm-min}){
        display: none;
    }
}
</style>

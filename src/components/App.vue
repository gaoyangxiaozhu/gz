<template lang="html">
    <div>
        <div id="sidebar" :style="sideStyle">
            <sidebar></sidebar>
        </div>
        <div id="main" :style="mainStyle">
            <router-view></router-view>
        </div>
        <div id="footer">
            <foot></foot>
        </div>
    </div>
</template>

<script>
import Foot from './Footer/'
import Sidebar from './SideBar/'

function changeStyle(show){
    let obj = {}

    const transform = [
        'WebkitTransform',
        'transform',
        'MozTransform',
        'MsTransform',
        'oTransform'
    ]
    transform.forEach((name) => {
        obj[name] = show ? 'translateX(-240px)' : 'translateX(0px)'
    })
    return obj
}
export default {
    created(){},
    data () {
        return {
            showSide : false,
            sideStyle: {},
            mainStyle: {}
        }
    },
    computed: {
        sideStyle: function(){
            return changeStyle(this.showSide)
        },
        mainStyle: function(){
            return changeStyle(this.showSide)
        }
    },
    ready () {
    },
    methods: {

        showSide(e) {
            this.showSide = true
        },
        hideSide(e){
            this.showSide = false
        }
    },
    components: { Foot, Sidebar }
}
</script>

<style lang="sass">
@import "../assets/css/variable";

#main{
    margin-left: 250px;
    transform-origin: left;
    transition: transform .25s ease-in-out;

}
.main-content-wrap{
    display: block;

    width: 750px;
    margin: auto;

    padding: 0 20px;
}

#sidebar{
    position: fixed;
    height: 100%;
    overflow-y: auto;
    width: 240px;

    text-align: center;
    font-size: 1.6rem;
    background: #FFFFF; //#B6B6B6

    padding: 0 10px;

    transform-origin: right;
    transition: transform .25s ease-in-out;

}
</style>

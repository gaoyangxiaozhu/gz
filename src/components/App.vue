<template lang="html">
    <div>
        <div id="sidebar">
            <sidebar></sidebar>
        </div>
        <div id="main">
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

export default {
    created(){},
    data () {
        return {}
    },
    computed: {},
    ready () {},
    methods: {

    },
    components: { Foot, Sidebar }
}
</script>

<style lang="css">
</style>

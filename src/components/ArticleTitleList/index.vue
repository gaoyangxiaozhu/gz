<template lang="html">
    <div class="main-content-wrap">
        <div>
            <a v-link="{ name: base, params: { name: item.name } }" v-for="item in data" class="btn purple-link"> {{ item.name }}</a>
        </div>
        <div class="content">
            <div  v-for="item in data">
                <tree :base="base" :data="item"></tree>
            </div>
        </div>
    </div>
</template>

<script>
import Tree from './tree.vue'
export default {
    props:['base', 'data'],
    data () {
        return {

        }
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: { Tree }
}
</script>

<style lang="sass" scoped>
@import "../../assets/css/variable";

.purple-link{
    border: 1px solid $purple-color !important;
}
.content{
    margin-top: 1.5rem;
}
</style>

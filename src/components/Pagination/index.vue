<template lang="html">
    <div class="pagination">
   <div v-if="cur > 1" class="text-center prev active">
     <a v-link="{ name: routename, params: params, query: { page: parseInt(cur) - 1 } }" class="link-title">
         <i class="fa fa-angle-left icon-mr"></i>
         <span>Prev Page</span>
     </a>
   </div>
   <div v-if="cur < total" class="text-center next active">
     <a v-link="{ name: routename, params: params, query: { page: parseInt(cur) + 1 } }" class="link-title">
         <span>Next Page</span>
         <i class="fa fa-angle-right icon-ml"></i>
     </a>
   </div>
 </div>
</template>

<script>
export default {
    props: ['routename', 'params', 'cur', 'total'],
    data () {
        return {

        }
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
</style>

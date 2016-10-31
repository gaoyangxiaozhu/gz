<template lang="html">
    <div class="footer">
        Copyrights © {{ new Date().getFullYear()}}  {{ getConfig('global/author') }}. All Rights Reserved.
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
    ready () {},
    attached () {},
    methods: {
        getConfig
    },
    components: {}
}
</script>

<style lang="sass">
</style>

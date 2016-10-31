<template lang="html">
    <div class="sidebar">
        <nav class="sidebar-nav">
            <div class="sidevar-nav--profile">
                <div class="sidebar-nav--avator">
                    <img class="avator" alt="" :src="getConfig('theme/avator')"/>
                </div>
                <p class="author">
                    {{ author }}
                </p>
                <p class="title">
                    {{ title }}
                </p>
                <p class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
            <ul class="sidebar-buttons">
                <li v-for="button in buttonsmap">
                    <a v-link="{ name: button.routename }">{{ button.name}}</a>
                </li>
            </ul>
            <ul class="sibebar-buttons social">
                <li v-for="item in social" class="social-item">
                    <a href="{{ item.type === 'email' ? 'mailto:' + item.url : item.url }}" class="{{ item.type }}"> {{ item.type }}</a>
                </li>
            </ul>
            <ul class="sibebar-buttons friends">
                <li v-for="friend in friends" class="friend-item">
                    <a title="{{ friend.name }}" href="{{ friend.url }}">{{ friend.name }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

import {
    getConfig
} from '../../lib/util'

export default {
    data () {
        return {

        }
    },
    computed: {},
    created(){
        this.author = getConfig('global/author')
        this.title = getConfig('global/title')
        this.subTitle = getConfig('global/subtitle')
        this.buttonsmap = [
            {
                name: 'home',
                routename: 'home'
            },
            {
                name: 'categories',
                routename: 'categories'
            },
            {
                name: 'tags',
                routename: 'tags'
            }
        ]
        this.social = getConfig('theme/social')
        this.friends =  getConfig('theme/friends')

    },
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

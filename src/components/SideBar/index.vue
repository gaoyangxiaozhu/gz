<template lang="html">
    <div class="sidebar">

        <nav class="sidebar-nav nav">
            <div class="sidebar-nav--profile">
                <div class="sidebar-nav--avatar">
                    <img class="avatar" alt="" :src="getConfig('theme/avatar')"/>
                </div>
                <a class="author" href="{{ aboutme }}">
                    {{ author }}
                </a>
                <p class="title">
                    {{ title }}
                </p>
                <p class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
            <ul class="sidebar-buttons self-page">
                <li class="slider"></li>
                <li :class="{ 'active': $route.name == button.routename }" v-for="button in buttonsmap">
                    <a v-link="{ name: button.routename }">
                        <i class="fa {{ button.iconclass }} sidebar-buttons--icon"></i>
                        <span class="sidebar-buttons--desc">{{ button.name }}</span>
                    </a>
                </li>
            </ul>

            <ul class="sidebar-buttons friends">
                <li v-for="friend in friends" class="friend-item">
                    <a title="{{ friend.name }}" href="{{ friend.url }}">{{ friend.name }}</a>
                </li>
            </ul>
            <ul class="sidebar-buttons social">
                <li v-for="item in social" class="social-item">
                    <a href="{{ item.type === 'email' ? 'mailto:' + item.url : item.url }}">
                        <i class="fa fa-{{ item.type }}"></i>
                    </a>
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
        this.aboutme = getConfig('global/aboutme')
        this.title = getConfig('global/title')
        this.subtitle = getConfig('global/subtitle')
        this.buttonsmap = [
            {
                name: '主页',
                routename: 'home',
                iconclass: 'fa-home'
            },
            {
                name: '分类',
                routename: 'categories',
                iconclass: 'fa-bookmark'
            },
            {
                name: '标签',
                routename: 'tags',
                iconclass: 'fa-tags'
            }
        ]
        this.social = getConfig('theme/social').map((item) => {
            switch (item.type) {
            case 'rss':
            case 'atom':
                item.type = 'rss'
                break
            case 'email':
            case 'envelope':
                item.type = 'envelope'
                break
            }
            return item
        })
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
@import '../../assets/css/variable';
.sidebar{
    .sidebar-nav{
        &--profile{
            .subtitle{
                font-family: 'gooddog';
            },

            .author{
                font-size: 1.9rem;
                font-weight: 400px;

                display: inline-block;
            }
            .title{
                font-size: 1.4rem;
                margin-bottom: 4px;
            }
            .subtitle{
                font-size: 1.4rem;
                margin: 0;
            }
            @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
                .author{
                    font-size: 1.8rem;
                }
                .title{
                    font-size: 1.3rem;

                }
                .subtitle{
                    font-size: 1.3rem;
                }
            }
        }
        &--avatar{
            img.avatar{
                display: block;
                height: 100px;
                width: 100px;
                border-radius: 50px;
                margin: auto;
            }
            padding-top: 60px;
            overflow: hidden;
        }
    }
    .sidebar-buttons{
        position: relative;
        padding: 0 20px;
        a{
            color: #626262;
            transition: all .2s ease-in-out;
            &:hover{
                color: darken(#626262, 10%);
            }
        }
        &.self-page {
            margin-top: 2rem;
            padding: 0;
            .slider{
                display: block;

                position: absolute;
                top: 0px;
                left: 0px;

                height: 27px;
                width: 100%;

                // background-color: rgba(176, 176, 176, 0.72);
                background-color: transparent;
                z-index: -1;
                &:before{
                    content: '';
                    display: inline-block;
                }
                @media only screen and (min-width: #{$screen-sm-min}){
                    transition: transform .15s ease-in-out;
                    background-color: rgba(176, 176, 176, 0.72);
                }
            }
        }

        @media only screen and (min-width: #{$screen-md-min}){
            &.self-page{
                padding: 0 20px;

                .slider{
                    left: 60px;
                    height: 6px;
                    width: 6px;

                    background-color: transparent;

                    z-index: 0;
                    &:before{
                        content: '';
                        display: inline-block;

                        border-left: 5px solid #626262;
                        border-top: 5px solid transparent;
                        border-bottom: 5px solid transparent;
                        border-right: 5px solid transparent;
                    }
                }

            }
        }
        @media only screen and (max-width: #{$screen-md-min}) and (min-width: #{$screen-sm-min}){
            &--icon{
                font-size: 1.8rem;
            }
            &--desc{
                display: none;
            }
            &.friends{
                display: none;
            }
            &.social{
                padding: 0;
                li{
                    margin-left: 0;
                    width: 100%;
                }
            }
        }


    }
    .social{
        padding: 0 2rem;
        &:before,
        &:after{
            content: '';
            display: table;
            visibility: hidden;
            height: 0;

        }
        &:after{
            clear: both;
        }
        .social-item{
            float: left;
            margin-left: 0.5rem;
            margin-bottom: 1rem;
            &:first-child{
                margin-left: 14.5px;
                @media only screen and (min-width: #{$screen-sm-min}){
                    margin-left: 3px;
                }
            };

            > a{
                display: inline-block;

                height: 36px;
                line-height: 36px;
                width: 36px;

                border-radius: 6px;
                border: 1px solid transparent;

                font-size: 2rem;

                @media only screen and (min-width: #{$screen-sm-min}){
                    height: 40px;
                    line-height: 40px;
                    width: 40px;

                    border: 1px solid $base-bd-color;

                }
            }
        }
    }
}
</style>

export default function(router){
    router.map({
        '/':{
            name: 'home',
            component: require('./routes/home.vue')
        },
        '/post/:year/:month/:day/:name':{
            name: 'post',
            component: require('./routes/post.vue')
        },
        '/categories':{
            name: 'categories',
            component: require('./routes/categories.vue')
        },
        '/tags':{
            name: 'tags',
            component: require('./routes/tags.vue')
        },
        '/category/:category':{
            name: 'category',
            component: require('./routes/category.vue')
        },
        '/tag/:tag':{
            name: 'tag',
            component: require('./routes/tag.vue')
        }
    })
}

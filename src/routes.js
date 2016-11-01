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
        '/category/:name':{
            name: 'category',
            component: require('./routes/category.vue')
        },
        '/tag/:name':{
            name: 'tag',
            component: require('./routes/tag.vue')
        }
    })
    router.beforeEach(function(transition){
        // const route = transition.to
        // const rawURL = decodeURI(route.path)
        // if(history.replaceState){
        //     history.replaceState('','', rawURL)
        // }

        transition.next()
    })
}

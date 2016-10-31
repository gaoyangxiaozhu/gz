<template lang="html">
    <div class="loading">
         <span></span>
         <span></span>
         <span></span>
         <span>LOADING</span>
     </div>

</template>

<script>
export default {
    data () {
        return {}
    },
    computed: {},
    ready () {},
    attached () {},
    methods: {},
    components: {}
}
</script>

<style lang="sass">
.loading{
	width: 200px;
	height: 200px;
    text-align: center;

    position: relative;
    left: 40%;

	& span {
		display: block;
        border-radius: 50%;

		border: 1px solid #9E9595;
		position: absolute;


		&:first-child {
			width: 100%;
			height: 100%;
			border-left-color: transparent;
			top: 0;
			left: 0;
            animation: loadingPage1 2s .2s infinite linear;
		}

		&:nth-child(2) {
			width: 75%;
			height: 75%;
			border-right-color: transparent;
			top: 12.5%;
			left: 12.5%;
			animation: loadingPage2 1s .2s infinite linear;
		}

		&:nth-child(3) {
			width: 50%;
			height: 50%;
			border-bottom-color: transparent;
			top: 25%;
			left: 25%;
			animation: loadingPage1 2s .2s infinite linear;
		}
        &:last-child{
            border: none;
            top: 44%;
            left: 33%;
            animation: loadingTextOpacity 1.6s linear .2s infinite;
        }
	}
}

@keyframes loadingPage1{
	0%{
		transform: rotate(0);
	}
	100%{
		transform: rotate(360deg);
	}
}
@keyframes loadingPage2{
	0%{
		transform: rotate(0);
	}
	100%{
		transform: rotate(-360deg);
	}

}
@keyframes loadingTextOpacity{
    0%  {opacity: 0}
    20% {opacity: 0}
    50% {opacity: 1}
    100%{opacity: 0}
}
</style>

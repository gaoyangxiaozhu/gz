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
@import "../../assets/css/variable";
.loading{

    text-align: center;
    position: relative;

    font-size: 0.6rem;

    width: 141px;
    height: 141px;

    margin: auto;
    @media only screen and (min-width: #{$screen-sm-min}){
        width: 200px;
        height: 200px;

        font-size: 1rem;
    }
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

            position: relative;
            top: 42%;
            animation: loadingTextOpacity 1.4s linear 0 infinite;
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

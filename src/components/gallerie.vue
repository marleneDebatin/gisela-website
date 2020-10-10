<template>
  <div class="gallery">
	  <div class="container">
		  <div class="col-8 offset-2">
            <h1>{{title}}</h1>
            <div class="row justify-content-center">
                <div v-for="image in images" v-bind:key="image.src" class="col-6">
                    <div class="art">
                        <img v-bind:src="image.src">
						<div class="text">
							<span class="description">{{image.description}}</span>
							<span class="size">{{image.size}}</span>
						</div>
                    </div>
                </div>
            </div>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'Gallerie',
  props: {
    title: String,
    images: Array
  }
}
</script>

<style scoped>
h1 {
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
img {
   max-width: 100%;
    height: auto;
}
.text {
	display: flex;
    flex-direction: column;
    justify-content: center;
	padding: 10px 0px 15px 5px;
}
.size {
	color: gray;
}
</style>
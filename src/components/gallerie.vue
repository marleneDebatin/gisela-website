<template>
  <div class="gallery">
	  <div class="container">
		  <div class="">
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
  font-family: 'Playfair Display';
  font-weight: 600;
}
img {
   max-width: 100%;
    height: auto;
	box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
}
.text {
	display: flex;
    flex-direction: column;
    justify-content: center;
	padding: 10px 0px 35px 5px;
	font-family: 'Open Sans';
	font-size: 0.9rem;
}
.size {
	color: gray;
}
.gallery {
	border-bottom: 1px solid rgba(0,0,0,0.1);
	margin-bottom: 3rem;
}
</style>
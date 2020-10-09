<template>
  <div class="gallery">
            <h1>{{title}}</h1>
            <div class="row">
                <div v-for="image in images" v-bind:key="image.src" class="col-6">
                    <div class="art">
                        <img v-bind:src="image.src">
                        <span class="description">{{image.description}}</span>
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
img {
   max-width: 100%;
    height: auto;
}
.art {
	display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
<template>
  <div class="kunst">
    <div class="page col-12">
        <div class="container">
			<Gallerie v-for="elem in this.art" v-bind:key='elem.title' v-bind:title='elem.title' v-bind:images='elem.images'></Gallerie>
	    </div>
    </div>
  </div>
</template>

<script>
import Gallerie from '@/components/gallerie.vue'

export default {
	name: 'Kunst',
	components: {
	  Gallerie
	},
	data : function() {
		return {
			art : [
				{
					title : 'Ölbilder',
					images : [
						{
							src : require('../assets/Eulen.jpg'),
							description : 'Text 1',
							size : '0 cm'
						},
						{
							src : require('../assets/Fledermaus.jpg'),
							description : 'Text 2',
							size : '0 cm'
						},
						{
							src : require('../assets/Eichhörnchen.jpg'),
							description : 'Text 3',
							size : '0 cm'
						},
						{
							src : require('../assets/Katze.jpg'),
							description : 'Text 4',
							size : '0 cm'
						}
					]
				},
				{
					title : 'Keramiken',
					images : [
						{
							src : require('../assets/Keramik Kater.jpg'),
							description : 'Text 1',
							size : '0 cm'
						},
						{
							src : require('../assets/Keramik Maus.jpg'),
							description : 'Text 2',
							size : '0 cm'
						},
						{
							src : require('../assets/Keramik Nashorn.jpg'),
							description : 'Text 3',
							size : '0 cm'
						},
						{
							src : require('../assets/Keramik Pfau.jpg'),
							description : 'Text 4',
							size : '0 cm'
						}
					]
				},
				{
					title : 'Hinterglasbilder',
					images : [
						{
							src : require('../assets/HGB-Flora.jpg'),
							description : 'Text 1',
							size : '0 cm'
						},
						{
							src : require('../assets/HGB-Intercity.jpg'),
							description : 'Text 2',
							size : '0 cm'
						},
						{
							src : require('../assets/HGB-Schwan.jpg'),
							description : 'Text 3',
							size : '0 cm'
						},
						{
							src : require('../assets/HGB-Stier.jpg'),
							description : 'Text 4',
							size : '0 cm'
						}
					]
				},
			]
		};
	}
  
}
</script>
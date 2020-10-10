<template>
  <div class="kunst">
		<Gallerie v-for="elem in this.art" v-bind:key='elem.title' v-bind:title='elem.title' v-bind:images='elem.images' v-bind:id='elem.title'></Gallerie>
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
							description : 'Uhus entdecken ein Schloss',
							size : '70 x 70 cm'
						},
						{
							src : require('../assets/Fledermaus.jpg'),
							description : 'Fledermäuse in der Abtei',
							size : '70 x 70 cm'
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
							description : 'Herzog von Orléans',
							size : '37 cm'
						},
						{
							src : require('../assets/Keramik Maus.jpg'),
							description : 'Katzenjäger',
							size : '35 cm'
						},
						{
							src : require('../assets/Keramik Nashorn.jpg'),
							description : 'Samsara',
							size : '33 cm'
						},
						{
							src : require('../assets/Keramik Pfau.jpg'),
							description : 'Domingo',
							size : '36 cm'
						}
					]
				},
				{
					title : 'Hinterglasbilder',
					images : [
						{
							src : require('../assets/HGB-Flora.jpg'),
							description : 'Flora weckt ihre Kinder',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Intercity.jpg'),
							description : 'Begegnung im Intercity',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Schwan.jpg'),
							description : 'Schwan von Fürstenberg',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Stier.jpg'),
							description : 'Stier vor dem Rosentempel',
							size : '30 x 40 cm'
						}
					]
				},
			]
		};
	}
  
}
</script>
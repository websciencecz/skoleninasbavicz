<template>
<div>
      <div class="container-fluid content-box">
        <div class="container">
           <br>
			<h1>{{ lector.name}}</h1>
			<hr>
			<div class="about-lector">
				<div class="lector-image">
					<img :src="lector.photo.data.attributes.url" width="325">
					<br>
				</div>
				<div class="lector-text">
					<br>
					<p>{{ lector.content}}</p>
					<br>
					<a v-for="social in lector.socials" :key="social.id" :href="social.link" target="_blank" class="social-icons-lector"><i :class="`${social.icon} fa-2x`"></i></a>
				</div>
			</div>
			<br>
			<h4>Moje školení</h4>
			<hr>
            <training-box v-for="training in trainings" :key="training.id" :training="training.attributes" />
        </div>
	</div>
</div>

</template>

<script>
import TrainingBox from '../../components/TrainingBox.vue';
export default {
    components: { TrainingBox },
    async asyncData({ params, error, $axios }) {
        try {
            const lector = (await $axios.$get(`api/slugify/slugs/snb-lector/${params.slug}?populate=deep`)).data.attributes;
            const trainings = (await $axios.$get(`api/slugify/slugs/snb-lector/${params.slug}?populate=deep`)).data.attributes['snb_trainings'].data;
            return {
                lector,
                trainings
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

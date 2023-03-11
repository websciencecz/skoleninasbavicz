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

        </div>
	</div>
</div>

</template>

<script>
export default {
    async asyncData({ params, error, $axios }) {
        try {
            const lector = (await $axios.$get(`api/slugify/slugs/snb-lector/${params.slug}?populate=deep`)).data.attributes;
            return {
                lector,
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

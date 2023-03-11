<template>
<div>
<div class="content-box">
		<div class="description container">
			<br>
			<h1>{{ training.name }}</h1>
			<span class="training-box-text-skill date">Termín: 23. 6. 2022</span>
			<hr>
			<div class="training-detail">
				<div class="training-detail-content">
					{{ training.content }}
				</div>
				<div class="training-detail-info">
					<div class="info">
						<div class="info-row">
							<hr class="d-md-none">
							<span class="info-key">Úroveň:</span>
							<span class="info-value bold">{{ training.level }}</span>
						</div>
						<div class="info-row">
							<span class="info-key">Délka:</span>
							<span class="info-value bold">{{ training.duration }}</span>
						</div>
						<div v-if="training.snb_sessions.data[0]" class="info-row">
							<span class="info-key">Termín:</span>
							<span class="info-value bold">{{ training.snb_sessions.data[0].attributes.datetime}}</span>
						</div>
						<div v-if="training.snb_sessions.data[0]" class="info-row">
							<span class="info-key">Místo konání:</span>
							<span class="info-value bold">{{ training.place }}</span>
						</div>
						<div v-if="false" class="info-row">
							<span class="info-key">Celkový počet míst:</span>
							<span class="info-value bold">8</span>
						</div>
					</div>
					<div class="training-detail-lector">
                        <lector-box :lector="training.snb_lector.data.attributes"></lector-box>
					</div>
				</div>

			</div>
		</div>
	</div>
</div>

</template>

<script>
import LectorBox from '../../components/LectorBox.vue';

export default {
    components: { LectorBox },
    async asyncData({ params, error, $axios }) {
        try {
            const training = (await $axios.$get(`api/slugify/slugs/snb-training/${params.slug}?populate=deep`)).data.attributes;
            return {
                training
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>
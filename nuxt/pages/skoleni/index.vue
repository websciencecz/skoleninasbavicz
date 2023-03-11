<template>
    <div>
        <div class="container-fluid content-box">
            <div class="container">
                <br>
                <h1>Veřejná školení:</h1>
                <br>
                <training-box v-for="training in data" :key="training.id" :training="training.attributes" />

                <div class="next-text">
                    <span>další školení již brzy...</span>
                </div>
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
            const data = (await $axios.$get(`/api/snb-trainings?populate=deep`)).data;
            return {
                data,
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

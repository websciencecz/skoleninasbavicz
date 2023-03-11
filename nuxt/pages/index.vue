<template>
    <div>
        <div class="claim-box">
            <img src="img/bg_hp.jpg" />
        </div>
        <div class="container-fluid content-box">
            <div class="container">
                <br>
                <h2>Nejbližší veřejná školení:</h2>
                <div v-for="training in trainings" :key="training.id">
                    <training-box v-if=training.attributes.snb_sessions.data[0] :training="training.attributes" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TrainingBox from '../components/TrainingBox.vue';
export default {
    components: { TrainingBox },
    async asyncData({ params, error, $axios }) {
        try {
            const trainings = (await $axios.$get(`/api/snb-trainings?populate=deep`)).data;
            return {
                trainings,
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

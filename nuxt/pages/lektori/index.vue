<template>
    <div>
      <div class="container-fluid content-box">
        <div class="container">
            <br>
            <h1>Lektoři:</h1>
            <br>
            <div class="row">
                <div class="col" v-for="lector in data" :key="lector.id">
                  <lector-box :lector="lector.attributes" />
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
            const data = (await $axios.$get(`/api/snb-lectors?populate=deep`)).data;
            return {
                data,
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

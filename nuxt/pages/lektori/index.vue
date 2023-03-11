<template>
    <div>
      <div class="container-fluid content-box">
        <div class="container">
            <br>
            <h1>Lektoři:</h1>
            <br>
            <div class="row">
                <div class="col" v-for="lector in data" :key="lector.id">
                   <div class="lector-box center">
                        <Nuxt-link :to="`/lektori/${lector.attributes.slug}`">
                            <img :src="lector.attributes.photo.data.attributes.url">
                            <br>
                            <div class="lector-name">
                                <span class="bold">{{ lector.attributes.name }}</span>
                            </div>
                            <div class="tags">
                                <span class="tag" v-for="tag in lector.attributes.tags" :key="tag.id">{{ tag.Tag }}</span>
                            </div>
                        </Nuxt-link>
                    </div>
                </div>
        </div>
	</div>
</div>
    </div>
</template>

<script>
export default {
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

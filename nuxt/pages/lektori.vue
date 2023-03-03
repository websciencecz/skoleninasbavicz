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
                        <a href="/lektori/jakub-englicky/">
                            <img src="img/lectores/jakub-englicky.jpg?v={$assetsVersion}">
                            <br>
                            <div class="lector-name">
                                <span class="bold">{{ lector.attributes.name }}</span>
                            </div>
                            <div class="tags">
                                <span class="tag">Docker</span>
                                <span class="tag">Git</span>
                            </div>
                        </a>
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
            const data = (await $axios.$get(`/api/snb-lectors`)).data;
            return {
                data,
            };
        } catch {
            error({ statusCode: 404, message: 'No Page found' })
        }
    },
}
</script>

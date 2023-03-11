<template>
    <div>
        <div class="lector-box center">
            <Nuxt-link :to="`/lektori/${lector.slug}`">
                <img :src="lector.photo.data.attributes.url">
                <br>
                <div class="lector-name">
                    <span class="bold">{{ lector.name }}</span>
                </div>
                <div class="tags">
                    <span class="tag" v-for="tag in lector.tags" :key="tag.id">{{ tag.Tag }}</span>
                </div>
            </Nuxt-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            lector: {
                type: Object,
                required: true
            }
        }
    }
</script>
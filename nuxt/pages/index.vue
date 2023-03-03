<template>
    <div>
        <div class="claim-box">
            <img src="img/bg_hp.jpg" />
        </div>
        <div class="container-fluid content-box">
            <div class="container">
                <br>
                <h2>Nejbližší veřejná školení:</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        const response = await $axios.get('https://cms.skoleninasbavi.cz/api/snb-courses');
        return {
            courses: response.data
        }
    }
}
</script>

<template>
    <div>
        <div class="training-box">
            <NuxtLink :to="`/skoleni/${training.slug}`">
                <div class="row">
                    <div class="col-md-3 col-sm-4 d-none d-sm-block training-box-date">
                        <span>
                            <i class="far fa-calendar"></i>
                            <div v-if="training.snb_sessions.data[0]">{{ training.snb_sessions.data[0].attributes.datetime}}</div>
                            <div v-else>---</div>
                        </span>
                    </div>
                    <div class="col-md-6 col-12 col-sm-8 training-box-text center">
                        <span class="bold">
                            {{ training.name }}
                        </span>
                        <span>
                            <br>
                            <span class="training-box-text-skill d-sm-none">
                            </span>
                            <span class="training-box-text-skill">
                                {{ training.duration }} / {{ training.level }}
                            </span>
                        </span>

                    </div>
                    <div class="col-md-3 d-none d-md-block training-box-arrow">
                        <i class="fas fa-chevron-circle-right"></i>
                    </div>
                </div>
            </NuxtLink>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            training: {
                type: Object,
                required: true
            }
        }
    }
</script>
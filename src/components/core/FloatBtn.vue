<template>
    <v-card-text style="height: 100px; position: relative">
        <v-btn
            dark
            fab
            bottom
            right
            fixed
            color="pink"
            @click="jumpTochat"
            style="font-size: 14px; width:65px; height: 65px;"
        >
            在线咨询
        </v-btn>
    </v-card-text>
</template>
<script>
export default {
    name: 'FloatBtn',
    methods: {
        jumpTochat() {
            // TODO
        }
    }
}
</script>
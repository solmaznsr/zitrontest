<template>
    <div class="card row flex-center pa-lg myfooter-card">
        <div class="col-12 text-center text-lg text-bold">{{ Showtext }}</div>
        <router-link to="/about" class="text-black text-center py-lg">{{ aboutUs }}</router-link>
    </div>
</template>

<script setup>
const Showtext = "فروشگاه اینترنتی دیجی کالا، بررسی، انتخاب و خرید آنلاین"
const aboutUs = "درباره ما"
</script>


<style scoped>
.myfooter-card {
    height: 25vh;
}
</style>
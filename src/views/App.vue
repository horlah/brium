<template>
    <div class="app">
        <Sidebar />
        <div>
            <TopNav />

            <router-view></router-view>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Sidebar.vue'
import TopNav from '@/components/Top-Nav.vue'

export default {
    name: 'app',
    components: {
        Sidebar,
        TopNav
    }
}
</script>

<style scoped lang="scss">
.app {
    display: flex;

    & > div {
        width: 100%;
        background: rgba(237, 237, 237, 0.75);
        margin-left: 18%;
    }
}
</style>

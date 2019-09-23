<template>
    <div class="app">
        <Sidebar />
        <div v-bind:class="{'collapse-sidebar': sidebarState === true}">
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
    },
    computed: {
        sidebarState () {
            return this.$store.getters.SidebarState
        }
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

        &.collapse-sidebar {
            margin-left: 6.5%;
        }
    }
}
</style>

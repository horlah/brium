<template>
    <section class="sidebar" v-bind:class="{collapse: sidebarState === true}">
        <div class="logo">
            <img src="../assets/white-logo.png" alt="brium logo">
        </div>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/dashboard.svg" alt="dashboard icon">
                    <div>Dashboard</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'trips'}">
                    <img src="../assets/trips.svg" alt="trips icon">
                    <div>Trips</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'drivers'}">
                    <img src="../assets/driver.svg" alt="drivers icon">
                    <div>Drivers</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'passengers'}">
                    <img src="../assets/passenger.svg" alt="passengers icon">
                    <div>Passengers</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'vehicles'}">
                    <img src="../assets/vehicle.svg" alt="vehicles icon">
                    <div>Vehicles</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'manual-dispatch'}">
                    <img src="../assets/manual-dispatch.svg" alt="manual dispatch icon">
                    <div>Manual Dispatch</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'reports'}">
                    <img src="../assets/report.svg" alt="reports icon">
                    <div>Reports</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'price-management'}">
                    <img src="../assets/price.svg" alt="price management icon">
                    <div>Price Management</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'settings'}">
                    <img src="../assets/settings-gears.svg" alt="settings icon">
                    <div>Settings</div>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'sidebar',
    data: () => {
        return {
            showSideBar: false
        }
    },
    computed: {
        sidebarState () {
            return this.$store.getters.SidebarState
        }
    }
}
</script>

<style scoped lang="scss">
.sidebar {
    background: var(--primary-color);
    width: 18%;
    height: 100vh;
    position: fixed;
    transition: all .3s;
}

ul, li {
    list-style-type: none;
    padding: 0;
}

a {
    color: #ffffff;
}

.logo {
    padding: 40px 0 20px;
    text-align: center;

    img {
        width: 33%;
        transition: all .3s;
    }
}

ul {
    margin: 0;

    li {
        border-top: 1px solid rgba(232, 232, 232, 0.22);
        text-align: center;

        &:last-child {
            border-bottom: 1px solid rgba(232, 232, 232, 0.22);
        }

        a {
            display: flex;
            align-items: center;
            padding: 20px 0 20px 30px;
            font-size: .8rem;

            &.router-link-active {
                background: #FBB837;
            }

            img {
                margin-right: 25px;
            }

            div {
                pointer-events: all;
                opacity: 1;
                transition: all .2s;
            }
        }
    }
}

.sidebar.collapse {
    width: 6.5%;

    .logo img {
        width: 70%;
    }

    ul li div {
        opacity: 0;
        pointer-events: none;
    }
}
</style>

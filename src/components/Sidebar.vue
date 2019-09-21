<template>
    <section class="sidebar">
        <div class="logo">
            <img src="../assets/white-logo.png" alt="brium logo">
        </div>
        <ul>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/dashboard.svg" alt="dashboard icon">
                    Dashboard
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/trips.svg" alt="trips icon">
                    Trips
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/driver.svg" alt="drivers icon">
                    Drivers
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/passenger.svg" alt="passengers icon">
                    Passengers
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/vehicle.svg" alt="vehicles icon">
                    Vehicles
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/manual-dispatch.svg" alt="manual dispatch icon">
                    Manual Dispatch
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/report.svg" alt="reports icon">
                    Reports
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/price.svg" alt="price management icon">
                    Price Management
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'dashboard'}">
                    <img src="../assets/settings-gears.svg" alt="settings icon">
                    Settings
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'sidebar',
    props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
    background: var(--primary-color);
    width: 18%;
    height: 100vh;
    position: fixed;
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

            &:active {
                background: #FBB837;
            }

            img {
                margin-right: 25px;
            }
        }
    }
}
</style>

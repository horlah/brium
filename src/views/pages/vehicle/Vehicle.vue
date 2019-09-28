<template>
    <div class="vehicle">
        <div class="bread-crumbs">
            <div class="link">
                <router-link :to="{ name: 'all-vehicles'}">Vehicles</router-link>
            </div>
            <div class="link">WSE-424-DE - Toyota Camry</div>
        </div>

        <section>
            <div class="head">
                <div>WSE-424-DE</div>
                <div></div>
                <div>Toyota Camry</div>
            </div>

            <div class="vehicle-details">
                <div>
                    <div>
                        <div class="label">CURRENT STATUS</div>
                        <div>In Service</div>
                    </div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>SEDAN</div>
                    </div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>NISSAN</div>
                    </div>
                    <div>
                        <div class="label">CAR MODEL</div>
                        <div>COROLLA</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CURRENT DRIVER</div>
                        <div>John Boyega</div>
                    </div>
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Nov 2018</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>Teju-Admin</div>
                    </div>
                </div>
                <div class="car-image">
                    <img src="../../../assets/car.png" alt="car">
                    <img src="../../../assets/user.png" alt="driver's display picture" class="driver-dp-on-car">
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
section {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
}

.head {
    display: flex;
    align-items: center;
    padding: 20px 30px;
    border-bottom: 1px solid var(--border-color);

    div {
        &:nth-child(2) {
            width: 10px;
            height: 10px;
            background: var(--secondary-color);
            border-radius: 50px;
            margin: 0 20px;
            font-weight: bolder;
        }
    }
}

.vehicle-details {
    padding: 50px 60px;
    display: flex;
    justify-content: flex-start;

    & > div {
        min-width: 250px;

        & > div {
            margin-bottom: 20px;
        }
    }

    .car-image {
        position: relative;
        text-align: center;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -100px;

        .driver-dp-on-car {
            bottom: initial;
            right: 130px;
            width: 15% !important;
        }
    }
}
</style>

<template>
    <section class="vehicles table">
        <div class="head">
            <button>Add New Driver</button>

            <div class="search">
                <label for="search">
                    <img src="../../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="Search driver name">
            </div>
        </div>

        <div class="table-body">
            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>

            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>

            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>

            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>

            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>

            <div @click="openVehicle" class="vehicle table-item">
                <div class="name">
                    <div>
                        <img src="../../../assets/car.png" alt="car image">
                        <img src="../../../assets/user.png" alt="user image" class="driver-dp-on-car">
                    </div>
                    <div>
                        <div class="label">DRIVER</div>
                        <div>Cristabel Ade</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">PLATE NUMBER</div>
                        <div>WSE-424-DE</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>MATE</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>Corolla</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>Toyota</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>TejumolaAdmin</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                    <div>
                        <div class="label">LAST MODIFIED</div>
                        <div>29th, Jun 2017</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pagination">
            <div>
                <img src="../../../assets/backward-arrow.svg" alt="previous icon">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div class="active">4</div>
                <div>5</div>
                <div>6</div>
                <img src="../../../assets/forward-arrow.svg" alt="next icon">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'all-drivers',
    methods: {
        openVehicle () {
            this.$router.push('/vehicles/vehicle')
        }
    }
}
</script>

<style lang="scss" scoped>
.vehicles {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 0 30px;
}

.table-body {
    margin-top: 20px;
}

.vehicle {
    border-left: 7px solid var(--primary-color);

    .name {
        display: flex;
        flex-direction: column;

        img {
            width: 50%;
            margin-right: 0;
        }

        .driver-dp-on-car {
            right: 60px;
        }

        & > div:first-child {
            position: relative;
        }

        & > div:last-child {
            text-align: left;
            margin-top: 10px;
        }
    }

    & > div:not(:first-child) {
        & > div:first-child {
            margin-bottom: 20px;
        }
    }
}
</style>

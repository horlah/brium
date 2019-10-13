<template>
    <section class="vehicles table">
        <div class="head">
            <button @click="showAddVehicleModal">Add New Vehicle</button>

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

        <template v-if="modalState === true">
            <Modal>
                <div class="add-vehicle">
                    <div class="vehicle-image centralize">
                        <div class="centralize">
                            <img src="../../../assets/camera.png" alt="camera icon">
                        </div>
                    </div>

                    <form>
                        <div class="input">
                            <input type="text" placeholder="Car brand" aria-label="car brand">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Car model" aria-label="car model">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Select Car Type" aria-label="Select Car Type">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Color" aria-label="Color">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Licence Plate Number" aria-label="Licence Plate Number">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Next Schedule Maintainanace" aria-label="Next Schedule Maintainanace">
                        </div>

                        <div class="centralize column form-buttons">
                            <button class="normal-button">ADD CAR</button>
                            <button @click.prevent="closeModal" class="link-style">dismiss</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </template>
    </section>
</template>

<script>
import Modal from '@/components/Modal.vue';
import ModalMixin from '../../../mixins/modal-mixun';

export default {
    name: 'all-drivers',
    mixins: [ModalMixin],
    components: {
        Modal
    },
    methods: {
        openVehicle() {
            this.$router.push('/vehicles/vehicle');
        },
        showAddVehicleModal() {
            this.$store.dispatch('SET_MODAL_STATE', !this.$store.getters.ShowModalState);
        }
    },
    computed: {
        modalState() {
            return this.$store.getters.ShowModalState;
        }
    }
};
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

.modal .vehicle-image {
    margin-bottom: 20px;

    & > div {
        background: #E7E7E7;
        border-radius: 50px;
        width: 80px;
        height: 80px;
    }
}
</style>

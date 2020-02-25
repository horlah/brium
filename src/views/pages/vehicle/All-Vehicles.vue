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
            <div @click="openVehicle" class="vehicle table-item" v-for="(vehicle, index) in vehicles" :key="index">
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
                        <div>{{ vehicle.regNo }}</div>
                    </div>
                    <div>
                        <div class="label">CAR TYPE</div>
                        <div>Sedan</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">COLOR</div>
                        <div>{{ vehicle.color }}</div>
                    </div>
                    <div>
                        <div class="label">MODEL</div>
                        <div>{{ vehicle.model }}</div>
                    </div>
                </div>
                <div>
                    <div>
                        <div class="label">CAR BRAND</div>
                        <div>{{ vehicle.manufacturer }}</div>
                    </div>
                    <div>
                        <div class="label">CREATED BY</div>
                        <div>{{ vehicle.createdBy }}</div>
                    </div>
                </div>
                <div class="date">
                    <div>
                        <div class="label">DATE CREATED</div>
                        <div>{{ parseDate(vehicle.createdOn) }}</div>
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

                    <form v-on:submit.prevent="addVehicle">
                        <div class="input">
                            <input type="text" v-model="newVehicle.regNo" placeholder="Car Registration Number" aria-label="car brand">
                        </div>
                        <div class="input">
                            <input type="text" v-model="newVehicle.type" placeholder="Car Type" aria-label="car type">
                        </div>
                        <div class="input">
                            <input type="text" v-model="newVehicle.manufacturer" placeholder="Car Manufacturer" aria-label="car manufacturer">
                        </div>
                        <div class="input">
                            <input type="text" v-model="newVehicle.model" placeholder="Car model" aria-label="car model">
                        </div>
                        <div class="input">
                            <input type="text" v-model="newVehicle.nextMaintenance" placeholder="Next Car Maintainance 2020-03-20" aria-label="next car maintainance">
                        </div>
                        <div class="input">
                            <input type="color" v-model="newVehicle.color" placeholder="Color" aria-label="Color">
                        </div>
                        <div class="input">
                            <input type="url" v-model="newVehicle.imageUrl" placeholder="Car Image URL" aria-label="car image url">
                        </div>

                        <div class="centralize column form-buttons">
                            <button type="submit" class="normal-button">ADD CAR</button>
                            <button @click.prevent="closeModal" class="link-style">dismiss</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </template>

        <Loader v-if="showLoader" />
    </section>
</template>

<script>
import Modal from '@/components/Modal.vue';
import ModalMixin from '../../../mixins/modal-mixun';
import { HTTP_AUTH } from '../../../services/http';
import Loader from '@/components/Loader.vue';

export default {
    name: 'all-drivers',
    mixins: [ModalMixin],
    components: {
        Modal,
        Loader
    },
    data: () => {
        return {
            newVehicle: {
                regNo: 'AL 419 ABU',
                type: 'Sedan',
                color: 'Sky Blue',
                manufacturer: 'Mazda',
                model: 'Miata',
                nextMaintenance: '2020-03-20',
                imageUrl: 'http://www.vehicleimage.com'
            },
            vehicles: [],
            showLoader: false
        };
    },
    methods: {
        openVehicle() {
            this.$router.push('/vehicles/vehicle');
        },
        showAddVehicleModal() {
            this.$store.dispatch('SET_MODAL_STATE', !this.$store.getters.ShowModalState);
        },
        async getAllVehicles() {
            this.showLoader = true;

            try {
                const response = await HTTP_AUTH.get('/fetchCompanyVehicles');
                this.vehicles = response.data.vehicles;
                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
            }
        },
        async addVehicle() {
            this.showLoader = true;

            try {
                await HTTP_AUTH.post('/addCompanyVehicle', this.adminUser);
                this.closeModal();
                this.showLoader = false;
            } catch (error) {
                this.showLoader = false;
            }
        },
        parseDate(date) {
            const vehicleDate = new Date(date);

            const monthArray = [];
            monthArray[0] = 'January';
            monthArray[1] = 'February';
            monthArray[2] = 'March';
            monthArray[3] = 'April';
            monthArray[4] = 'May';
            monthArray[5] = 'June';
            monthArray[6] = 'July';
            monthArray[7] = 'August';
            monthArray[8] = 'September';
            monthArray[9] = 'October';
            monthArray[10] = 'November';
            monthArray[11] = 'December';

            const month = monthArray[vehicleDate.getMonth()];
            return vehicleDate.getDate() + ', ' + month + ' ' + vehicleDate.getFullYear();
        }
    },
    computed: {
        modalState() {
            return this.$store.getters.ShowModalState;
        }
    },
    mounted() {
        this.getAllVehicles();
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

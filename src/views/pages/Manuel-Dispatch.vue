<template>
    <section class="manuel-dispatch">
        <div class="add-manual-dispatch_container">
            <button class="add-manual-dispatch" @click="showCreateDispatchModal">CREATE MANUAL DISPATCH</button>
        </div>

        <div class="trips">
            <div class="tabs">
                <button class="tab" v-bind:class="{active: activeTab === 'active'}" @click="switchTabs('active')">Active</button>
                <button class="tab" v-bind:class="{active: activeTab === 'upcoming'}" @click="switchTabs('upcoming')">Upcoming</button>
            </div>

            <div class="trips-search">
                <div class="search">
                    <label for="search">
                        <img src="../../assets/search.svg" alt="search icon">
                    </label>
                    <input type="text" placeholder="search name, location, time">
                </div>
            </div>

            <div class="trips-detail" v-show="activeTab === 'active'">
                <div class="trip">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/refresh.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">PICKUP - 2MIN</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">REQUESTING</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">REQUESTING</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">REQUESTING</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">REQUESTING</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip requesting">
                    <div class="status">
                        <div class="status-icon">
                            <img src="../../assets/directions.svg" alt="direction icon">
                        </div>
                        <div>
                            <div class="label">STATUS</div>
                            <div class="status-title">REQUESTING</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="trips-detail" v-show="activeTab === 'upcoming'">
                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>

                <div class="trip">
                    <div class="status">
                        <div>
                            <div class="label">DATE</div>
                            <div class="status-title">29th, Jun 2017, 22:57</div>
                        </div>
                    </div>

                    <div class="clients">
                        <div class="client driver">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">DRIVER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                        <div class="client passenger">
                            <div class="display-picture">
                                <img src="../../assets/user.png" alt="driver display picture">
                            </div>
                            <div class="details">
                                <div class="label">PASSENGER</div>
                                <div>John Obinna</div>
                            </div>
                        </div>
                    </div>

                    <div class="timing">
                        <div class="time start-time">
                            <div class="label">START TIME</div>
                            <div>9:05am</div>
                        </div>
                        <div class="time end-time">
                            <div class="label">END TIME ESTIMATE</div>
                            <div>9:30am <span class="label">(3 mins left)</span></div>
                        </div>
                    </div>

                    <div class="location">
                        <div class="trip-details">
                            <div class="pickup">
                                <div class="label">PICKUP</div>
                                <div class="label-title">Adeleke Ade Road</div>
                            </div>
                            <div class="destination">
                                <div class="label">DROP OFF</div>
                                <div class="label-title">Presidential Hotel</div>
                            </div>
                        </div>
                    </div>

                    <div class="cost">
                        <div>
                            <div class="label">ESTIMATED COST</div>
                            <div class="price">N4,300</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <div>
                    <img src="../../assets/backward-arrow.svg" alt="previous icon">
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div class="active">4</div>
                    <div>5</div>
                    <div>6</div>
                    <img src="../../assets/forward-arrow.svg" alt="next icon">
                </div>
            </div>
        </div>

        <template v-if="modalState === true">
            <Modal>
                <div class="add-dispatch">
                    <div class="centralize column">
                        <div class="add-icon">+</div>
                        <h3>Manual Dispatch</h3>
                    </div>

                    <form>
                        <div class="input">
                            <input type="text" placeholder="Select Driver from Available drivers list" aria-label="Select Driver from Available drivers list">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Search Passengers Name" aria-label="Search Passengers Name">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Select Means of Payment" aria-label="Select Means of Payment">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Pickup Point" aria-label="Pickup Point">
                        </div>
                        <div class="input">
                            <input type="text" placeholder="Destination" aria-label="Destination">
                        </div>

                        <div class="centralize column form-buttons">
                            <button class="normal-button">BOOK RIDE</button>
                            <button @click.prevent="closeModal" class="link-style">dismiss</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </template>
    </section>
</template>

<script>
import ModalMixin from '../../mixins/modal-mixun';
import Modal from '@/components/Modal.vue';

export default {
    name: 'manual-dispatch',
    components: {
        Modal
    },
    mixins: [ModalMixin],
    data: () => {
        return {
            activeTab: 'active'
        };
    },
    methods: {
        switchTabs(activeTab) {
            this.activeTab = activeTab;
        },
        showCreateDispatchModal() {
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

<style scoped lang="scss">
.add-manual-dispatch_container {
    text-align: right;
    margin-right: 30px;
}

.add-manual-dispatch {
    color: var(--white-color);
    background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
    border-radius: 3px;
    margin-top: 20px;
    padding: 10px 0;
    width: 200px;
}

.add-icon {
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--white-color);
    border-radius: 50px;
    font-size: 2rem;
    text-align: center;
}

.add-dispatch {
    h3 {
        margin-bottom: 0;
        color: var(--primary-color);
        font-weight: bolder;
    }
}
</style>

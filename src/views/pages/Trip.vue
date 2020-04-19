<template>
    <section class="trips">
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
            <div class="trip" v-for="(trip, index) in trips" :key="index">
                <div class="status">
                    <div class="status-icon">
                        <img src="../../assets/refresh.svg" alt="direction icon">
                    </div>
                    <div>
                        <div class="label">STATUS</div>
                        <div class="status-title">{{ trip.status }} - 2MIN</div>
                    </div>
                </div>

                <div class="clients">
                    <div class="client driver">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">DRIVER</div>
                            <div>{{ trip.driver.name }}</div>
                        </div>
                    </div>
                    <div class="client passenger">
                        <div class="display-picture">
                            <img src="../../assets/user.png" alt="driver display picture">
                        </div>
                        <div class="details">
                            <div class="label">PASSENGER</div>
                            <div>{{ trip.name }}</div>
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
                            <div class="label-title" :name="trip.destinationAddress">{{ trip.destinationAddress }}</div>
                        </div>
                        <div class="destination">
                            <div class="label">DROP OFF</div>
                            <div class="label-title" :name="trip.pickupAddress">{{ trip.pickupAddress }}</div>
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

            <!-- <div class="trip requesting">
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
            </div> -->
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
    </section>
</template>

<script>
import { HTTP_AUTH } from '../../services/http';

export default {
    name: 'trips',
    data: () => {
        return {
            activeTab: 'active',
            trips: []
        };
    },
    methods: {
        switchTabs(activeTab) {
            this.activeTab = activeTab;
        },
        async getTrips() {
            this.$store.dispatch('SET_LOADER_STATE', true);

            try {
                const response = await HTTP_AUTH.get('/trips?pageNo=1&pageCount=20');
                this.trips = await response.data.trips;
                this.$store.dispatch('SET_LOADER_STATE', false);

                return;
            } catch (error) {
                this.$store.dispatch('SET_LOADER_STATE', false);
            }
        }
    },
    async mounted() {
        await this.getTrips();
    }
};
</script>

<style scoped lang="scss">

</style>

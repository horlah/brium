<template>
    <section class="drivers table">
        <div class="head">
            <button>Add New Passenger</button>

            <div class="search">
                <label for="search">
                    <img src="../../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="Search passenger name">
            </div>
        </div>

        <div class="table-head">
            <div>Name</div>
            <div>Mobile Number</div>
            <div>Number of Ride</div>
            <div>Rating</div>
            <div>Date Joined</div>
            <div>Status</div>
        </div>
        <div class="table-body">
            <div @click="openPassenger" v-for="(passenger, index) in passengers" :key="index" class="driver table-item">
                <div class="name">
                    <img src="../../../assets/user.png" alt="user image">
                    <div>{{ passenger.firstName }} {{ passenger.lastName }}</div>
                </div>
                <div class="mobile-no">{{ passenger.phone }}</div>
                <div class="no-ride">{{ passenger.totalRides }}</div>
                <div class="rating">{{ passenger.rating }}</div>
                <div class="date">{{ passenger.createdOnValue | date }}</div>
                <div class="status processing">PROCESSING</div>
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
import { HTTP_AUTH } from '../../../services/http';

const parseDate = function(date) {
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
};

export default {
    name: 'all-passengers',
    data: () => {
        return {
            passengers: []
        };
    },
    filters: {
        date: parseDate
    },
    methods: {
        openPassenger() {
            this.$router.push('/passengers/passenger');
        },
        async getPassengers() {
            this.$store.dispatch('SET_LOADER_STATE', true);

            try {
                const response = await HTTP_AUTH.get('/getAllRiders?pageNo=1&pageCount=20');
                this.passengers = await response.data.riders;
                this.$store.dispatch('SET_LOADER_STATE', false);
                console.log(this.passengers);

                return;
            } catch (error) {
                this.$store.dispatch('SET_LOADER_STATE', false);
            }
        }
    },
    async mounted() {
        await this.getPassengers();
    }
};
</script>

<style lang="scss" scoped>
.drivers {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 0 30px;
}
</style>

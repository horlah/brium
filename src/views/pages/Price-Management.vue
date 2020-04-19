<template>
    <div class="price-management">
        <button>ADD NEW CAR TYPE</button>

        <div class="prices">
            <section v-for="(price, index) in prices" :key="index">
                <div class="head">
                    <img src="../../assets/car-icon.png" alt="car icon">
                    <div>{{ price.name }}</div>
                </div>
                <div class="item">
                    <div class="label">Number of cars</div>
                    <div>{{ price.cars }}</div>
                </div>
                <div class="item">
                    <div class="label">Base Fare</div>
                    <div>{{ price.baseFare }}</div>
                </div>
                <div class="item">
                    <div class="label">Price per km</div>
                    <div>NGN{{ price.costPerKm }}</div>
                </div>
                <div class="item">
                    <div class="label">Price per minute</div>
                    <div>NGN{{ price.costPerMin }}</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation fees</div>
                    <div>NGN{{ price.cancellationFee }}</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation time limit(min)</div>
                    <div>{{ price.cancellationLimit }}</div>
                </div>
                <div class="item">
                    <div class="label">Discount</div>
                    <div>{{ price.discount }}%</div>
                </div>
                <div class="item">
                    <div class="label">Minimum fees</div>
                    <div>NGN{{ price.minimum }}</div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import { HTTP_AUTH } from '../../services/http';

export default {
    name: 'trips',
    data: () => {
        return {
            prices: []
        };
    },
    methods: {
        async getPrices() {
            this.$store.dispatch('SET_LOADER_STATE', true);

            try {
                const response = await HTTP_AUTH.get('/getPrices');
                this.prices = await response.data.prices;
                this.$store.dispatch('SET_LOADER_STATE', false);

                return;
            } catch (error) {
                this.$store.dispatch('SET_LOADER_STATE', false);
            }
        }
    },
    async mounted() {
        await this.getPrices();
    }
};
</script>

<style lang="scss" scoped>
.price-management {
    position: relative;
}

.prices {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: 30px auto;
    padding: 20px 0 30px;
    margin-top: 60px;

    section {
        background: var(--white-color);
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        box-shadow: 3px 4px 4px rgba(197, 191, 191, 0.31);
        border-radius: 0px 3px 3px 3px;

        &:not(:first-child) {
            margin-left: 40px;
        }
    }
}

button {
    color: var(--white-color);
    background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
    border-radius: 3px;
    margin-top: 20px;
    padding: 10px 0;
    width: 200px;
    position: absolute;
    top: -55px;
    right: 40px;
}

.head {
    text-align: center;
    padding: 20px 0;
    font-size: .7rem;

    img {
        width: 15%;
        margin-bottom: 10px;
    }
}

.item {
    width: 230px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 13px 20px;
    font-size: .8rem;

    .label {
        font-size: .8rem;
    }

    &:nth-child(even) {
        background: #F4F7F9;
    }
}
</style>

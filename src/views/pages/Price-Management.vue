<template>
    <div class="price-management">
        <button>ADD NEW CAR TYPE</button>

        <div class="prices">
            <section>
                <div class="head">
                    <img src="../../assets/car-icon.png" alt="car icon">
                    <div>BRIUM REGULAR</div>
                </div>
                <div class="item">
                    <div class="label">Number of cars</div>
                    <div>2318</div>
                </div>
                <div class="item">
                    <div class="label">Base Fare</div>
                    <div>400</div>
                </div>
                <div class="item">
                    <div class="label">Price per km</div>
                    <div>208</div>
                </div>
                <div class="item">
                    <div class="label">Price per minute</div>
                    <div>2318</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation fees</div>
                    <div>188</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation time limit(min)</div>
                    <div>8</div>
                </div>
                <div class="item">
                    <div class="label">Discount</div>
                    <div>18%</div>
                </div>
                <div class="item">
                    <div class="label">Minimum fees</div>
                    <div>118</div>
                </div>
            </section>
            <section>
                <div class="head">
                    <img src="../../assets/car-icon.png" alt="car icon">
                    <div>BRIUM REGULAR</div>
                </div>
                <div class="item">
                    <div class="label">Number of cars</div>
                    <div>2318</div>
                </div>
                <div class="item">
                    <div class="label">Base Fare</div>
                    <div>400</div>
                </div>
                <div class="item">
                    <div class="label">Price per km</div>
                    <div>208</div>
                </div>
                <div class="item">
                    <div class="label">Price per minute</div>
                    <div>2318</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation fees</div>
                    <div>188</div>
                </div>
                <div class="item">
                    <div class="label">Cancellation time limit(min)</div>
                    <div>8</div>
                </div>
                <div class="item">
                    <div class="label">Discount</div>
                    <div>18%</div>
                </div>
                <div class="item">
                    <div class="label">Minimum fees</div>
                    <div>118</div>
                </div>
            </section>
        </div>
    </div>
</template>

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

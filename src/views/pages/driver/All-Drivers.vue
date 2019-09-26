<template>
    <section class="drivers">
        <div class="head">
            <button>Add New Driver</button>

            <div class="search">
                <label for="search">
                    <img src="../../../assets/search.svg" alt="search icon">
                </label>
                <input type="text" placeholder="Search driver name">
            </div>
        </div>

        <div class="table-head">
            <div>Name</div>
            <div>Mobile Number</div>
            <div>Current Car</div>
            <div>Rating</div>
            <div>Date</div>
            <div>Status</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status processing">PROCESSING</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
        </div>
        <div @click="openDriver" class="driver">
            <div class="name">
                <img src="../../../assets/user.png" alt="user image">
                <div>Cristabel Ade</div>
            </div>
            <div class="mobile-no">08053524774</div>
            <div class="current-car">Toyota Camry</div>
            <div class="rating">4.5</div>
            <div class="date">29th, Jun 2017</div>
            <div class="status approved">APPROVED</div>
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
        openDriver () {
            this.$router.push('/drivers/driver')
        }
    }
}
</script>

<style lang="scss" scoped>
.drivers {
    width: 95%;
    margin: 30px auto;
    background: var(--white-color);
    padding: 20px 0 30px;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    button {
        background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
        border-radius: 3px;
        color: var(--white-color);
        padding: 10px 70px;
    }
}

.table-head {
    display: flex;
    text-align: center;
    margin-top: 20px;
    background: var(--secondary-color);
    color: var(--white-color);
    padding: 15px 0;
    font-size: .9rem;

    & > div {
        width: 100%;
    }
}

.driver {
    display: flex;
    text-align: center;
    align-items: center;
    border: 0.75px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 3px;
    font-size: .8rem;
    font-weight: bolder;
    cursor: pointer;

    &:not(:first-of-type) {
        margin-top: 3px;
    }

    & > div {
        width: 100%;
        padding: 15px 0;
        border-right: 1px solid #F2F2F2;
    }

    .name {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 20%;
            margin-right: 10px;
        }
    }

    .status {
        &.approved {
            color: #07BE72;
        }

        &.processing {
            color: #F81C1C;
        }
    }
}
</style>

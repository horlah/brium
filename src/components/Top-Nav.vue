<template>
    <header class="header">
        <button @click="toggleSideBar">
            <img src="../assets/menu.svg" alt="menu icon">
        </button>

        <div>
            <button>
                <img src="../assets/mail.svg" alt="mail icon">
            </button>
            <button>
                <img src="../assets/siren.svg" alt="siren icon">
            </button>

            <div class="line"></div>

            <div class="details">
                <p>4:33pm, Monday February 12 2018</p>
                <p>Tejumola David <a href="#">Sign Out</a></p>
            </div>
            <div class="dispayPicture">
                <img src="../assets/user.png" alt="user display picture">
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'top-nav',
    props: {
        msg: String
    },
    methods: {
        toggleSideBar () {
            this.$store.dispatch('SET_SIDEBAR_STATE', !this.$store.getters.SidebarState)
        }
    }
}
</script>

<style scoped lang="scss">
header {
    padding: 20px 30px 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;

    & > div {
        display: flex;
        align-items: center;

        button {
            margin-right: 30px;

            img {
                width: 60%;
            }
        }

        .line {
            height: 35px;
            width: 3px;
            background: #DADADA;
            margin-right: 30px;
        }

        .details {
            margin-right: 30px;

            p {
                margin: 0;
                font-size: .75rem;
                text-align: right;

                a {
                    padding-left: 7px;
                }

                &:first-child {
                    color: #4F4F4F;
                }

                &:last-child {
                    font-weight: bolder;
                    margin-top: 3px;
                }
            }
        }

        .dispayPicture {
            img {
                width: 80%;
            }
        }
    }
}

button {
    border: none;
    background: transparent;
}
</style>

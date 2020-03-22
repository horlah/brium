<template>
    <header class="header">
        <button @click="toggleSideBar">
            <img src="../assets/menu.svg" alt="menu icon">
        </button>

        <div>
            <button @click="setActiveDropDown('messages')">
                <img src="../assets/mail.svg" alt="mail icon">
                <span class="count">2</span>
                <DropMenu v-show="activeDropDown === 'messages'">
                    <template v-slot:title>
                        <h4>Messages</h4>
                    </template>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                </DropMenu>
            </button>
            <button @click="setActiveDropDown('emergency')">
                <span class="count">2</span>
                <img src="../assets/siren.svg" alt="siren icon">
                <DropMenu v-show="activeDropDown === 'emergency'">
                    <template v-slot:title>
                        <h4>EMERGENCY</h4>
                    </template>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                    <li>
                        <div>
                            Ekpoto Liberty <span class="label">(EPE-2014-LG)</span>
                        </div>
                        <div class="label primary-color">see on map</div>
                    </li>
                </DropMenu>
            </button>

            <div class="line"></div>

            <div class="details">
                <p>4:33pm, Monday February 12 2018</p>
                <p>Tejumola David <button @click="signOut()">Sign Out</button></p>
            </div>
            <div class="dispayPicture">
                <img src="../assets/user.png" alt="user display picture">
            </div>
        </div>
    </header>
</template>

<script>
import DropMenu from './Drop-Menu';
import * as firebase from 'firebase';

export default {
    name: 'top-nav',
    components: {
        DropMenu
    },
    data: () => {
        return {
            activeDropDown: ''
        };
    },
    props: {
        msg: String
    },
    methods: {
        toggleSideBar() {
            this.$store.dispatch('SET_SIDEBAR_STATE', !this.$store.getters.SidebarState);
        },
        setActiveDropDown(activeDropDown) {
            this.activeDropDown = this.activeDropDown === activeDropDown ? '' : activeDropDown;
        },
        signOut() {
            this.$store.dispatch('SET_LOADER_STATE', true);
            firebase.auth().signOut().then(() => {
                this.$router.push({ name: 'Login', params: { state: 'logout' } });
                this.$store.dispatch('SET_LOADER_STATE', false);
                localStorage.clear('TOKEN');
            }).catch(() => this.$store.dispatch('SET_LOADER_STATE', false));
        }
    }
};
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

            a,
            button {
                color: var(--primary-color);
            }

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
    position: relative;
}

.count {
    position: absolute;
    background: red;
    color: var(--white-color);
    padding: 3px 6px;
    border-radius: 50px;
    font-size: .6rem;
    right: 6px;
    top: -6px;
}
</style>

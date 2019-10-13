<template>
    <section class="modal">
        <div>
            <!-- <component v-bind:is="activeModal"></component>
            <AddVehicle /> -->
            <slot></slot>
        </div>
    </section>
</template>

<script>
// import AddVehicle from '@/components/Add-Vehicle-Modal'

export default {
    name: 'modal',
    props: {
        activeModal: String
    // },
    // components: {
    //     AddVehicle
    }
};
</script>

<style lang="scss">
.modal {
    background: rgba(91, 90, 90, 0.74);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        width: 30%;
        background: var(--white-color);
        padding: 40px 0;
        box-shadow: 3px 4px 4px rgba(197, 191, 191, 0.31);
        border-radius: 10px;
    }

    form {
        width: 80%;
        margin: auto;

        .input {
            margin-top: 20px;
        }

        input {
            width: calc(100% - 20px);
            border: none;
            border-bottom: 1px solid #E1E1E1;
            padding: 10px;
            font-size: .8rem;

            &:focus {
                outline: none;
                border-bottom-color: var(--primary-color);
            }
        }

        button {
            margin-top: 10px;

            &.normal-button {
                color: var(--white-color);
                background: linear-gradient(180deg, #14ACDB 0%, #1470DB 100%);
                border-radius: 3px;
                padding: 13px 0;
                width: 200px;
            }
        }
    }
}
</style>

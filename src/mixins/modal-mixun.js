export default {
    methods: {
        closeModal: function() {
            this.$store.dispatch('SET_MODAL_STATE', !this.$store.getters.ShowModalState);
        }
    }
};

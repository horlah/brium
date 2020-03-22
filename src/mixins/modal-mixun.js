import Chart from 'chart.js';

export default {
    methods: {
        closeModal: function() {
            this.$store.dispatch('SET_MODAL_STATE', !this.$store.getters.ShowModalState);
        },
        setupChart: function(chartData) {
            const ctx = document.getElementById(chartData.elementId);
            let chartOption = {};
            if (chartData.type === 'line') {
                chartOption = {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [
                            {
                                display: true
                            }
                        ],
                        yAxes: [
                            {
                                display: true,
                                gridLines: {
                                    display: false
                                }
                            }
                        ]
                    }
                };
            } else {
                chartOption = {
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            fontColor: '#ffffff'
                        }
                    },
                    outerRadius: 250
                };
            }
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: {
                    labels: chartData.labels,
                    datasets: [
                        {
                            data: chartData.data,
                            fill: false,
                            borderWidth: chartData.type === 'line' ? 3 : 0,
                            pointBackgroundColor: '#FF9100',
                            backgroundColor: ['#FD784E', '#1470DB']
                        }
                    ]
                },
                options: chartOption
            });
            console.log(myChart);
        }
    }
};

export const data = {
    labels: ['March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Dataset 1',
            data: [10, 40, 39, 80, 40],
            borderColor: '#15B76B',
            // borderWidth: 5,
            backgroundColor: '#15B76B',
            fill: true,
            
            cubicInterpolationMode: 'monotone',
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    interaction: {
        intersect: false,
    },
    scales: {
        x : {
            display: false
        },
        y: {
            display: false
        }
    },
}

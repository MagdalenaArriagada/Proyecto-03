export function crearGrafico (labels, datasets,chartNode, chartType){
    
    const data = {
        labels, datasets
    }


    const config = {
        type: chartType,
        data: data,
        options : {}
    }

    return new Chart(chartNode,config)
}

export function generarEtiquetas(data){
    
    const labels = data.DailyForecasts.map(data => new Date(data.Date).toLocaleDateString())

    return labels
}

export function generarDataset(data){

    const datasets = [{
        label: 'Pronóstico T° máxima de los próximos 5 días',
        backgroundColor: 'rgb(255,99,132)',
        borderColor: 'rgb(255,99,132)',
        data : data.DailyForecasts.map(
            data => data.Temperature.Maximum.Value
        )
        
    }]

    return datasets

}

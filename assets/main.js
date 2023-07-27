import { crearGrafico } from "./chart.js"
import { obtenerPronosticoPorCiudad } from "./accuweather-api.js"
import { generarEtiquetas } from "./chart.js"
import { generarDataset } from "./chart.js"

/* Datos para Uso de API de Accuuweather */
const apikey = 'wa98WAqONdUhh3ZlwLt0dR3T0ecyORQH'
const baseURL = 'https://dataservice.accuweather.com'

/* Arreglo codigos de ciudades */
/* Santiago - Buenos Aires - Lima - Brasilia - Quito - Caracas - La Paz - Asuncion - Montevideo */
const ciudades = ['60449','7894','264120','43348','129846','353020','33655', '257012','349269'] 

/* Valores de botones desde HTML */
let btnSantiago = document.querySelector('#btnSantiago');
let btnBAires = document.querySelector('#btnBAires');
let btnLima = document.querySelector('#btnLima');
let btnBrasilia = document.querySelector('#btnBrasilia');
let btnQuito = document.querySelector('#btnQuito');
let btnCaracas = document.querySelector('#btnCaracas');
let btnLaPaz = document.querySelector('#btnLaPaz');
let btnAsuncion = document.querySelector('#btnAsuncion');
let btnMontevideo = document.querySelector('#btnMontevideo');



/* Se agregan eventos a cada boton */
let dataPronostico = ''
let myChart = ''
btnSantiago.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[0],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
        
} )

btnBAires.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[1],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )

btnLima.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[2],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )

btnBrasilia.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[3],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )

btnQuito.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[4],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )

btnCaracas.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[5],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )

btnLaPaz.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[6],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
} )

btnAsuncion.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[7],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
} )

btnMontevideo.addEventListener('click', async () => {
    if(myChart!=''){
        myChart.destroy();
    }
    dataPronostico = await obtenerPronosticoPorCiudad(ciudades[8],baseURL,apikey);
    const etiquetas = generarEtiquetas(dataPronostico);
    const datasets = generarDataset(dataPronostico);
    const canvasNode = document.getElementById('myChart');
    myChart = crearGrafico(etiquetas, datasets,canvasNode,'line');
    
} )


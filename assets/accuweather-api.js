export async function obtenerPronosticoPorCiudad (idLugar,baseURL,apikey){
    
    const uri = `forecasts/v1/daily/5day/${idLugar}?apikey=${apikey}&language=es&details=false&metric=true`
    const url = new URL(`${baseURL}/${uri}`)

    const fetchResponse = await fetch (url)

    const data = await fetchResponse.json()
    
    return data

    
}


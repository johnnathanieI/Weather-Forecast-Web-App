const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=calgary&units=metric'
const apiKEY = 'ceb6f92bf27c969a3a1cf8a2162f99f7'

async function retrieveWeather() {
    const response = await fetch(apiURL + `&appid=${apiKEY}`)
    var data = await response.json()

    console.log(data)
}

retrieveWeather()
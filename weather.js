const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const apiKEY = 'ceb6f92bf27c969a3a1cf8a2162f99f7'
const citySearch = document.querySelector('.search input')
const weatherIcon = document.querySelector('.weather-icon')

// ADD A FEATURE WHERE IT ASKS FOR USER LOCATION TO DETERMINE CITY AS DEFAULT

citySearch.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' || event.key === 'Return') {
        retrieveWeather(citySearch.value)
    }
})

async function retrieveWeather(city) {
    const response = await fetch(apiURL + `${city}&appid=${apiKEY}`)
    var data = await response.json()

    if (response.status == 404) {
        citySearch.style.color = 'rgb(226, 85, 85)'
        citySearch.value = 'Invalid input...'
    } else {
        citySearch.style.color = '#222'

        document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + '°c'
        document.querySelector('.feelsTemperature').innerHTML = Math.round(data.main.feels_like) + '°c'
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.wind-speed p').innerHTML = data.wind.speed + ' km/h'
        document.querySelector('.humidity p').innerHTML = data.main.humidity + '% Humidity'

        switch (data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = '/imgs/clouds.png'
                break
            case 'Rain':
                weatherIcon.src = '/imgs/rain.png'
                break
            case 'Drizzle':
                weatherIcon.src = '/imgs/drizzle.png'
                break
            case 'Mist':
                weatherIcon.src = '/imgs/mist.png'
                break
            case 'Snow':
                weatherIcon.src = '/imgs/snow.png'
            default:
                weatherIcon.src = '/imgs/clear.png'
        }

        console.log(data)
    }
    
}

// *** FOR FUTURE USE IF IMPLEMENTING PREDICTIONS BOX ***
//const sixteenAPIURL = 'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7'
//let cityID = ''
// async function retrievePredictions() {
//     const response2 = await fetch(sixteenAPIURL + `&id=${cityID}&appid=${apiKEY}`)
//     var data2 = await response2.json()

//     console.log(data2)
// }

// retrievePredictions()
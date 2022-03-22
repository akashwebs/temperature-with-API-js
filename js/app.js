const API_Key = `6ddb3ac458732b38c6fe42ce4738dfed`;


document.getElementById('serach-button').addEventListener('click', () => {
    const cityName = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
        .catch(err => console.log(err))

})

const displayText = (id, value) => {
        document.getElementById(id).innerText = value;
    }
    // display result form api
const displayTemp = temp => {
    console.log(temp)

    displayText('city', temp.name);
    displayText('temperature', temp.main.temp);
    displayText('condition', temp.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    document.getElementById('iconTemp').setAttribute('src', url)
}

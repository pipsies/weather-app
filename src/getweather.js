function getweather() {
    let lat = '	51.5085';
    let lon = '-0.1257';
    let key = 'd3814a918f57bb72f00229b6f3b462ff';
    let lang = 'en';
    let units = 'metric';
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d3814a918f57bb72f00229b6f3b462ff';
    fetch(url);
}
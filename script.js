const key = document.getElementById("key")
const content = document.getElementById("cont")

async function search() {
    console.log(key.value)
    content.innerHTML = ""

    if(key.value == ""){
        content.innerHTML =`No Input`
        content.classList.add("error_input")
        key.style.border = "1px solid red"
    }else{
        content.classList.remove("error_input")
        key.style.border = "2px solid #215FC6"
        const respones = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${key.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
        const data = await respones.json()
        // console.log(data)
        // console.log(data.weather[0].description)
        // console.log(data.main.temp)
        // console.log(data.wind.speed)

        content.innerHTML = ""
        content.innerHTML = `
        <h3>Weather of <span style="display: inline;color: #A7E6FF;">${key.value}</span></h3>
        <div class="details">
            <p>Sky Condition : <span style="display: inline;color: #975A7E;">${data.weather[0].description}</span></p>
            <p>Temperature : <span style="display: inline;color: #975A7E;">${data.main.temp} C</span></p>
            <p>Wind Speed : <span style="display: inline;color: #975A7E;">${data.wind.speed} km/h</span></p>
        </div>
        `
        key.value = ""
    }
}
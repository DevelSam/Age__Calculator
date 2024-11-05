import { DateTime } from 'https://cdn.skypack.dev/luxon'
const age = datepicker('.age-calculate',  {id : 1});

const button = document.getElementById('button')
button.addEventListener('click', function(e){
    e.preventDefault()
    let  age_men = document.querySelector('.age-calculate').value
    const result = document.getElementById('result')
    if(!age_men){
        result.innerText ='Заполните дату рождения!'
        return
    }
    let dateObj = DateTime.fromJSDate(new Date(age_men));
    
    if (!dateObj.isValid) {
        result.innerText = 'Неверный формат даты!'
        return
    }
    const now = DateTime.now()
    if(dateObj.year > now.year || dateObj.year == now.year && dateObj.month > now.month ||
        dateObj.year == now.year && dateObj.month === now.month && dateObj.day > now.day
    ){
        result.innerText = 'Дата рождения не может быть больше текущей даты!'
        return
    }
    
    
    
    const { years, months } = DateTime.now().diff(dateObj, ['years', 'months']).toObject();
    result.innerText = `Тебе ${Math.floor(years)} лет и ${Math.floor(months)} месяцев`;
});
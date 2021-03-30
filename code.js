//1) Напишіть код, який
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

/*
textElement=document.getElementById('main_header');
textElement.innerText='February-2021';
*/

//b) робить шириниу елементу ul 400px
/*
let widthElements = document.getElementsByTagName('ul');
for (let i = 0; i < widthElements.length; i++) {
    widthElements[i].style.width='400px';
}
*/

// c) робить шириниу всіх елементів з класом linkList шириною 50%
/*
let widthLink = document.getElementsByClassName('linkList');
for (let i = 0; i < widthLink.length; i++) {
    widthLink[i].style.width='50%';
}*/

// d) отримує текст який зберігається в елементі з класом listElement2
/*
let list = document.getElementsByClassName('listElement2');
for (let i = 0; i < list.length; i++) {
   console.log(list[i].innerText);
}
*/

// e) отримує всі елементи li та змінює ім колір фону на сірий
/*
let liElements=document.getElementsByTagName('li');
for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.backgroundColor='blue';
}
*/

//  f) отримує всі елементи 'a' та додає їм клас anchor
/*
let aElements = document.getElementsByTagName('a');
for (let i = 0; i < aElements.length; i++) {
    aElements[i].className='anchor';
}*/

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
/*
let aElements = document.getElementsByTagName('a');
for (let i = 0; i < aElements.length; i++) {
    if (aElements[i].innerText==='link3'){
        aElements[i].style.fontSize='40px';
    }
}
*/

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
/*
let aElements = document.getElementsByTagName('a');
for (let i = 0; i < aElements.length; i++) {
    let text=aElements[i].innerText;
    aElements[i].className='element_'+text;
}
*/

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

/*
let subElements= document.getElementsByClassName('sub-header');
for (let i = 0; i < subElements.length; i++) {
    subElements[i].style.backgroundColor=prompt('color');

}*/

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()
/*
let subElement= document.getElementsByClassName('sub-header');
for (let i = 0; i < subElement.length; i++) {
   if(subElement[i].innerText==='content 2 segment'){
       subElement[i].style.color=prompt();
   }
}
*/

//  k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
/*
let textContent = document.getElementsByClassName('content_1');
for (let i = 0; i < textContent.length; i++) {
   textContent[i].innerText=prompt();
}
*/

// l) отримати елементи p та змінити їм padding на 20px
/*
let pElement=document.getElementsByTagName('p');
for (let i = 0; i < pElement.length; i++) {
   pElement[i].style.padding='20px';
}*/

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
/*
let textElement= document.getElementsByClassName('text2');
for (let i = 0; i < textElement.length; i++) {
   textElement[i].innerText='February-2021';
}*/


// Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (let i = 0; i < rules.length; i++) {
    let divka = document.createElement('div');
    document.body.appendChild(divka);
    let divka2 = document.createElement('div');
    document.body.appendChild(divka2);
    divka.innerHTML=`<h2>${rules[i].title}<h2/>`;
    divka2.innerHTML=`<p>${rules[i].body}<p/>`;

}
*/
//Дано 2 масиви з рівною кількістю об'єктів.
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
/*
let usersWithId = [

    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
let mass = [];

for (let i = 0; i < 4; i++) {
    citiesWithId[i].user_id = usersWithId[i].id;
    usersWithId[i].address = citiesWithId[i];
    mass.push(usersWithId[i]);
}
console.log(mass);

for (let i = 0; i < mass.length; i++) {
    divka = document.createElement('div');
    divka2 = document.createElement('div');
    document.body.appendChild(divka);
    document.body.appendChild(divka2);
    divka.innerHTML = `<h2>My id is ${mass[i].id}, my name is ${mass[i].name}, i'm ${mass[i].age} and my status ${mass[i].status}<h2/>`;
    divka2.innerHTML = `<p>My user id is ${mass[i].address.user_id},i live in ${mass[i].address.country},${mass[i].address.city}<p/>`
}
*/






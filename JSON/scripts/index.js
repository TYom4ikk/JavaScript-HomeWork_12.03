//import book1 from '../JSONs/book-1.json' assert {type: 'json'};
//import book2 from '../JSONs/book-2.json' assert {type: 'json'};
//import book3 from '../JSONs/book-3.json' assert {type: 'json'};

const book1 = {
    "name": "1984",
    "year": 1949,
    "description": "В антиутопическом мире романа '1984' Джордж Оруэлл изображает общество, где власть всесильного Государства контролирует каждое действие и мысль своих граждан. Главный герой, Уинстон Смит, работает в Министерстве Правды, где занимается редактированием исторических документов, чтобы они соответствовали текущей политической линии. Постепенно Уинстон начинает сомневаться в идеологии Государства и влюбляется в Джулию, что ставит их под угрозу. Роман исследует темы тотального контроля, индивидуальной свободы и истины."
};

const jsonString = JSON.stringify(book);

console.log(jsonString);

const bookInfoBlock = document.getElementById('book-info');
let book = JSON.parse(book1);

console.log(book["name"]);

function findBookByName(book){

}

function info(book){
}

function sortByDate(library){

}

const library = {

}
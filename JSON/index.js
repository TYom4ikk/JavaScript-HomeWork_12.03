document.addEventListener('DOMContentLoaded', () => {
    library.loadBooks('book1.json');
    library.loadBooks('book2.json');
    library.loadBooks('book3.json');
});

const InfoBlock = document.getElementById('book-info');

const library = {

    books:[],

    loadBooks(file){
        fetch(file)
        .then(response => response.json())
        .then(data => {
            const bookObj = JSON.parse(JSON.stringify(data, null, 2));
            this.books.push(bookObj);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },

    findByName(name) {
        let isFound = false;
        for(let book of this.books){
            if(name == book.name){
                isFound = true;
                return book;
            }
        }
        isFound ? alert(`Книга ${name} найдена!`) :
        alert(`Книга ${name} НЕ найдена!`);
        return null;
    },

    showInfo(book){
        InfoBlock.innerHTML =
        `<h2>${book.name} </h2><p><b>${book.year} год</b></p>
        <p>${book.description}</p>`;
    },

    sortByDate(){
        this.books.sort((a,b) => a.year - b.year);
    },

    test(){
        this.sortByDate();
        this.findByName('Мастер и Маргарита');
        this.showInfo(this.findByName('1984'));
    }
};
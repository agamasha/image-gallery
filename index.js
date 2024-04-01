const url1 = 'https://api.unsplash.com/search/photos?query=';
const url2 = '&orientation=landscape&per_page=30&client_id=czKmMf0ktZi7BtN2STWFEnbHxf13y3aciCbc2TQwyOc';

let photoWrapper = document.querySelector('.pic-container');
let searchForm = document.querySelector('.search-form');
let clearButton = document.querySelector('.form-cross');

if (typeof formData === 'undefined') {
    getData('random');
}

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(searchForm);
    let searchWord = formData.get('search');
    getData(searchWord);
})

clearButton.addEventListener('click', function () {
    searchForm.reset();
})

async function getData(searchWord) {
    const res = await fetch(url1 + searchWord + url2);
    const data = await res.json();
    showData(data);
}

async function showData(data) {
    while (photoWrapper.firstChild) {
        photoWrapper.removeChild(photoWrapper.firstChild);
    }
    for (let i = 0; i < data.results.length; i++) { 
        let image = data.results[i].urls.regular;
        const div = document.createElement('div');
        div.classList.add('photo');
        div.style.backgroundImage = `url(${image})`;
        photoWrapper.appendChild(div);
    }
}

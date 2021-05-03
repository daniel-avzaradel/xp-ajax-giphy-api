let API_key = 'Uv3KYuiOFUoRWU2FPCmzkV0VJQTQ74N0';
const send = document.getElementById('send')
const search = document.getElementById('search')
const gif = document.querySelector('.gif')

let xhr = new XMLHttpRequest();
let image = document.createElement('img');
image.style.height = "100%";
image.style.maxWidth = "100%";
image.style.display = "block";
image.style.borderRadius = "5px";

gif.appendChild(image);

send.addEventListener('click', (e) => {
    e.preventDefault();

    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=${API_key}`);
    xhr.send();
    xhr.responseType = 'json';
    let url = '';
    xhr.onload = function() {
        console.log(xhr.response)
        if (xhr.status != 200) {
            console.log(`Error: ${xhr.status}: ${xhr.statusText}`)
        }
        let random = Math.floor(Math.random() * 10)
        console.log(random)
        url = xhr.response.data[random].images.original.url;
        image.setAttribute('src', `${url}`)
}
})



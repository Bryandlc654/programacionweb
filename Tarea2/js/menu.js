// Array con los elementos del menú
const menuItems = [
    {
        text: "Elefante",
        imgSrc: "",
        href: "#"
    },
    {
        text: "Rinoceronte",
        imgSrc: "",
        href: "#"
    },
    {
        text: "Jirafa",
        imgSrc: "",
        href: "#"
    },
    {
        text: "Zebra",
        imgSrc: "#",
        href: "#"
    },
    {
        text: "Leones",
        imgSrc: "",
        href: "#"
    }
];

// Obtén el elemento de navegación
const navElement = document.querySelector('.header__nav');

// Crea un contenedor de lista (<ul>) para los elementos del menú
const ulElement = document.createElement('ul');
ulElement.classList.add('nav__list');

// Obtén la URL actual
const currentURL = window.location.href;

// Recorre los elementos del menú utilizando un bucle for
for (let i = 0; i < menuItems.length; i++) {
    // Crea un elemento de lista (<li>) para cada elemento del menú
    const liElement = document.createElement('li');
    liElement.classList.add('list__item');

    // Crea un elemento de imagen (<img>) y establece su fuente y atributo alt
    const imgElement = document.createElement('img');
    imgElement.src = menuItems[i].imgSrc;
    imgElement.alt = menuItems[i].text;

    // Crea un elemento de enlace (<a>) y establece su texto
    const aElement = document.createElement('a');
    aElement.classList.add('item__link');

    // Verifica si el currentURL incluye "index.html"
    if (currentURL.includes('index')) {
        // Si estamos en index.html, los enlaces apuntan a './views/menuItems[i].text.html'
        aElement.href = `./views/${menuItems[i].text}.html`;

        imgElement.src= `./assets/${menuItems[i].text}.svg`;
    } else {
        // Si no estamos en index.html, los enlaces apuntan a './menuItems[i].text.html'
        aElement.href = `./${menuItems[i].text}.html`;

        imgElement.src= `../assets/${menuItems[i].text}.svg`;

    }

    // Establece el texto del enlace
    aElement.textContent = menuItems[i].text;

    // Agrega el elemento de imagen al elemento de lista
    liElement.appendChild(imgElement);
    // Agrega el elemento de enlace al elemento de lista
    liElement.appendChild(aElement);
    // Agrega el elemento de lista a la lista
    ulElement.appendChild(liElement);
}

// Agrega la lista al elemento de navegación
navElement.appendChild(ulElement);

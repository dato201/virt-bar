let card = [
    {
        image: "https://www.shutterstock.com/image-photo/red-wine-bottle-black-blank-260nw-2364803075.jpg",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },
    {
        image: "https://png.pngitem.com/pimgs/s/7-78179_wine-bottle-png-image-white-wine-bottle-png.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://www.pngall.com/wp-content/uploads/15/Wine-Bottle-PNG-Images.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },
    {
        image: "https://png.pngtree.com/png-vector/20240207/ourlarge/pngtree-red-wine-drink-bottle-png-image_11680582.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://static.vecteezy.com/system/resources/previews/016/475/594/original/transparent-white-wine-bottle-with-blank-label-and-gold-foil-capsule-seal-png.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://www.pngall.com/wp-content/uploads/15/Wine-Bottle.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://e1.pngegg.com/pngimages/87/504/png-clipart-champagne-bottles-gold-and-black-wine-bottle-illustration.png",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-red-wine-bottle-image_2224353.jpg",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://www.shoprite.co.za/medias/10167754EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w4OTM4OXxpbWFnZS9wbmd8aW1hZ2VzL2hiNi9oZGQvOTg1ODc4NTA1MDY1NC5wbmd8ZWFlZDg5NjhmYTI1ZDViNWE3ODJmNGQ0ZGVhOTcyNTAwZGE4ODY1YWNiMTA2NmY2OTA2NThiMTg1N2I4MDRhMg",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.19,
        grade: 5,
    },

    {
        image: "https://www.shoprite.co.za/medias/10163177EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w3NjIzN3xpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oYWQvMTA0MzI3NDQ5MTQ5NzQucG5nfGYyMWIxNTdjNDAxMTgxOThkOGM0NjkyOGRjM2ExOThmMDg0OTUwZmNmNjlhMTViN2FkMjU2MGRjMTBlYjNiNzk",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

    {
        image: "https://www.liquortoship.com/cdn/shop/products/NewProject-2023-09-22T020823.053.jpg?v=1695414592",
        name: "Lorem ipsum",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 5,
    },

];

localStorage.setItem("card", JSON.stringify(card));

let cardData = localStorage.getItem('card');

cardData = JSON.parse(cardData);
console.log(cardData);

let div = "";
for (let i = 0; i < cardData.length; i++) {
    div += `
    <div class="card">
    <div class="card_img" style="background-image: url('${cardData[i].image}');"></div>
    <div>
            <h3>${cardData[i].name}</h3>
            <p>${cardData[i].title}</p>
            <h3 class="h3_2">${cardData[i].price} ₾</h3>
            <h3 class="h3_3"><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i><i class="fa-solid fa-star" style="color: #FFD43B;"></i>
            </h3>
        </div>
    </div>
`;
}

document.getElementById("demo").innerHTML = div;
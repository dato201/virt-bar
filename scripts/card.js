let card = [
    {
        image: "https://www.shutterstock.com/image-photo/red-wine-bottle-black-blank-260nw-2364803075.jpg",
        name: "Lorem ipsum 1",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 8,
        new: true
    },
    {
        image: "https://static.vecteezy.com/system/resources/thumbnails/021/217/339/small_2x/red-wine-bottle-png.png",
        name: "Lorem ipsum 2",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 7,
        new: false

    },

    {
        image: "https://www.pngall.com/wp-content/uploads/15/Wine-Bottle-PNG-Images.png",
        name: "Lorem ipsum 3",
        title: "Lorem ipsum dolor sit amet.",
        price: 7.00,
        grade: 8.9,
        new: false

    },
    {
        image: "https://png.pngtree.com/png-vector/20240207/ourlarge/pngtree-red-wine-drink-bottle-png-image_11680582.png",
        name: "Lorem ipsum 4",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 8.7,
        new: true
    },

    {
        image: "https://static.vecteezy.com/system/resources/previews/016/475/594/original/transparent-white-wine-bottle-with-blank-label-and-gold-foil-capsule-seal-png.png",
        name: "Lorem ipsum 5",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 10,
        new: false
    },

    {
        image: "https://www.pngall.com/wp-content/uploads/15/Wine-Bottle.png",
        name: "Lorem ipsum 6",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 6.3,
        new: false

    },

    {
        image: "https://e1.pngegg.com/pngimages/87/504/png-clipart-champagne-bottles-gold-and-black-wine-bottle-illustration.png",
        name: "Lorem ipsum 7",
        title: "Lorem ipsum dolor sit amet.",
        price: 20,
        grade: 9.5,
        new: false

    },

    {
        image: "https://png.pngtree.com/element_our/20200609/ourlarge/pngtree-red-wine-bottle-image_2224353.jpg",
        name: "Lorem ipsum 8",
        title: "Lorem ipsum dolor sit amet.",
        price: 15.20,
        grade: 10,
        new: false

    },

    {
        image: "https://www.shoprite.co.za/medias/10167754EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w4OTM4OXxpbWFnZS9wbmd8aW1hZ2VzL2hiNi9oZGQvOTg1ODc4NTA1MDY1NC5wbmd8ZWFlZDg5NjhmYTI1ZDViNWE3ODJmNGQ0ZGVhOTcyNTAwZGE4ODY1YWNiMTA2NmY2OTA2NThiMTg1N2I4MDRhMg",
        name: "Lorem ipsum 9",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.19,
        grade: 6,
        new: true
    },

    {
        image: "https://www.shoprite.co.za/medias/10163177EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3w3NjIzN3xpbWFnZS9wbmd8aW1hZ2VzL2gzZi9oYWQvMTA0MzI3NDQ5MTQ5NzQucG5nfGYyMWIxNTdjNDAxMTgxOThkOGM0NjkyOGRjM2ExOThmMDg0OTUwZmNmNjlhMTViN2FkMjU2MGRjMTBlYjNiNzk",
        name: "Lorem ipsum 10",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 4,
        new: false
    },

    {
        image: "https://www.liquortoship.com/cdn/shop/products/NewProject-2023-09-22T020823.053.jpg?v=1695414592",
        name: "Lorem ipsum 11",
        title: "Lorem ipsum dolor sit amet.",
        price: 13.00,
        grade: 7.5,
        new: false
    },
];


localStorage.setItem("card", JSON.stringify(card));

let cardData = localStorage.getItem('card');

cardData = JSON.parse(cardData);
console.log([cardData]);

let div = "";
for (let i = 0; i < cardData.length; i++) {
    div += `
    <div class="card">
    <div class="card_img" style="background-image: url('${cardData[i].image}');"></div>
        <div class="card_div_container">
            <h3>${cardData[i].name}</h3>

            <p>${cardData[i].title}</p>

            <div class="cart_div">
            <h3 class="h3_2">${cardData[i].price} ₾</h3>
            <h3 class="h3_3">${cardData[i].grade} /10 <i class="fa-solid fa-star" style="color: #FFD43B;"></i></h3>
            </div>
        </div>
    </div>
`;
}

document.getElementById("demo").innerHTML = div;
document.getElementById("demo2").innerHTML = div;
let news = [
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "5/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "4/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "3/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "2/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "1/4/2024",
    },

];
let title = document.getElementById('title');
let text = document.getElementById('text');
let data2 = document.getElementById('data');

localStorage.setItem("newsData", JSON.stringify(news));


let data = localStorage.getItem('newsData');
data = JSON.parse(data);

console.log(data);

let div = "";
for (let i = 0; i < data.length; i++) {
    div += `
    <section>
        <h2>${data[i].title}</h2>
        <p>${data[i].text}</p>
        <p class="h7">${data[i].data}</p>
    </section>
`;
}

document.getElementById("demo").innerHTML = div;
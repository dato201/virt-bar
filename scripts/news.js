let news = [
    {
        title: "hello world world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "5/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim consectetur rerum vel placeat, iusto esse iste impedit, autem reiciendis, fugiat nisi quibusdam maxime eligendi dicta distinctio odio aspernatur repellat. Quo, repudiandae itaque ex vel velit fuga, hic iste nostrum numquam rerum autem incidunt maxime odit quisquam quos nihil tempore nulla blanditiis deserunt esse laboriosam tempora officiis! Quis, repellat quos? Cumque, consequuntur sequi, doloremque totam amet cum eius aperiam vel id et velit fugit repellat, nulla laudantium veniam explicabo. Fuga aperiam libero doloremque nemo quaerat accusamus delectus doloribus nesciunt sapiente. Eaque reprehenderit fugit odit. Voluptates consequatur ab inventore blanditiis aliquid repellat totam nobis voluptate laborum animi. Ex, eligendi quae dolorum quibusdam numquam ut, maiores distinctio quis dolorem fugit autem ullam? Modi perspiciatis, illo sapiente eos alias, molestiae mollitia corrupti quos, nisi aperiam similique aliquid distinctio debitis. Recusandae magni esse nulla, omnis quas odit modi est ipsam laudantium consequuntur exercitationem consequatur? Praesentium deleniti temporibus dignissimos eveniet debitis, veritatis odio eius, ipsam necessitatibus et asperiores eos, atque vitae rem? Vitae, corporis labore architecto aspernatur reiciendis totam hic eius, eligendi tempore, nihil laborum.",
        data: "4/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "3/4/2024",
    },
    {
        title: "hello world Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "2/4/2024",
    },
    {
        title: "hello world",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        data: "1/4/2024",
    },

];

localStorage.setItem("newsData", JSON.stringify(news));


let data = localStorage.getItem('newsData');
data = JSON.parse(data);

console.log(data);

let div = "";
for (let i = 0; i < data.length; i++) {
    div += `
    <section>
        <h1>${data[i].title} | ${data[i].data}</h1>
        <p>${data[i].text}</p>
    </section>
`;
}
// div += "</section>";

document.getElementById("demo").innerHTML = div;
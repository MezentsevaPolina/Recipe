
let data;
    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("myForm");
        form.addEventListener("submit", async e => {
            document.getElementById('lupa').style.display = "none";
            document.getElementById('pupa').style.display = "block";

            e.preventDefault();

            // TODO: fetch data from API;
            const input = document.getElementById("myInput")

            const response = await fetch(`https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${input.value}`);
            data = await response.json();

            render();
        })
    });

    function render() {
        const list = document.getElementById("myUl");
        let result = "";

        for (let item of data.hits) {
            result += `<br><li class = "ing">
        <b>${item.recipe.label}</b><br/>
        <img src="${item.recipe.image}"><br/>`;
        if (item.recipe.ingredients)
        {
            result += `${item.recipe.ingredientLines.join(", ")}<br/></li>`;
        }
        }

        list.innerHTML = result;
        document.getElementById('lupa').style.display = "block";
        document.getElementById('pupa').style.display = "none";
    }
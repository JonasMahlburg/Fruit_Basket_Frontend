const fetchGetUrl = "http://127.0.0.1:8000/fruits";
const fetchPostUrl = "http://127.0.0.1:8000/fruits/";


async function fetchTestPost() {
    let name = document.getElementById('input_name').value;
    let weight = parseInt(document.getElementById('input_weight').value);
    let color = document.getElementById('input_color').value;

    const data = {
        name: name,
        gewicht: weight,
        farbe: color
    };

    console.log("Neue Frucht:", data);  // Für Testzwecke

    let response = await fetch(fetchPostUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    let result = await response.json();

    fetchTestGet(); //used to show 
}

async function fetchTestGet() {
    let result = await fetch(fetchGetUrl);
    let fruits = await result.json();
    console.log(fruits);

    const listElement = document.getElementById('fruit_list');
    listElement.innerHTML = '';

    fruits.forEach(fruit => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${fruit.name}</strong><br>
            Gewicht: ${fruit.gewicht}g<br>
            Farbe: <span style="color:${fruit.farbe.toLowerCase()}">${fruit.farbe}</span>
        `;
        listElement.appendChild(listItem);
    });
}
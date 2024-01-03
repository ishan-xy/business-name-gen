let adj1 = "Amazing ",
    adj2 = "Crazy ",
    adj3 = "Fire ";

let name1 = "Engine ",
    name2 = "Foods ",
    name3 = "Garments ";

let word1 = "Bros",
    word2 = "Limited",
    word3 = "Hub";

const findRanWord = (c, d, e) => {

    let res = 'cde'.charAt(Math.floor(Math.random() * 3));
    switch (res) {
        case 'c':
            return c;
        case 'd':
            return d;
        case 'e':
            return e;

        default:
            return 'null';

    }
}

document.getElementById('generateButton').addEventListener('click', function () {

    const busName = {
        adj: findRanWord(adj1, adj2, adj3),
        name: findRanWord(name1, name2, name3),
        word: findRanWord(word1, word2, word3)
    }

    let business = busName.adj + busName.name + busName.word;

    let businessName = business; // replace this with your business name generation logic
    document.getElementById('businessName').innerText = businessName;
});
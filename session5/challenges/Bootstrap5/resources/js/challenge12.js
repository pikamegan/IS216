// [IMPORTANT]
// DO NOT MODIFY challenge12.html content
// YOU MUST WORK WITH WHAT IS GIVEN TO YOU



// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function highlight_words() {
    var items = document.querySelectorAll('.list-unstyled > li > p')
    var button = document.getElementsByTagName('button')[0]

    if (button.getAttribute('id') != 'pressed') {
        var input = prompt('Enter word length (words longer than this length will be highlighted for you)')
        items.forEach( function(item) {

            item.innerHTML = item.innerText
                .split(' ')
                .map(word => word.length > Number(input) ? `<span style="background-color: yellow">${word}</span>` : word)
                .join(' ')
        });
        button.setAttribute('id', 'pressed')
    }

    else {
        button.removeAttribute('id')
        items.forEach( function(item) {

            if( item.getElementsByTagName("span") ) {
                item.innerHTML = item.innerHTML
                .replaceAll(`<span style="background-color: yellow">`, "").replace("</span>", "");
            }
        })
        }
}

 
// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_num_words() {
    let items = document.querySelectorAll('.list-unstyled > li > p')

    var lengthArr = []

    for (item of items) {
        let content = item.innerText
        let words = content.split(" ")
        let numWords = words.length
        lengthArr.push(numWords)
    }

    var count = document.querySelectorAll('.list-unstyled > li > span')

    if (count[0].innerText == "") {
        for (let i = 0; i < count.length; i++) {
            count[i].innerHTML = `<strong>(${lengthArr[i]} words)</strong>`
        }
    }

    else {
        for (let i = 0; i < count.length; i++) {
            count[i].innerText = ""
        }
    }
}


// [TODO] IMPLEMENT THIS FUNCTION
// You may assume that all words in each paragraph are separated by one single whitespace.
function show_emoticons() {
    let items = document.querySelectorAll('.list-unstyled > li > p')

    items.forEach( function(item) {

        if( item.innerHTML.includes("⭐") || item.innerHTML.includes("❓") || item.innerHTML.includes("❗") ) {
            item.innerHTML = item.innerHTML
            .replaceAll(" ⭐", ",")
            .replaceAll(" ❓", "?")
            .replaceAll(" ❗", "!");
        }

        else {
            item.innerHTML = item.innerHTML
            .replaceAll(",", " ⭐")
            .replaceAll("?", " ❓")
            .replaceAll("!", " ❗");
        }
    })
}
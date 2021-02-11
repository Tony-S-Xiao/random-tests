const lotr = fetch('./lotr.txt')
.then(response=>response.text())
.then(result=>{
    let start_date = new Date();
    let string = result.replace(/[^a-zA-Z ]/g, "");
    let split_string = string.split(" ");
    let map = new Map();
    let word_count = 0;
    for(let word of split_string) {
        if(map.has(word)) {
            map.get(word).data++;
        } else {
            map.set(word, {data: 1});
        }
        ++word_count;
    }
    let end_date = new Date();
    console.log(Math.abs(start_date - end_date));
    let sorted_words = [];
    for(let [key, value] of map.entries()) {
        sorted_words.push({key, value:value.data});
    }
    sorted_words.sort((a,b)=>(b.value-a.value));
    for(let element of sorted_words) {
        console.log(`Word: ${element.key} Count: ${element.value}`);
    }
});

let baseURL = 'http://numbersapi.com'
let favNum = 23

// 1
async function part1(){
    let res = await $.getJSON(`${baseURL}/${favNum}?json`);
    console.log(res);
}
part1();

// 2
let favNums = [23,14,48]
async function part2(){
    let res = await $.getJSON(`${baseURL}/${favNums}?json`);
    console.log(res);
};
part2();

// 3
async function part3(){
    let res = await Promise.all(
        Array.from({length:4}, () => $.getJSON(`${baseURL}/${favNum}?json`))
    );
    res.forEach(data =>{$('body').append(`<p>${data.text}</p>`)});
}
part3();
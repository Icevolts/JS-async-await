$(function(){
    let baseURL = 'https://deckofcardsapi.com/api/deck';

    // 1
    async function part1(){
        let res = await $.getJSON(`${baseURL}/new/draw`);
        let {suit,value} = res.cards[0];
        console.log(`${value} of ${suit}`);
    }
    part1();

    // 2
    async function part2(){
        let firstDraw = await $.getJSON(`${baseURL}/new/draw`);
        let deckId = firstDraw.deck_id;
        let secDraw = await $.getJSON(`${baseURL}/${deckId}/draw`);
        [firstDraw,secDraw].forEach(res => {
            let {suit,value} = res.cards[0];
            console.log(`${value} of ${suit}`);
        })
    }
    part2();

    // 3
    async function part3(){
        let $btn= $('button');
        let $div = $('div');
        let data = await $.getJSON(`${baseURL}/new/shuffle`);
        $btn.show().on('click',async function(){
            let cardData = await $.getJSON(`${baseURL}/${data.deck_id}/draw`);
            let cardImg = cardData.cards[0].image;
            $div.append($('<img>', {src:cardImg}))
            if (cardData.remaining === 0) $btn.remove();
        });
    };
    part3();
});
        

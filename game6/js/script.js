
let btn = document.querySelector('.btn');
let input = document.querySelector('.answer');
let quest = document.querySelector('.quest')
let out = document.querySelector('.out')
let par1 = document.querySelector('.p1')
let par2 = document.querySelector('.p2')
let par3 = document.querySelector('.p3')
let par4 = document.querySelector('.p4')
let par5 = document.querySelector('.p5')
let par6 = document.querySelector('.p6')
let par7 = document.querySelector('.p7')
let par8 = document.querySelector('.p8')
let par9 = document.querySelector('.p9')
let par10 = document.querySelector('.p10')
let par11 = document.querySelector('.p11')
let par12 = document.querySelector('.p12')
let par13 = document.querySelector('.p13')
let par14 = document.querySelector('.p14')
let par15 = document.querySelector('.p15')
let par16 = document.querySelector('.p16')
let par17 = document.querySelector('.p17')
let par18 = document.querySelector('.p18')
let par19 = document.querySelector('.p19')
let par20 = document.querySelector('.p20')
let par21 = document.querySelector('.p21')
let par22 = document.querySelector('.p22')
let par23 = document.querySelector('.p23')
let par24 = document.querySelector('.p24')
let btnAll = document.querySelector('.all')
let answer = '';
let count = 1;
let datacount = 0;
let data = [
        ["Make a word: meumsu", "Make words: a) akemrt b) tdisamu c) inmeca", "Make words: a) oiatshpl b) ambk c)eakst akrp ", "What is your favourite place in the town?", "Where can you buy food?", "Where can you go if you are ill?", "Where can people watch a football match?", "What is the capital of your country?", "Name the biggest city in your region?", "What historical places in your country did you visit?", "A synonym to the phrase”very big”", "A synonym to the phrase “very small”", "A synonym to the phrase “very good”", "A synonym to the phrase” very old”", "Say 3 forms of the verb GO", "Look at the picture and say where the desk is", "The wardrobe in the picture is: a) big b) small c) black", "How many lamps are there in the picture?", "What colour is the chair?", "The chair is …. the desk. a) behind b) on the left c) at", "Make a sentence: are/on/The/pictures/three/ wall/the", "Make a sentence: to/kitchen/is/next/ the/ there/a living-room", "Make a sentence: shelves/the/on/books/ of/ a lot/are/There", "Where is your desk?"] 
        ];


btn.addEventListener('click', (e)=> {
        e.preventDefault()
})

function clearAndShow() {
        btnAll.style.display = 'none'
        par1.textContent = `Ответ 1: ${localStorage.getItem(data[0][0])}`;
        par2.textContent = `Ответ 2: ${localStorage.getItem(data[0][1])}`;
        par3.textContent = `Ответ 3: ${localStorage.getItem(data[0][2])}`;
        par4.textContent = `Ответ 4: ${localStorage.getItem(data[0][3])}`;
        par5.textContent = `Ответ 5: ${localStorage.getItem(data[0][4])}`;
        par6.textContent = `Ответ 6: ${localStorage.getItem(data[0][5])}`;
        par7.textContent = `Ответ 7: ${localStorage.getItem(data[0][6])}`;
        par8.textContent = `Ответ 8: ${localStorage.getItem(data[0][7])}`;
        par9.textContent = `Ответ 9: ${localStorage.getItem(data[0][8])}`;
        par10.textContent = `Ответ 10: ${localStorage.getItem(data[0][9])}`;
        par11.textContent = `Ответ 11: ${localStorage.getItem(data[0][10])}`;
        par12.textContent = `Ответ 12: ${localStorage.getItem(data[0][11])}`;
        par13.textContent = `Ответ 13: ${localStorage.getItem(data[0][12])}`;
        par14.textContent = `Ответ 14: ${localStorage.getItem(data[0][13])}`;
        par15.textContent = `Ответ 15: ${localStorage.getItem(data[0][14])}`;
        par16.textContent = `Ответ 16: ${localStorage.getItem(data[0][15])}`;
        par17.textContent = `Ответ 17: ${localStorage.getItem(data[0][16])}`;
        par18.textContent = `Ответ 18: ${localStorage.getItem(data[0][17])}`;
        par19.textContent = `Ответ 19: ${localStorage.getItem(data[0][18])}`;
        par20.textContent = `Ответ 20: ${localStorage.getItem(data[0][19])}`;
        par21.textContent = `Ответ 21: ${localStorage.getItem(data[0][20])}`;
        par22.textContent = `Ответ 22: ${localStorage.getItem(data[0][21])}`;
        par23.textContent = `Ответ 23: ${localStorage.getItem(data[0][22])}`;
        par24.textContent = `Ответ 24: ${localStorage.getItem(data[0][23])}`;
}
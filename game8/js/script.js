
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
let par25 = document.querySelector('.p25')
let btnAll = document.querySelector('.all')
let answer = '';
let count = 1;
let datacount = 0;
let data = [
        ["Name the days of the week.", "Name the months.", "Name all the seaons.", "What is your favourite day of the week?", "What is your favourite month?", "What is your favourite season?", "What day of the week is it today?", "What date is it today?", "When is your B-day?", "When is your mom’s b-day?", "When is your friend’s b-day?", "What holidays do you know?", "What I the most important national holiday in Kazakhstan?", "What is your favourite holiday?", "If you have an opportunity, where would you spend your summer vocation: in the mountains, at the seaside or in the countryside?", "Make a sentence: am/to/my/I/help/mom/going", "Make a sentence: play/I/going/song/my/am/to/favourite.", "Make a Future Simple question: Who/you/ee/tomorrow?", "Make a Future Simple negative: I/go to school /on/Sunday.", "Make a question with “be going to”: What/you/wear/to/the/cinema?", "Translate: Когда закончится твой урок?", "Translate: Как долго будут длиться твои каникулы?", "What will you do on holidays?", "Translate: Я собираюсь посмотреть новый фильм по ТВ.", "What day of the week will it be tomorrow? the day after tomorrow?",] 
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
        par25.textContent = `Ответ 24: ${localStorage.getItem(data[0][24])}`;
}
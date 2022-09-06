
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
let btnAll = document.querySelector('.all')
let answer = '';
let count = 1;
let datacount = 0;
let data = [
        ["Make a word (animal) EFAIGRF", "Make a word (animal) LICORCODE", "Make a word (animal) AIRGOLL", "Make a word (animal) PATHELEN", "Make a word (animal) AMMMLA", "These mammals live in the sea", "Which animal can climb?", "Which animal can jump?", "What mammals have got 4 legs?", "What insects can you name?", "Have you got a pet?/pets?", "What do domestic animals eat?", "Name 5 plants you know", "Name 5 flowers you know", "These wild animals are not big. They live in the steppe or forest and eat meat. They live in packs.", "Make a question: It eats a lot of fruit.", "Make a negative sentence: An elephant use its eyes to keep cool.", "What word is correct: He … a vet. a) were b) was c)been ", "What word is correct: The … 3 bears in the zoo. a) was b) were", "Dogs … and … when they … a) play,jump,run b) run,jump, play c)play,run,jump", "Make a sentence: was/yesterday/Tom/zoo/the/at", "Make a sentence: went/to/last/the/she/to/farm/her/uncle/Sunday", ] 
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
       
}
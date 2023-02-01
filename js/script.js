// let mylife = document.querySelector('.block_homework');

// mylife.addEventListener('mouseenter', () => {
//    mylife.innerHTML = 'Я НІКЧЕМНЕ ГІВНО';
// });
//Яке же я тупе і кончене пиздець

// mylife.addEventListener('mouseout', () => {
//    mylife.innerHTML = 'ПІЗДУЙ НАХУЙ ЗВІДСИ ГІВНА КУСОК';
// })


let gender = document.querySelector('.gender_gender');
// SELECT

let blockgirl = document.querySelector('.block_txt_girl');

let closetxt = document.querySelector('.close');

let blockboobs = document.querySelector('.boobs');
// при выборе девушки должен выпасть этот блок

let birthday = document.querySelector('.block_birthday');
// добавить сюда класс который будет скрывать этот блок

let birthdaydate = document.querySelector('.input_birthday');

let message = document.querySelector('.message')

gender.addEventListener('change', (ev) => {
   const choise = ev.target.value;
   console.log(choise);

   if (choise === 'nothing') {
      birthday.classList.remove('dan');
      blockgirl.classList.remove('tan');
      blockboobs.classList.remove('bob');
   }

   if (choise === 'male') {
      birthday.classList.add('dan');
      blockgirl.classList.remove('tan');
      blockboobs.classList.remove('bob');
   }

   if (choise === 'female') {
      blockgirl.classList.add('tan');
      birthday.classList.remove('dan')
   }
})

closetxt.addEventListener('click', () => {
   blockboobs.classList.add('bob');
   blockgirl.classList.remove('tan');
})


birthdaydate.addEventListener('change', (ev) => {

   const happybirthday = Number(ev.target.value.substr(0, 4));


   const dateNow = new Date();
   console.log(dateNow.getFullYear() - happybirthday);

   let datetoday = dateNow.getFullYear() - happybirthday;

   if (datetoday < 18) {
      message.innerHTML = 'Занадто малий'
   }
   else if (datetoday > 18) {
      message.innerHTML = ''
   }

})







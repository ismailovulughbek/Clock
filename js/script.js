// document - bu HTML sahifamiz
// console.log(document);
// querySelector - bu HTML sahifadagi obyektlarga ulanish (class, id, tag)
// Ulanish
// Strelkalar
const s = document.querySelector('.s')
const m = document.querySelector('.m')
const h = document.querySelector('.h')
// Sifravoy
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
// tabs
const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContent = document.querySelectorAll('.tabsContentItem')
const tabsLink__span = document.querySelector('.tabsLink__span')

let t = 360
function clock() {
    // new Date() - kompyterdagi toliq datani olib beradi
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30
    // HTML elementlarga still berish
    if (sec == 0 || t > 360) {
        s.style.transform = `rotate(${t}deg)`
        t += 6
    } else {
        s.style.transform = `rotate(${sec}deg)`
    }
    s.style.transition = `all 1s linear`
    m.style.transform = `rotate(${min}deg)`
    h.style.transform = `rotate(${hour}deg)`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    // setTimeout(funksiya, millisecund) - bu muayyan vaqtdan song kerakli funksiyani ishga tushuradi
    // Rekursiya - bu funksiya oz ozini chaqirishi
    setTimeout(() => clock(), 1000);
}
// Rekursiya ishga tushishi uchun uni bir marotaba ishga tushirvorish kerak
clock()



for (let i = 0; i < tabsContent.length; i++) {
    tabsItem[i].addEventListener('click', () => {
        for (let j = 0; j < tabsContent.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })
}



//sekondamer


const stopwatch__hours = document.querySelector('.stopwatch__hours')
const stopwatch__minutes = document.querySelector('.stopwatch__minutes')
const stopwatch__seconds = document.querySelector('.stopwatch__seconds')
const stopwatch__btn = document.querySelector('.stopwatch__btn')


// Im work

function watch() {

    let s = 0;
    let m = 0;
    let h = 0;

function rec() {

        stopwatch__hours.innerHTML = h;
        stopwatch__minutes.innerHTML = m;
        stopwatch__seconds.innerHTML = s;

        if (s < 59 ) {
            s++;

        }else{
            s = 0;
            m++;
        }
        if(m == 59){
            m = 0;
            h++;
        }
        if(h == 24){
            h = 0;
        }
        // console.log(s);
        // if(m < 10){
        //     stopwatch__minutes.innerHTML = `0${m}`;
        // }else{
        //     stopwatch__minutes.innerHTML = `${m}`;
        // }

        setTimeout(() => {
            if (stopwatch__btn.innerHTML == 'stop') {
                rec()
            }
        },  1000);

    }
    rec()

}



    stopwatch__btn.addEventListener('click', () => {
        if (stopwatch__btn.innerHTML == 'start'){
            stopwatch__btn.innerHTML = 'stop'
            tabsLink__span.classList.add('active')
            watch()
        }
        else if (stopwatch__btn.innerHTML == 'stop') {
            stopwatch__btn.innerHTML = 'clear'
            tabsLink__span.classList.add('active_clear')
        }
        else {
            stopwatch__btn.innerHTML = 'start'
            tabsLink__span.classList.remove('active_clear')
            tabsLink__span.classList.remove('active')

            stopwatch__hours.innerHTML = 0;
            stopwatch__minutes.innerHTML = 0;
            stopwatch__seconds.innerHTML = 0;
        }

    })

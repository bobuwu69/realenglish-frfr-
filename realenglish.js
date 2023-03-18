//study&match
var spam = function () {
    document.querySelectorAll('.pagination-next').forEach(button => button.click())
};
function spamclick(i) {
    setTimeout(function () {
        spam();
        if (i < 6) {
            spamclick(i + 1)
        }
    }, 250);
};
spamclick(0);
function cont() {
    document.querySelectorAll('.t-btn-continue').forEach(button => button.click());
}
setTimeout(cont, 2500)
var repeat = function () {
    let nums = document.querySelector('.t-matching-list').innerHTML;
    let clean1 = nums.replace(/(.*?)(\d{2})/, "$2");
    let clean2 = clean1.replace(/(\d{2})(\D*)/g, "$1 ");
    let clean3 = clean2.replace(/(\d{2}.\d{2}.\d{2}.\d{2})./g, "$1");
    let fourans = clean3.replace(/(\d{2}).(\d{2}).(\d{2}).(\d{2})/g, "$1 $2 $3 $4");
    let array = fourans.split(' ');
    let i = 0;
    while (i < array.length) {
        document.getElementById(array[i]).click();
        i++
    };
}
setTimeout(function () {
    choosedefinition(0)
}, 3000)
function choosedefinition(i) {
    setTimeout(function () {

        repeat();

        if (i < 7) {
            choosedefinition(i + 1);
        }
    }, 500);
}
setTimeout(function () {
    cont()
}, 15000)

//complete the sentence 
function suitable() {
    let nums = document.querySelector('.l-bound-list').innerHTML;
    let clean1 = nums.replace(/.*?(\d+)/g, "$1 ");
    let clean2 = clean1.replace(/(\d+.\d+.\d+.)(\D+)/g, "$1 ");
    let clean3 = clean2.replace(/(\d+.\d+.\d+)(.*)/g, "$1");
    let array = clean3.split(' ');
    let i = 0;
    document.getElementById(array[0]).click();
}
function nextpage() {
    document.querySelectorAll('.pagination-next').forEach(nigger => nigger.click())
};
function chooseandclicknext() {
    suitable();
    nextpage()
};
function suitableword(qnum) {
    setTimeout(function () {
        chooseandclicknext();
        if (qnum < 7) {
            suitableword(qnum + 1);
        }
    }, 250);
}
setTimeout(() => suitableword(0), 1000)
setTimeout(() => document.querySelectorAll('.t-btn-check').forEach(button => button.click()), 5000)

//practice section
i = 0
let practise_reading = document.querySelector('.t-vertical-list').innerHTML
let cln1 = practise_reading.replace(/.*?(\d{3})/g, "$1 ")
let cln2 = cln1.replace(/(\d{3}.\d{3}.\d{3})(.+)/gm, "$1")
let array = cln2.split(' ')
while (i < array.length) {
    document.getElementById(array[i]).click();
    i++
};
document.querySelectorAll('.t-btn-continue').forEach(button => button.click())

//reading section
function garrayandclick() {
    let id = document.querySelector('.l-bound-list').innerHTML;
    let clean = id.replace(/.*?(\d{3})/g, "$1 ");
    let clean2 = clean.replace(/(\d{3}.\d{3})(.+)/g, "$1");
    let array3 = clean2.split(' ');
    document.getElementById(array3[0]).click()
}



var timesRun = 0;
var interval = setInterval(function () {
    timesRun += 1;
    if (timesRun === 6) {
        clearInterval(interval);
    }
    garrayandclick()
}, 750);

setTimeout(() => document.querySelectorAll('.t-btn-continue').forEach(button => button.click()), 6000)
setTimeout(() => document.querySelectorAll('.t-btn-continue').forEach(button => button.click()), 7000)
setTimeout(() => document.querySelectorAll('.skip').forEach(button => button.click()), 8000)
setTimeout(() => document.querySelectorAll('.t-btn-continue').forEach(button => button.click()), 9000)


//write what you hear
var timesRun = 0;
var interval = setInterval(function () {
    timesRun += 1;
    if (timesRun === 5) {
        clearInterval(interval);
    }
    autotypeandnext()
}, 750);

function autotypeandnext() {
    let innerhtml = document.querySelector(".redacted-text").innerHTML;
    let answer = innerhtml.replace(/.*?>(\w+['.]?\w*)/g, "$1 ");
    let clean_ans = answer.replace(/(.+\.).+/g, "$1");
    let textarea = document.getElementById('draft-textarea');
    textarea.value += clean_ans;
    document.getElementById('draft-textarea').dispatchEvent(new Event('input', {
        view: window,
        bubbles: true,
        cancelable: true
    }));
    setTimeout(() => document.querySelectorAll('.pagination-next').forEach(button => button.click()), 250)

}

setTimeout(() => document.querySelector('.t-btn-continue').click(), 6000)
setTimeout(() => document.querySelectorAll('.skip').forEach(button => button.click()), 8000)
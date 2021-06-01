import $ from '../core';

$.prototype.accordion = function(headAcive = 'accordion-head--active', contentActive = 'accordion-content--active', paddings = 40) {
    for(let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headAcive);
            $(this[i].nextElementSibling).toggleClass(contentActive);

            if(this[i].classList.contains(headAcive)) {
                this[i].nextElementSibling.style.maxHeight = this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

$('.accordion-head').accordion();
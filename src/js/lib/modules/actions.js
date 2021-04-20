import $ from '../core';

$.prototype.on = function(clickName, func) {
    if(!clickName || !func) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        this[i].addEventListener(clickName, func);
    }

    return this;
};

$.prototype.off = function(clickName, func) {
    if(!clickName || !func) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        this[i].removeEventListener(clickName, func);
    }

    return this;
};

$.prototype.click = function(func) {
    if(func) {
        for(let i = 0; i < this.length; i++) {
            this[i].addEventListener('click', func);
        }
    } else {
        this.click();
    }

    return this;
};
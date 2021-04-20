import $ from '../core';

$.prototype.addClass = function(...className) {
    for(let i = 0; i < this.length; i++) {
        this[i].classList.add(...className);
    }
    return this;
};

$.prototype.removeClass = function(...className) {
    for(let i = 0; i < this.length; i++) {
        this[i].classList.remove(...className);
    }
    return this;
};

$.prototype.toggleClass = function(className) {
    for(let i = 0; i < this.length; i++) {
        this[i].classList.toggle(className);
    }
    return this;
};

$.prototype.getAttr = function(name) {
    if(!name) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        return this[i].getAttribute(name);
    }
};

$.prototype.setAttr = function(atr, name) {
    if(!name && !atr) {
        return this;
    }
    for(let i = 0; i < this.length; i++) {
        return this[i].setAttribute(atr, name);
    }
};
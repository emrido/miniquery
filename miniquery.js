const SweetSelector = {
    select: (element) => {
        return element[0] === '#' ? document.querySelector(element) : document.querySelectorAll(element);
    }
}

const DOM = {
    hide: (element) => {
        if (element[0] === '#') {
            return document.querySelector(element).hidden = true;
        } else {
            return document.querySelectorAll(element).forEach(el => el.hidden = true);
        }
    },

    show: (element) => {
        if (element[0] === '#') {
            return document.querySelector(element).hidden = false;
        } else {
            return document.querySelectorAll(element).forEach(el => el.hidden = false);
        }
    },

    addClass: (element, newClass) => {
        if (element[0] === '#') {
            return document.querySelector(element).classList.add(newClass)
        } else {
            return document.querySelectorAll(element).forEach(el => el.classList.add(newClass))
        }
    },

    removeClass: (element, oldClass) => {
        if (element[0] === '#') {
            return document.querySelector(element).classList.remove(oldClass)
        } else {
            return document.querySelectorAll(element).forEach(el => el.classList.remove(oldClass))
        }
    }
}

const EventDispatcher = {
    on: (element, event, func) => {
        if (element[0] === '#') {
            return document.querySelector(element).addEventListener(event, func)
        } else {
            return document.querySelectorAll(element).forEach(el => el.addEventListener(event, func))
        }
    },

    trigger: (element, event) => {
        if (element[0] === '#') {
            return document.querySelector(element).dispatchEvent(new Event(event))
        } else {
            return document.querySelectorAll(element).forEach(el => el.dispatchEvent(new Event(event)))
        }
    }
}

/*
DOM.show('#eyed')
DOM.addClass('.btn', 'shadi')
DOM.removeClass('.btn', 'shadi')
EventDispatcher.on('#eyed', 'click', function() { console.log('awesome') })
EventDispatcher.trigger('#eyed', 'click')
*/

class MiniQuery {
    constructor(element) {
        this.element = element
    }

    hide = () => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.hidden = true);
        } else {
            this.element.hidden = true;
        }
        return this;
    }

    show = () => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.hidden = false);
        } else {
            this.element.hidden = false;
        }
        return this;
    }

    addClass = (newClass) => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.classList.add(newClass));
        } else {
            this.element.classList.add(newClass);
        }
        return this;
    }

    removeClass = (oldClass) => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.classList.remove(oldClass));
        } else {
            this.element.classList.remove(oldClass);
        }
        return this;
    }

    on = (event, func) => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.addEventListener(event, func));
        } else {
            this.element.addEventListener(event, func);
        }
        return this;
    }

    trigger = (event) => {
        if (this.element instanceof NodeList) {
            this.element.forEach(el => el.dispatchEvent(new Event(event)));
        } else {
            this.element.dispatchEvent(new Event(event));
        }
        return this;
    }
}

const $ = element => {
    element = element[0] === '#' ? document.querySelector(element) : document.querySelectorAll(element);
    return new MiniQuery(element);
}
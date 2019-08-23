var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);

var slider = tns({
    'container': '.slider__wrapper',
    'items': 1,
    'controls': false,
    'navPosition': 'bottom',
    'slideBy': 'page',
    'mouseDrag': true,
    'responsive': {
        1170: {
            'controls': true
        }
    },
    'speed': 400
});

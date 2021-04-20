import './lib/lib';

$('button').on('click', function(){
    $(this).toggleClass('aaa').setAttr('data-test2', 'aaaaa');
});
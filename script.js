var turn = Math.floor(Math.random() * 2);
var winner = '';
var x = 'x.png';
var o = 'o.png';

if(turn === 1) {
    turn = 'o';
}
else {
    turn = 'x';
}

function checkTurn() {
    if(turn === 'o') {
        $('#hud').html(`<img src="${o}" width="40" height="40" alt="o" />`);
    }
    else {
        $('#hud').html(`<img src="${x}" width="40" height="40" alt="x" />`);
    }
}

function checkWinner() {

    var a1 = $('.area.a1').attr('data-marked');
    var a2 = $('.area.a2').attr('data-marked');
    var a3 = $('.area.a3').attr('data-marked');
    var b1 = $('.area.b1').attr('data-marked');
    var b2 = $('.area.b2').attr('data-marked');
    var b3 = $('.area.b3').attr('data-marked');
    var c1 = $('.area.c1').attr('data-marked');
    var c2 = $('.area.c2').attr('data-marked');
    var c3 = $('.area.c3').attr('data-marked');

    for(var i = 0; i <= 1; i++) {
        if(i === 0) {
            var letter = 'o';
        }
        else {
            var letter = 'x';
        }
        if(a1 === letter && a2 === letter && a3 === letter ||
            b1 === letter && b2 === letter && b3 === letter ||
            c1 === letter && c2 === letter && c3 === letter ||
            a1 === letter && b1 === letter && c1 === letter ||
            a2 === letter && b2 === letter && c2 === letter ||
            a3 === letter && b3 === letter && c3 === letter ||
            a1 === letter && b2 === letter && c3 === letter ||
            a3 === letter && b2 === letter && c1 === letter) {
            winner = letter;
            alert('The winner is: ' + winner.toUpperCase());
            window.location.href = "index.html";
        }
    }

    if(a1 !== '' && a2 !== '' && a3 !== '' &&
        b1 !== '' && b2 !== '' && b3 !== '' &&
        c1 !== '' && c2 !== '' && c3 !== '') {
        alert('It\'s a tie');
        window.location.href = "index.html";
    }

}

function removeBorders(div, pos) {

    div.forEach(d => {
        pos.forEach(p => {
            $(d).css('border-' + p, 'none');
        });
    });

}

$(document).ready(function () {

    removeBorders([$('.a1'), $('.b1')], ['top', 'left', 'right']);
    removeBorders([$('.a2'), $('.a3'), $('.b2'), $('.b3')], ['top', 'right']);
    removeBorders([$('.c2'), $('.c3')], ['top', 'right', 'bottom']);
    removeBorders([$('.c1')], ['top', 'left', 'right', 'bottom']);
    checkTurn();
    $('.area').bind('click', function () {
        if($(this).find('img').length == 0) {
            if(turn === 'o') {
                turn = 'x';
                $(this).html(`<img src="${o}" alt="${o}" />`);
                $(this).attr('data-marked', 'o');
            }
            else {
                turn = 'o';
                $(this).html(`<img src="${x}" alt="${x}" />`);
                $(this).attr('data-marked', 'x');
            }
        }
        setTimeout(() => {
            checkTurn();
        }, 10);
        setTimeout(() => {
            checkWinner();
        }, 20)
    });

});
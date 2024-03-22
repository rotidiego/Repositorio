
window.onload = function() {
    var botao = document.getElementById("btn1");
    let p1 = document.getElementById('paso1');
    let p2 = document.getElementById('paso2');
    botao.onclick = function() {
        p1.style.display = 'none';
        p2.style.display = 'flex';
    };
};
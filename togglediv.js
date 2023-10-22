function toggleDiv() {
    var div1 = document.getElementById('addressbook1');
    var div2 = document.getElementById('addressbook2');

    if (div1.style.display === 'none') {
        div1.style.display = 'block';
        div2.style.display = 'none';
    } else {
        div1.style.display = 'none';
        div2.style.display = 'block';
    }
}
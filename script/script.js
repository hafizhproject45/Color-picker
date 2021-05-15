// one color picker
const tombol = document.querySelector('#tombol');

tombol.addEventListener('click', () => {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('warnaDefault')
})
// tambah button random color picker
const bRandom = document.createElement('button');
const bIsi = document.createTextNode('Acak Warna');
bRandom.appendChild(bIsi);
bRandom.setAttribute('type', 'button');
tombol.after(bRandom);

document.body.classList.toggle('style');

// random color picker
bRandom.addEventListener('click', () => {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// slider color picker
sMerah.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sHijau.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
sBiru.addEventListener('input', () => {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
})
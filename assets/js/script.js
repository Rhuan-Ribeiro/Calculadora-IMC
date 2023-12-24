const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');

    const weight = parseFloat(weightInput.value.replace(',', '.'));
    const height = parseFloat(heightInput.value.replace(',', '.'));

    const bmi = (weight / (height * height)).toFixed(1);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Atenção! Você está abaixo do peso.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        description = 'Seu peso está normal. Parabéns!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi >= 24.9 && bmi < 29.9) {
        description = 'Atenção! Você está com sobrepeso.';
    } else {
        description = 'Alerta! Você está em uma faixa de obesidade.';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
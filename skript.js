document.addEventListener('DOMContentLoaded', function () {
            // Ограничение даты рождения
            const dateInput = document.getElementById('birthdate');
            if (dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.max = today;
            }

            // Логика работы калькулятора
            const calcBtn = document.getElementById('calc-btn');
            const productSelect = document.getElementById('product-select');
            const quantityInput = document.getElementById('product-quantity');
            const resultDiv = document.getElementById('calc-result');

            calcBtn.addEventListener('click', function () {
                const price = parseFloat(productSelect.value);
                const quantity = parseInt(quantityInput.value, 10);

                if (isNaN(quantity) || quantity <= 0) {
                    resultDiv.style.display = 'block';
                    resultDiv.className = 'alert alert-danger text-center fw-bold m-0';
                    resultDiv.textContent = 'Пожалуйста, введите корректное количество товара (целое число больше 0).';
                    return;
                }

                const totalCost = price * quantity;
                resultDiv.style.display = 'block';
                resultDiv.className = 'alert alert-light border border-pink text-center fw-bold m-0';
                resultDiv.textContent = `Стоимость заказа: ${totalCost.toLocaleString('ru-RU')} руб.`;
            });
        });

function buyNow() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('payment-modal');
    modal.style.display = 'none';
}

function showPrice(paymentMethod) {
    const priceContainer = document.getElementById('price-container');

    if (paymentMethod === 'GCash') {
        priceContainer.innerHTML = '<p>Price: $19.99 (GCash)</p>';
    } else if (paymentMethod === 'PayPal') {
        priceContainer.innerHTML = '<p>Price: $19.99 (PayPal)</p>';
    }

    redirectToLink('https://t.me/your_telegram_link'); // Replace with your Telegram link
}

function redirectToLink(link) {
    window.location.href = link;
}

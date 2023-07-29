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
        priceContainer.innerHTML = '<p>Price: ₱120 (GCash)</p>';
    } else if (paymentMethod === 'PayPal') {
        priceContainer.innerHTML = '<p>Price: ₱120 or $3.00 (PayPal)</p>';
    }

    redirectToLink('https://t.me/blehplayz'); // Replace with your Telegram link
}

function redirectToLink(link) {
    window.location.href = link;
}


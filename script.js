function buyNow() {
    const modal = document.getElementById('buy-now-modal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('buy-now-modal');
    modal.style.display = 'none';
}

function payment(method) {
    if (method === 'GCash') {
        alert('Redirecting to GCash Payment...');
        closeModal();
    } else if (method === 'PayPal') {
        alert('Redirecting to PayPal Payment...');
        closeModal();
    }
}

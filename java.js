function closeAndReappear() {
    const ad = document.getElementById('persistentAd');
    
    ad.style.display = 'none';
    
    setTimeout(() => {
        ad.style.display = 'flex';

    }, 5000);
}
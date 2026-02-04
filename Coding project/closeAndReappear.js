function closeAndReappear() {
    const ad = document.getElementById('persistentAd');
    
    // Hide the ad immediately
    ad.style.display = 'none';
    
    // Wait 5 seconds (5000ms) then show it again
    setTimeout(() => {
        ad.style.display = 'flex';
        // Optional: add an animation class here
    }, 5000);
}
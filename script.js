function hideAndSeek() {
    const ad = document.getElementById('vintageAd');
    
    // Hide the ad immediately
    ad.style.display = 'none';

    // Wait 5 seconds (5000 milliseconds)
    setTimeout(function() {
        // Bring it back!
        ad.style.display = 'flex';
    }, 5000);
}
// Dynamic brand name cycling with translations
function initBrandNameCycling() {
    const names = ["Sahin", "শাহিন", "साहिन", "شاهين", "サヒン"];
    let currentIndex = 0;
    const brandElement = document.getElementById('brand-name');
    
    if (!brandElement) {
        console.warn('Brand name element not found, retrying...');
        // Retry after a short delay if element not found
        setTimeout(initBrandNameCycling, 500);
        return;
    }
    
    console.log('Brand name cycling initialized');
    
    function cycleName() {
        // Fade out
        brandElement.classList.add('fade-out');
        
        // After fade out completes, change text and fade in
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % names.length;
            brandElement.innerText = names[currentIndex];
            console.log('Changed to:', names[currentIndex]);
            brandElement.classList.remove('fade-out');
            brandElement.classList.add('fade-in');
            
            // Remove fade-in class after animation
            setTimeout(() => {
                brandElement.classList.remove('fade-in');
            }, 500);
        }, 500); // Wait for fade-out to complete
    }
    
    // Start the cycling after initial load
    setTimeout(() => {
        console.log('Starting name cycling every 5 seconds');
        setInterval(cycleName, 5000); // Change every 5 seconds
    }, 2000); // Wait 2 seconds before starting the cycle
}

// Try to initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBrandNameCycling);
} else {
    // DOM is already loaded
    initBrandNameCycling();
}

// Also try after a delay to ensure React has rendered
setTimeout(initBrandNameCycling, 1000);
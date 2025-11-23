document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const siteHeader = document.querySelector('.site-header');

        if (siteHeader) {
            const logoDiv = document.createElement('div');
            logoDiv.className = 'overlake-logo';
            logoDiv.innerHTML = `
                <div class="overlake-main"><span class="overlake-lake">wp.</span>over<span class="overlake-lake">lake</span></div>
                <div class="overlake-bio">.bio</div>
            `;

            siteHeader.insertBefore(logoDiv, siteHeader.firstChild);
        }
    }, 100);
});

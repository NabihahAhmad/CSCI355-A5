// Function to show home section
function showHome() {
    hideAllSections();
    document.getElementById('home').classList.add('active');
}

// Function to hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
}

// Function to show browser information
function showBrowserInfo(type) {
    hideAllSections();
    const section = document.getElementById('browser-info');
    const detailsContainer = document.getElementById('browser-details');
    
    let content = '';
    
    if (type === 'navigator') {
        content = `
            <div class="info-card">
                <h3>Navigator Information</h3>
                <p><strong>App Name:</strong> ${navigator.appName}</p>
                <p><strong>Product:</strong> ${navigator.product}</p>
                <p><strong>App Version:</strong> ${navigator.appVersion}</p>
                <p><strong>User Agent:</strong> ${navigator.userAgent}</p>
                <p><strong>Platform:</strong> ${navigator.platform}</p>
                <p><strong>Language:</strong> ${navigator.language}</p>
            </div>
        `;
    } else if (type === 'window') {
        content = `
            <div class="info-card">
                <h3>Window Information</h3>
                <p><strong>Inner Height:</strong> ${window.innerHeight}px</p>
                <p><strong>Inner Width:</strong> ${window.innerWidth}px</p>
            </div>
        `;
    } else if (type === 'screen') {
        content = `
            <div class="info-card">
                <h3>Screen Information</h3>
                <p><strong>Width:</strong> ${screen.width}px</p>
                <p><strong>Height:</strong> ${screen.height}px</p>
                <p><strong>Available Width:</strong> ${screen.availWidth}px</p>
                <p><strong>Available Height:</strong> ${screen.availHeight}px</p>
                <p><strong>Color Depth:</strong> ${screen.colorDepth} bits</p>
                <p><strong>Pixel Depth:</strong> ${screen.pixelDepth} bits</p>
            </div>
        `;
    } else if (type === 'location') {
        content = `
            <div class="info-card">
                <h3>Location Information</h3>
                <p><strong>Href:</strong> ${location.href}</p>
                <p><strong>Hostname:</strong> ${location.hostname}</p>
                <p><strong>Pathname:</strong> ${location.pathname}</p>
                <p><strong>Protocol:</strong> ${location.protocol}</p>
            </div>
        `;
    }
    
    detailsContainer.innerHTML = content;
    section.classList.add('active');
}

// Function to show password section
function showPasswordSection() {
    hideAllSections();
    document.getElementById('password-section').classList.add('active');
}

// Function to show developer info
function showDeveloperInfo() {
    hideAllSections();
    document.getElementById('developer-info').classList.add('active');
}

// Function to show contact form
function showContactForm() {
    hideAllSections();
    document.getElementById('contact-form').classList.add('active');
}

// Password validation
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('passwordInput');
    
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const feedback = document.getElementById('passwordFeedback');
        
        // Password requirements
        const hasMinLength = password.length >= 10;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasDigit = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*()]/.test(password);
        
        const isValid = hasMinLength && hasLetter && hasDigit && hasSpecial;
        
        if (password.length === 0) {
            this.classList.remove('valid', 'invalid');
            feedback.classList.remove('valid', 'invalid');
            feedback.style.display = 'none';
            return;
        }
        
        if (isValid) {
            this.classList.remove('invalid');
            this.classList.add('valid');
            feedback.textContent = '✓ Password meets all requirements!';
            feedback.classList.remove('invalid');
            feedback.classList.add('valid');
        } else {
            this.classList.remove('valid');
            this.classList.add('invalid');
            
            let errorMessages = [];
            if (!hasMinLength) errorMessages.push('Must be at least 10 characters');
            if (!hasLetter) errorMessages.push('Must contain at least one letter');
            if (!hasDigit) errorMessages.push('Must contain at least one digit');
            if (!hasSpecial) errorMessages.push('Must contain at least one special character');
            
            feedback.textContent = '✗ ' + errorMessages.join(', ');
            feedback.classList.remove('valid');
            feedback.classList.add('invalid');
        }
    });
});

// Update window dimensions on resize
window.addEventListener('resize', function() {
    // Refresh window info if currently displayed
    const browserSection = document.getElementById('browser-info');
    if (browserSection.classList.contains('active')) {
        const currentContent = document.getElementById('browser-details').innerHTML;
        if (currentContent.includes('Inner Height')) {
            showBrowserInfo('window');
        }
    }
});
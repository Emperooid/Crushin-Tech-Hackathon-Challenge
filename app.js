const closePricingPlan = () => {
    const pricingDiv = document.getElementById("pricing-plan");
    if (pricingDiv) {
        pricingDiv.style.display = "none";
    }
}

const toggleContent = (clickedElement) => {
    const contents = document.querySelectorAll('.setup-guide-contents');

    contents.forEach(content => {
        if (content === clickedElement) {
            content.classList.toggle('clicked');
        } else {
            content.classList.remove('clicked');
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const checkIcons = document.querySelectorAll('.setup-guide-contents-left-check-icon');
    const progressBar = document.querySelector('progress');
    const completionText = document.querySelector('.setup-completed p');

    let selectedCount = 0;

    checkIcons.forEach((checkIcon) => {
        checkIcon.addEventListener('click', function () {
            const isSelected = this.classList.toggle('selected');

            if (isSelected) {
                selectedCount++;
            } else {
                selectedCount--;
            }

            const progressValue = (selectedCount / checkIcons.length) * 100;
            progressBar.value = progressValue;
            completionText.textContent = `${selectedCount} / ${checkIcons.length} completed`;

            const svg = this.querySelector('svg');
            if (isSelected) {
                svg.innerHTML = `
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#303030"></circle>
                        <path
                            d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                            fill="#fff"
                        ></path>
                    </svg>
                `;

                // Add rotate fade-in animation class
                svg.classList.add('rotate-fade-in');
            } else {
                svg.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
                        <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" stroke-dasharray="4 6" />
                    </svg>
                `;

                // Remove rotate fade-in animation class
                svg.classList.remove('rotate-fade-in');
            }

            // Trigger the animation
            void svg.offsetWidth;

            // Add fade-in animation class
            svg.classList.add('fade-in');
            setTimeout(() => {
                svg.classList.remove('fade-in');
            }, 500);

            const setupGuideContents = this.closest('.setup-guide-contents');
            if (setupGuideContents) {
                setupGuideContents.classList.toggle('selected', isSelected);
            }
        });
    });
});


const toggleContentVisibility = () => {
    const svg = document.getElementById('toggle-svg');
    const contents = document.querySelectorAll('.setup-guide-contents');

    contents.forEach(function(content) {
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'flex';
        svg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A" />';
      } else {
        content.style.display = 'none';
        svg.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>';
      }
    });
  }
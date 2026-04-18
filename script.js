document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle FontAwesome icon between bars and times (X)
        const icon = hamburger.querySelector('i');
        if(navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Sticky Header effect on scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
            header.style.height = "70px";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            header.style.height = "80px";
        }
    });

    // 3. Booking Form Date Validation
    const pickupDateInput = document.getElementById('pickup-date');
    const returnDateInput = document.getElementById('return-date');
    const bookingForm = document.getElementById('booking-form');

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.min = today;
    returnDateInput.min = today;

    // Ensure return date is always after or equal to pickup date
    pickupDateInput.addEventListener('change', function() {
        returnDateInput.min = this.value;
        if(returnDateInput.value && returnDateInput.value < this.value) {
            returnDateInput.value = this.value;
        }
    });

    // Prevent default submission for demo purposes & route to booking
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('pickup-location').value;
        const pickup = pickupDateInput.value;
        const dropoff = returnDateInput.value;

        if(location && pickup && dropoff) {
            // In a real app, you would pass these as URL parameters to the fleet/booking page
            // Example: window.location.href = `fleet.html?loc=${location}&pick=${pickup}&drop=${dropoff}`;
            
            // Simulating transition for the prototype
            const btn = bookingForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Searching...';
            
            setTimeout(() => {
                alert(`Searching cars in ${location} from ${pickup} to ${dropoff}`);
                btn.innerHTML = originalText;
            }, 800);
        }
    });
});

console.log('About Us screen loaded');

document.addEventListener('DOMContentLoaded', () => {
    // === Counter Animation ===
    const counters = document.querySelectorAll('.counter');

    const runCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = 200; // The smaller the slower
        // Determine increment step based on target to have consistent animation duration
        // If target is 25, we want it to take e.g. 2 seconds. 
        // 2000ms / 25 = 80ms per tick. 
        // Using a recursive timeout or interval approach.

        let count = 0;
        const updateCount = () => {
            // Animate faster for larger numbers, slower for small ones
            // target / speed gives us the increment step
            const inc = target / speed;

            // For small numbers like 25, linear increment of 1 is fine with controlled delay
            // Let's just use a simple set interval approach logic

            if (count < target) {
                // Calculate step. If target is small (like 25), step by 1 is fine.
                // We want the total animation to last about 1.5 - 2 seconds.
                // 1 frame is ~16ms. 
                // increment = target / (2000ms / 16ms) = target / 125
                const increment = Math.ceil(target / 100);

                count += increment;

                if (count > target) count = target;

                counter.innerText = count;
                setTimeout(updateCount, 20); // updates every 20ms
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    // Use Intersection Observer to trigger animation when visible
    const observerOptions = {
        threshold: 0.5 // Trigger when 50% of the item is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                runCounter(counter);
                observer.unobserve(counter); // Only check once
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // === Interactive Gradient Background ===
    const statsWrapper = document.querySelector('.stats-wrapper');
    if (statsWrapper) {
        statsWrapper.addEventListener('mousemove', (e) => {
            // Get element dimensions and position
            const rect = statsWrapper.getBoundingClientRect();

            // Calculate mouse position relative to the element
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Convert to percentage
            // We want the background to move against the mouse for parallax, or with it.
            // Let's map 0-100% mouse pos to 0-100% background pos.
            // Since background size is 300%, we have room to move.
            // A simple 1-to-1 mapping might be too fast or start at wrong place.

            // Center is 50%. 
            // Mouse at 0% (left) -> Bg pos 0%
            // Mouse at 100% (right) -> Bg pos 100%

            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Apply new position
            statsWrapper.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
        });

        // Optional: Reset to center when mouse leaves? 
        // Actually, leaving it where it was feels more natural or resetting nicely.
        // Let's leave it for now, it feels "touched".
    }
});

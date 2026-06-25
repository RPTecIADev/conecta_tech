document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        const sections = document.querySelectorAll('.course-section');

        sections.forEach(section => {
            if (filterValue === 'all') {
                section.style.display = 'block';
            } else {
                if (section.getAttribute('data-category') === filterValue) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            }
        });
    });
});
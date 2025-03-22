document.addEventListener('DOMContentLoaded', () => {
    const jobForm = document.getElementById('job-form');
    const jobList = document.getElementById('jobs');

    jobForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const jobTitle = document.getElementById('job-title').value;
        const jobDescription = document.getElementById('job-description').value;

        if (jobTitle && jobDescription) {
            const jobElement = document.createElement('div');
            jobElement.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
            jobElement.innerHTML = `
                <h3 class="text-lg font-semibold">${jobTitle}</h3>
                <p class="text-gray-700">${jobDescription}</p>
            `;

            jobList.appendChild(jobElement);

            // Clear the form
            jobForm.reset();
        }
    });
});
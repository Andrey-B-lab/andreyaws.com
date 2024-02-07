document.addEventListener('DOMContentLoaded', function() {
    const timelineData = [
        {
            date: 'September 2021 — Present',
            title: 'DevOps Engineer at Dun & Bradstreet',
            description: 'Planned, implemented, and documented fully automated CI/CD pipelines for Angular, React, NodeJS, and Python services.<br><br>Installed and configured Octopus Deploy and GitHub actions, resulting in a 50% reduction in deployment time.<br><br>Reduced AWS monthly costs by 25% and system resources consumption by 40%.'
        },
        {
            date: 'March 2010 — March 2021',
            title: 'Senior Principal Systems Engineer at Avid',
            description: 'Planning, implementing, maintaining, troubleshooting, and documentation of complex Video Tracking Linux-based systems<br>with different HW includes gyro-based tracking, video servers, graphic servers, databases, and automation systems.<br><br>During my role as Systems Engineer, I implemented solid amount of Broadcast Systems in TV stations and studios all over the world within tight deadlines and pressure.'
        }
    ];
    
    const timeline = document.getElementById('timeline');
    
    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.innerHTML = item.description; // Use innerHTML instead of textContent to render the <br> tags
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});

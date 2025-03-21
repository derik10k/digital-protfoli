// Simple JavaScript for project interaction (just an example)

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        alert('You clicked on ' + this.querySelector('h3').innerText);
    });
});

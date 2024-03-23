var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java'];

function render(courses) {
    var newCourses = courses.map(function(course){
        return `<li>${course}</li>`
    });
    var ulGetter = document.querySelector('.courses-list');
    ulGetter.innerHTML = newCourses.join("\n");
};
render(courses);
const skills = [
    {title: 'Budgeting',
    percentage: '80'},
    {title: 'Creatividad',
    percentage: '60'},
    {title: 'Edición',
    percentage: '80'},
    {title: 'Gionaje',
    percentage: '70'},
    {title: 'Organización',
    percentage: '90'}
];


const ctn_skills = document.getElementById('ctn_skills');
//the map returns the commas that separate the objects in the array. forEch returns undefined
ctn_skills.insertAdjacentHTML('beforeend', skills.map( skill => {
    document.write(`<div class="centerHorizontal chart centerCenter">
        <div class="x-${skill.percentage} centerCenter">
            <p>${skill.percentage}%</p>
        </div>
        <p class='skills_text'>${skill.title}</p>
    </div>`)
}) )
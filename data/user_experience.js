
let experience_json;
const url = 'user_experience.json';
function reqJSON(){
    fetch('user_experience.json')
        .then(res => {
            console.log(res);
            return JSON.stringify(res)
        }).then(data => {
            experience_json = data;
            console.log(data);
            console.log('2wadsfs');
        }).catch((err) => {
            console.log(err)
        })
}
reqJSON();
/*
const experience_json = [
    {
        "company": "Empresa",
        "jobTitle": "Puesto laboral",
        "tasks": ["Tarea laboral1", "Tarea laboral2", "Tarea laboral3", "Tarea laboral4"],
        "startDate": "Junio 2018",
        "finishedDate": "Agosto 2021"
    },
    {
        "company": "Empresa Dos",
        "jobTitle": "Puesto laboral Dos",
        "tasks": ["Tarea laboral1", "Tarea laboral2"],
        "startDate": "Septiembre 2021",
        "finishedDate": "Junio 2022"
    },
    {
        "company": "Empresa Tres",
        "jobTitle": "Puesto laboral Tres",
        "tasks": ["Tarea laboral", "Tarea laboral", "Tarea laboral"],
        "startDate": "Junio 2022",
        "finishedDate": "Actualidad"
    },
    {
        "company": "Empresa Tres",
        "jobTitle": "Puesto laboral Tres",
        "tasks": ["Tarea laboral", "Tarea laboral", "Tarea laboral"],
        "startDate": "Junio 2022",
        "finishedDate": "Actualidad"
    }
]
*/
const ctn_experienceItems = document.getElementById('ctn_experienceItems');
//the map returns the commas that separate the objects in the array. forEch returns undefined
ctn_experienceItems.insertAdjacentHTML('beforeend', experience_json.map( job => {
    document.write(`
    <div class="experienceItem"> 
        <div><span></span>
            <p class="FirstItem_Montserrat">${job.company}</p>
        </div> 
        <p class="SecondItem_Montserrat">${job.jobTitle}</p>
        <ul class="SecondItem_Montserrat" >
            <li>- ${job.tasks} </li>
        </ul> 
        <p class="ThirdItem_Montserrat">${job.startDate} - ${job.finishedDate}</p> 
    </div>`)
}) )
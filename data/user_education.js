const education = [
    {
        category: "Category",
        courses: [
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            }
        ]
    },
    {
        category: "Category2",
        courses: [
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            }
        ]
    },
    {
        category: "Category3",
        courses: [
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            },
            {
                certificate: "Certificado recibido",
                institution: "Institución",
                abilities: "Habilidades conseguidas",
                dateOfGraduation: "Agosto 2021"
            }
        ]
    },
]

const ctn_educationItems = document.getElementById('ctn_educationItems');
//the map returns the commas that separate the objects in the array. forEch returns undefined
ctn_educationItems.insertAdjacentHTML('beforeend', education.map( educationItem => {
    document.write(`
    <div class="col-4 educationItem"> 
        <div class="educationItem_title">
            <p>${educationItem.category}</p>
        </div>
    </div>`)
}) )
const educationItem_body = document.getElementById('educationItem_body');
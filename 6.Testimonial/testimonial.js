const testimonial = [
    {
        image : 'https://cdn.pixabay.com/photo/2018/01/15/02/01/anime-3083036_640.jpg' ,
        name : 'Mitsuko Takanayagi',
        anime : 'Mistreated Bride',
        episodes : 4,
        description: `Don't watch My Hero Academia`
    },
    {
        image : 'https://cdn.pixabay.com/photo/2021/02/18/14/47/girl-6027438_640.jpg' ,
        name : `DOn't Know`,
        anime : 'Sailor Moon',
        description: `Don't watch it either.`
    },
];

// const testimonialContainer = document.getElementById('_testimonail-container');
// const prevButton = document.getElementById('previous');
// const nextButton = document.getElementById('next');

// let currentIndex = 0;

// function showTestimonial() {
//     const testimonialOne = testimonial[currentIndex];
//     testimonialContainer.innerHTML = 
//     `
//     <img src="${testimonialOne.image}" />
//     <h3>${testimonialOne.name}<h3/>
//     <h6>${testimonialOne.anime}<h6/>
//     <h3>Episodes :- ${testimonialOne.episodes}<h3/>
//     <p>${testimonialOne.description}<p/>
//     `
// }

// function changeTestimonail(direction){
//     currentIndex += direction;
//     if(currentIndex < 0){
//         currentIndex = testimonial.length - 1
//     }else if(currentIndex >= testimonial.length){
//         currentIndex = 0
//     }

//     showTestimonial()
// }

// prevButton.addEventListener('click' , ()=> changeTestimonail(-1))
// prevButton.addEventListener('click' , ()=> changeTestimonail(1))

// showTestimonial()
























const prevButton = document.getElementById('previous');
const nestButton = document.getElementById('next');
const testimonialContainer = document.getElementById('_testimonail-container');
let currentIndex = 0;

function displayTEstimonial(){
    let test = testimonial[currentIndex];
    testimonialContainer.innerHTML =
    `
    <img src="${test.image}"/>
    <h3>${test.name}<h3/>
    <h6>${test.anime}<h6/>
    <p>${test.description}<p/>
    ` 
}

function updateTestimonial(dir){
    currentIndex += dir
    if(currentIndex < 0){
        currentIndex = testimonial.length - 1
    }else if(currentIndex >= testimonial.length){
        currentIndex = 0
    }
displayTEstimonial()

}

prevButton.addEventListener('click' , ()=> updateTestimonial(-1));
nestButton.addEventListener('click' , ()=> updateTestimonial(1));

displayTEstimonial()
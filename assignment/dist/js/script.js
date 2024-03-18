document.addEventListener("DOMContentLoaded", function() {
    
    const imageContainer = document.getElementById('imageContainer');
    const container = document.querySelector('.container');

    const images = [
        "url('https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg')",
        "url('https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg')",
        "url('https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg')",
        "url('https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg')",
        "url('https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg')",
        "url('https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg')",
        "url('https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg')",
        "url('https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg')",
        "url('https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg')"
    ];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.backgroundImage = `${target.dataset.src}`;
                observer.unobserve(target);
            }
        });
    });

    let count = 0;
    
    for(let i = 0; i < 20; i++){
        if(count === images.length){
            count = 0;
        }
        const div = document.createElement('div');
        div.className = 'image-container';
        div.id = `image${i}`

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'square-checkbox';
        checkbox.name = `image${i}`;
    
        const label = document.createElement('label');
        label.className = 'image-label';
        label.setAttribute('for', `image${i}`);
        label.dataset.src = images[count];

        const img = document.createElement('img');
        img.src = 'fullscreen-12-64.png'

        div.appendChild(checkbox)
        div.appendChild(label);
        div.appendChild(img)
        container.append(div);
        observer.observe(label)
        count++
    }
});

self.addEventListener('install', (event)=>{
    console.log('SW: Install');
});

self.addEventListener('fetch', (event)=>{
    console.log(event);
    if(event.request.url.includes('style.css')){
        console.log(event.request.url);

        const resp = new Response(
            `body {
                color: #a52323;
                background-color: #303030;
            }`,{
                headers: {
                    'Content-Type': 'text/css'
                },
            }
        )
        event.respondWith(resp);
        // event.respondWith(
        //     fetch('images/dog_1.jpg')
        // )
    }
    if(event.request.url.includes('dog_1.jpg')){
        event.respondWith(fetch('./images/cat_1.jpg'))
    }
});

const CACHE_NAME = "V2_cache_Portafolio_RRC";

urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/script.js',
    '/serviceworker.js',
    '/assets/RobertoRoblesCastro_CV.pdf',
    '/assets/Santander_Diploma_Roberto_Robles_Castro.pdf',
    'assets/Roberto_Robles_Castro.pdf',
    '/assets/ICP_Motoko_Qualified_Developer.pdf',
    '/assets/favicon.png',


    //icons  
    '/img/icon_16.png',
    '/img/icon_32.png',
    '/img/icon_64.png',
    '/img/icon_96.png',
    '/img/icon_128.png',
    '/img/icon_192.png',
    '/img/icon_256.png',
    '/img/icon_384.png',
    '/img/icon_512.png',
    '/img/icon_1024.png',

    
     // Imágenes del contenido
     '/assets/img/ApiGym.jpg',
     '/assets/img/itickets.png',
     '/assets/img/wordGame.png',
     '/assets/img/fotoRRC.png',
     '/assets/img/logo.png',
     '/assets/img/rr.png',
     '/assets/icons/Untitled/Git.png',
     '/assets/icons/Untitled/Contact.png',
     '/assets/icons/Untitled/Estudios.png',
     '/assets/icons/Untitled/Gmail.png',
     '/assets/icons/Untitled/linkedin.png',
     '/assets/icons/Untitled/Portafolio.png',
     '/assets/icons/Untitled/skills.png',
     '/assets/icons/Untitled/user.png',
     '/assets/icons/Untitled/whatsapp.png',

   
   //rescursos externos
    '/css/style.css',
    '/css/bootstrap.css',
    '/js/bootstrap.js',
    '/js/jquery-3.7.1.min.js',
    '/js/script.js',
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return Promise.all(
                urlsToCache.map(url => {
                    return cache.add(url).catch(error => {
                        console.error('Error al cachear:', url, error);
                    });
                })
            );
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})

// consultar el servidor 
// Modificación del evento fetch
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res => {
            if (res) {
                return res;
            }
            // Agregamos manejo de errores para las solicitudes de red
            return fetch(e.request)
                .catch(error => {
                    console.log('Error en fetch:', error);
                    // Podrías retornar una respuesta personalizada de error
                    // o una página offline si lo deseas
                    return new Response('Error de conexión', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
        })
    );
});
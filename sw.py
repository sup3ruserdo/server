from flask import Flask, redirect, make_response

app = Flask(__name__)

@app.route('/', methods=['GET', 'HEAD'])
def handle_request():
    if request.method == 'HEAD':
        # Create a response for HEAD request
        response = make_response()
        response.headers['Content-Type'] = 'text/x-component'
        return response

    if request.method == 'GET':
        # Redirect for GET request
        return redirect("https://example.com", code=302)

if __name__ == '__main__':
    app.run(debug=True)

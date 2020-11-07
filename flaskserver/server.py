from flask import Flask
import os

app = Flask( __name__, static_url_path='' )

port = int( os.getenv( 'PORT', 8000 ) )

#localhost:8000/

@app.route("/")
def hello_world():
    
    return "Hello World!"

if __name__ == "__main__":
    app.run( host='0.0.0.0', port=port, debug=True)


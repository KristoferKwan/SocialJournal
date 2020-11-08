#from flask import Flask
from flask import Flask, render_template, request, url_for, jsonify
import os
from utils.chatbotReply import chatbotReply
#from nmt_chatbot.inference import reply
import json

app = Flask( __name__)#, static_url_path='' )

port = int( os.getenv( 'PORT', 8000 ) )

@app.route("/")
def get_chatbot_response():
    #question = request.args.get("question")
    """
    insert code for inference app
    """
    #res = dict()
    #res["question"] = question
    #res["answer"] = reply(question)
    #json.dumps(res)
    # res
    return "Hello World"

"""
set FLASK_APP=server.py
set FLASK_ENV=development
python -m flask run
"""
if __name__ == "__main__":
    app.run( host='0.0.0.0', port=port, debug=True)


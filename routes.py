import os
import sys
from flask import Flask, render_template

################################################################################
app = Flask(__name__)
################################################################################
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "freedom")

################################################################################
                             ## ROUTES ##
################################################################################

@app.route("/")
def index():
    """ my about me page"""
    return render_template("index.html")

@app.route("/test")
def test():
    """ my about me page"""
    return render_template("test.html")

@app.route("/error")
def error():
    raise Exception("Error!")
    
################################################################################
if __name__ == "__main__":
    
    PORT = int(os.environ.get("PORT", 5000))
    DEBUG = "NO_DEBUG" not in os.environ

    app.run(debug=DEBUG, host="0.0.0.0", port=PORT)


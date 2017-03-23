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
def pages():
    """ my about me page"""
    # return render_template("page.html")
    return render_template('404.html')



@app.errorhandler(404)
def error_page(error):
    return render_template('404.html'), 404

@app.route("/error")
def error():
    raise Exception("Error!")

################################################################################
if __name__ == "__main__":

    PORT = int(os.environ.get("PORT", 5000))
    DEBUG = "NO_DEBUG" not in os.environ

    app.run(debug=DEBUG, host="0.0.0.0", port=PORT)


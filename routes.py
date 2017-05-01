import os
import sys
from flask import Flask, render_template, Response
from flask import send_file, current_app as app
from flask import Flask, make_response
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
    return render_template("base_page.html")
    return '''
        <html><body>
         <a href="/resume">resume</a>
        </body></html>
        '''


@app.route("/resume")
def get_resume():
    # with open("Uma_Petersen_Resume.pdf") as fp:
    #     csv = fp.read()
    csv = '1,2,3\n4,5,6\n'
    return Response(
        csv,
        mimetype="text/csv",
        headers={"Content-disposition":
                 "attachment; filename=Uma_Persen_Resume.pdf"})


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


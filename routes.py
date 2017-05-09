import os
import sys
from flask import Flask, render_template, Response
from flask import send_file, current_app as app
from flask import Flask, make_response
from flask_mail import Mail
################################################################################
app = Flask(__name__)

app.config.update(
    DEBUG=True,
    #EMAIL SETTINGS
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=465,
    MAIL_USE_SSL=True,
    MAIL_USERNAME = 'nerdlife1010.com',
    MAIL_PASSWORD = 'NerdLife!510'
    )
mail = Mail(app)
################################################################################
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "freedom")

################################################################################
                             ## ROUTES ##
################################################################################

@app.route("/")
def index():
    """ Personal Web Site"""
    return render_template("base_page.html")
    msg = Message(
              'Hello',
           sender='uma.petersen@gmail.com',
           recipients=
               ['nerdlife1010.com'])
    msg.body = "This is the email body"
    mail.send(msg)
    return "Sent"

    return '''
        <html><body>
         <a href="/resume">resume</a>
        </body></html>
        '''

@app.route("/thanks")
def thanks():

    return render_template("thanks.html")

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


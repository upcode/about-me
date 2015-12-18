import os
import sys
from flask import Flask, render_template


################################################################################
app = Flask(__name__)
################################################################################
# app.secret_key = os.environ.get("FLASK_SECRET_KEY", "freedom")

################################################################################
                             ## ROUTES ##
################################################################################

@app.route("/")
def index():
    """ my about me page"""
    return render_template("index.html")
    
################################################################################

  
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=PORT)
    PORT = int(os.environ.get("PORT", 5000))

from flask import Flask, render_template
application = Flask(__name__)

@application.route('/')
@application.route('/index')
def index():
    return render_template('index.html', title='Home')
@application.route('/about')
def about():
    return render_template('about.html', title='About')
@application.route('/photography/people')
def people():
    return render_template('people.html', title='People')
@application.route('/photography/places')
def places():
    return render_template('places.html', title='Places')
@application.route('/photography/food')
def food():
    return render_template('food.html', title='Food')
@application.route('/photography/pseudohumans')
def pseudohumans():
    return render_template('pseudohumans.html', title='Pseudohumans')
@application.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    application.run(host='0.0.0.0')

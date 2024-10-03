from flask import Blueprint, jsonify

routes = Blueprint('routes', __name__)

@routes.route('/')
def home():
    return "Welcome to GreenPath Academy!"  

@routes.route('/api/resource')
def resource():
    return jsonify({"message": "Here are your resources!"})

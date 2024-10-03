from flask import Blueprint, jsonify, request
from models import Course, Resource, db

routes = Blueprint('routes', __name__)

@routes.route('/courses', methods=['GET'])
def get_courses():
    courses = Course.query.all()
    return jsonify([{'id': course.id, 'title': course.title, 'description': course.description} for course in courses])

@routes.route('/resources', methods=['GET'])
def get_resources():
    resources = Resource.query.all()
    return jsonify([{'id': resource.id, 'title': resource.title, 'link': resource.link} for resource in resources])

@routes.route('/add_course', methods=['POST'])
def add_course():
    data = request.json
    new_course = Course(title=data['title'], description=data['description'])
    db.session.add(new_course)
    db.session.commit()
    return jsonify({'message': 'Course added successfully!'}), 201

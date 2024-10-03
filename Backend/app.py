from flask import Flask
from flask_cors import CORS
from models import db  # Ensure your models are properly defined
from routes import routes  # Ensure routes are properly defined in routes.py
from config import Config
from flask_migrate import Migrate  # Import Flask-Migrate

# Create a Flask application instance
app = Flask(__name__)

# Load configuration from the Config class
app.config.from_object(Config)

# Initialize database and CORS
db.init_app(app)
CORS(app)

# Initialize Flask-Migrate for database migrations
migrate = Migrate(app, db)

# Register blueprints
app.register_blueprint(routes)

# Run the application in debug mode if executed directly
if __name__ == '__main__':
    app.run(debug=True)

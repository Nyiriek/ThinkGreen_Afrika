from flask import Flask
from flask_cors import CORS
from models import db
from routes import routes
from config import Config
from flask_migrate import Migrate  # Import Flask-Migrate

app = Flask(__name__)
app.config.from_object(Config)

# Initialize extensions
db.init_app(app)
CORS(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)  # Set up Flask-Migrate for database migrations

# Register blueprints
app.register_blueprint(routes)

if __name__ == '__main__':
    app.run(debug=True)

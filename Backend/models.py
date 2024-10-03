from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime
from flask_sqlalchemy import SQLAlchemy

# Create a new instance of SQLAlchemy
db = SQLAlchemy()

class Course(db.Model):
    __tablename__ = 'courses'

    id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Course {self.title}>'

class Resource(db.Model):
    __tablename__ = 'resources'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    url = Column(String(200), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Resource {self.name}>'

class Community(db.Model):
    __tablename__ = 'community'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Community {self.name}>'

class ContactUs(db.Model):
    __tablename__ = 'contact_us'

    id = Column(Integer, primary_key=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<ContactUs {self.name}>'

class User(db.Model):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String(50), nullable=False, unique=True)
    email = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(128), nullable=False)  # Store hashed passwords
    created_at = Column(DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.username}>'

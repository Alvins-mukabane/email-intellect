# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Run a simple command to show it works
CMD ["python3", "-c", "print('Email Intellect System Online')"]
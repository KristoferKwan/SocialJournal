"""
app for running Python apps on Bluemix
"""

# Always prefer setuptools over distutils
from setuptools import setup, find_packages
# To use a consistent encoding
from codecs import open
from os import path

here = path.abspath(path.dirname(__file__))

# Get the long description from the README file

setup(
    name='social-journal-chatbot',
    version='1.0.0',
    description='app for running Python apps on Bluemix',
    license='Apache-2.0'
)
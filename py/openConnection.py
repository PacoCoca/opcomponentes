#!/usr/bin/python3
import pymysql

DATABASE = 'opcomponentes'

# Open connection
db = pymysql.connect(host='localhost', database=DATABASE)
# Create cursor
cursor = db.cursor()


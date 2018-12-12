#!/usr/bin/python3
import pymysql
from openConnection import cursor

cursor.execute("SELECT * FROM Usuario")

myresult = cursor.fetchall()

for x in myresult:
	print(x)

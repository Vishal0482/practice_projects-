import turtle 
from random import randint

turtle.speed(0)
turtle.bgcolor('black')
x=1
for  x in range(300):
	r = randint(0,255)
	g = randint(0,255)
	b = randint(0,255)
	
	turtle.colormode(255)
	turtle.pencolor(r,g,b)
	turtle.forward(50+x)
	turtle.left(90.911)
	x=x+1
	
turtle.done()
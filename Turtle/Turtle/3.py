import turtle as nen
#nen=turtle.Turtle()
nen.getscreen().bgcolor("black")
nen.pencolor("white")
nen.speed(0)
nen.penup()
nen.goto((0,200))
nen.pendown()
a=0
b=0
while True:
	nen.forward(a)
	nen.right(b)
	a+=3
	b+=1
    
	if b ==200:
		break
		
		
nen.done()
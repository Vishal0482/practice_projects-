import turtle

turtle.bgcolor('pink')
nen = turtle.Turtle()

nen.penup()
nen.goto((-200,100))
nen.pendown()
nen.speed(200)
nen.color('#8a2f65')
def star(turtle, size):
	if size <= 10:
		return
	else:
		turtle.begin_fill()
		for i in range(5):

			turtle.forward(size)
			star(turtle, size/3)
			turtle.left(216)
		turtle.end_fill()

star(nen, 360)

turtle.done()
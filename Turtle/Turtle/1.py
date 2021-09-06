import turtle as dsc

# dsc = turtle.Turtle()
dsc.color("black", "yellow")
#dsc.pencolor("blue")
# Square
dsc.begin_fill()
dsc.forward(100)
dsc.right(90)
dsc.forward(100)
dsc.right(90)
dsc.forward(100)
dsc.right(90)
dsc.forward(100)
dsc.end_fill()

dsc.penup()
dsc.right(90)
dsc.forward(120)
dsc.pendown()

dsc.begin_fill()
dsc.right(0)
dsc.forward(100)
dsc.right(90)
dsc.forward(100)
dsc.right(90)
dsc.forward(100)
dsc.right(90)
dsc.forward(100)

dsc.end_fill()


dsc.done()
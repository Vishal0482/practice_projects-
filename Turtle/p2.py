import turtle
turtle.speed(0)
turtle.color("red","pink")
turtle.begin_fill()

for i in range(40):
    turtle.forward(300)
    turtle.left(170)

turtle.end_fill()
turtle.done()
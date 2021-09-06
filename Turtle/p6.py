import turtle
turtle.color("blue","yellow")
turtle.begin_fill()
turtle.width(5)
turtle.penup()
turtle.goto(-300,-300)
turtle.pendown()

for i in range(4):
    turtle.fd(600)
    turtle.left(90)

turtle.left(45)
turtle.fd(600)
turtle.circle(100)

turtle.end_fill()
turtle.done()
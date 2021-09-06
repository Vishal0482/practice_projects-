import turtle

vish = turtle.Turtle()
vish.color("red")
turtle.begin_fill()
vish.penup()
vish.goto(-300,-300)
vish.pendown()
for i in range(4):
    vish.fd(600)
    vish.left(90)

turtle.end_fill()
#vish.fd(1300)
#vish.left(90)
#vish.fd(600)
#vish.left(90)
#vish.fd(1300)
#vish.left(90)
#vish.fd(600) 

turtle.done()
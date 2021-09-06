import turtle
color=["red","purple","blue","green","orange","yellow"]
turtle.bgcolor("black")
turtle.speed(10)

for i in range(360):
    turtle.pencolor(color[i%6])
    turtle.width(i/100+1)
    turtle.forward(i)
    turtle.left(59)

turtle.done()
import turtle
turtle.bgcolor("black")
turtle.width(2)
turtle.color("red","yellow")
def trifun(size):
    for i in range(3):
        turtle.fd(size)
        turtle.left(120)
        size = size-5

for i in range(5):
    trifun(150)
    trifun(135)
    trifun(120)

turtle.done()
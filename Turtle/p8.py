import turtle
colors = [ "red","green","blue","yellow","white" ]
turtle.bgcolor("black")

def pentfun(size):
    for x in range(10):
        turtle.pencolor(colors[x % 5])
        turtle.width(x/10 + 1)
        turtle.fd(x+100)
        turtle.left(72)
    
for i in range(5):
    pentfun(150)
    pentfun(135)
    pentfun(120)
    pentfun(105)
turtle.done()
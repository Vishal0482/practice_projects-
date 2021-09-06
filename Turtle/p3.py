import turtle  

my_wn = turtle.Screen()
my_wn.bgcolor("black")
my_wn.title("Turtle")
my_pen = turtle.Turtle()
my_pen.color("red")


def my_sqrfunc(size):
   for i in range(4):
  
        my_pen.fd(size)
        my_pen.left(90)
        size = size - 5

for i in range(10):
        my_sqrfunc(146)
        my_sqrfunc(126)
        my_sqrfunc(106)
        my_sqrfunc(86)
        
turtle.done()
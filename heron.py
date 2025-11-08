square = 10001122132341768980980989891919919822882992929929929292929299292929292929292

side1 = 10
side2 = square / side1

precision = 1000

n = 0

while (n < precision): 
  side1 = 1 / 2 * (side1 + side2)
  side2 = square / side1
  n+=1

print(side1 , side2)
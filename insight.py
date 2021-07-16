import random
import sys
choicefile=open("naval.txt","r",encoding="utf8")
linelist=[]
for line in choicefile:
    linelist.append(line)
choice=random.choice(linelist)
print(choice)
sys.stdout.flush()


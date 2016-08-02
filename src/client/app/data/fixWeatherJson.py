#!/usr/bin/python
import sys, os

f = open(os.path.join(os.path.dirname(__file__), 'city.list.json'), 'r')

sys.stdout.write('[')
sys.stdout.flush()

for line in f:
    text = line.strip()
    sys.stdout.write(text + ',')
    sys.stdout.flush()

sys.stdout.write(']')
sys.stdout.flush()
f.close()

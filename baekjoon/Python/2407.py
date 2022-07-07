import math

n,m = map(int, input().split())
N = math.factorial(n)
M = (math.factorial(n - m)) * (math.factorial(m))
print(N // M)
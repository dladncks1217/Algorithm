import sys

input = sys.stdin.readline

def cnt(n):
    if n==0 or n==1:
        return 1
    arr = [0 for _ in range(n+1)]
    arr[1] = 1
    arr[2] = 3
    for i in range(3,n+1):
        arr[i] = arr[i-1]+2*arr[i-2]

    return arr[n]

while True:
    try:
        print(cnt(int(input())))
    except:
        break
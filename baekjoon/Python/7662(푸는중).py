from ctypes import sizeof
from sys import stdin
import heapq

loop = int(input())

for _ in range(loop):
    loop2 = int(input())
    minheap = []
    maxheap = []

    for _ in range(loop2):
        oper, num = input().split(" ")
        num = int(num)
        if oper=='D' and num==1:
            if maxheap:
                
                heapq.heappop(maxheap)
        elif oper=='D' and num==-1:
            if minheap:
                
                heapq.heappop(minheap)
        elif oper=='I':
            print('넣는다 + %d'%num)
            heapq.heappush(maxheap,(-num, num))
            heapq.heappush(minheap, num)
    # print("길이는 %s"%minheap)
    if len(minheap) or len(maxheap):
        print(heapq.heappop(maxheap)[1], heapq.heappop(minheap))
    else:
        print("EMPTY")


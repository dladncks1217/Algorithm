N = int(input())
M = int(input())
S = input()
P = 'IO' * N + 'I'
switch = False
count = 1
output = 0

for i in range(M):
    if not switch and S[i] == 'I': switch = True
    elif switch and S[i] != S[i-1]: count += 1
    else:
        if count >= len(P):
            output += (count - len(P))//2 + 1
        count = 1
        if S[i] == 'O': switch = False
if count >= len(P):
    output += (count - len(P))//2 + 1
print(output)
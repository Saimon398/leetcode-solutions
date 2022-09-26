def LIS (sequence):
    numsInSequence = len(sequence)
    subsequenceLength = [0] * numsInSequence
    
    for i in range(numsInSequence):
        for j in range(0, i):
            if(sequence[j] < sequence[i] and subsequenceLength[j] > subsequenceLength[i]):
                subsequenceLength[i] = subsequenceLength[j]
        subsequenceLength[i] += 1
    return max(*subsequenceLength)
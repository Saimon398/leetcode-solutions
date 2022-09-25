def leftBorder (collection, target):
    left = -1;
    right = len(collection)
    
    while((right - left) > 1):
        middle = (right + left) // 2
        if (collection[middle] < target):
            left = middle
        else: 
            right = middle
    return left

def rightBorder (collection, target):
    left = -1;
    right = len(collection)
    
    while((right - left) > 1):
        middle = (right + left) // 2
        if(collection[middle] > target):
            right = middle
        else: 
            left = middle
    return right

def binarySearch (collection, target):
    # collection: Collection where target should be found
    # target: Value to be found in collection

    leftBondary = leftBorder(collection, target)
    rightBondary = rightBorder(collection, target)
    if(rightBondary - leftBondary == 1):
        return -1
    return leftBondary + 1
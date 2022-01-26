/*  There is a light in a room which lights up only when someone is in the room (think motion detector). You are given a set of intervals in entrance and exit times as single integers,
    and expected to find how long the light has been on. When the times overlap, you need to find the time between the smallest and the biggest numbers in that interval.

    Input Description
    You'll be given a set of two integers per line telling you the time points that someone entered and exited the room, respectively. Each line is a visitor, each block is a room.
    Example:

    1 3
    2 3
    4 5

    Output Description
    Your program should report the number of hours the lights would be on. From the above example:

    3

    Input
    2 4  
    3 6  
    1 3  
    6 8

    6 8
    5 8
    8 9
    5 7
    4 7

    Output
    7

    5
    
    Bonus Input
    15 18
    13 16
    9 12
    3 4
    17 20
    9 11
    17 18
    4 5
    5 6
    4 5
    5 6
    13 16
    2 3
    15 17
    13 14
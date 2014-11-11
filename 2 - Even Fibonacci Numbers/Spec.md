# 2. Even Fibonacci Numbers
==============

For a Fibonacci sequence that does not exceed four million, find the sum of the even-valued terms.

## My Solution

A typical way to generating a Fibonacci sequence is to use a memo pattern.  Here, however, there is no need to retain the sequence, merely it's sum.  

To be space efficient, I use an array which only ever contains the last two number of the sequence.

Finally, I take advantage of the fact that a Fibonaci sequence starting from `0 + 1` will always follow the pattern `odd, odd, even`;  By tracking iterations with a counter, I can simply add every third fibonacci number to the sum (a slightly faster calculation than modulus).
# 13. Large Sum

Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.

(see data.txt for given numbers)

The spirit of the question, as I interpret it, is how do you add numbers so large that you can't store them as integers?  So, my solution keeps the given numbers in string format and performs long addition on them, that is, adds each place separately, concatenating a solution.

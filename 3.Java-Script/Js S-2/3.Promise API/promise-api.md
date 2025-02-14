/* 

Promise api will take promises as iterables as input

promise.all() - will wait for all promise to resolved or return just after a single rejection 

FAIL FAST MODEL

promise.allSettled() - will wait for all promise to get settled

promise.race() - will wait for first promise resolve or rejection

promise.any() - will wait for first resolved promise or it give iterable of rejected promises


*/ 


## Promise is settled means we got the result 

- It can be either be sucess or failure
- It can be fullfilled or rejected
- It can be resolved or reject
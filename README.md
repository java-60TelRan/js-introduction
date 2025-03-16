# Transform the methods getUserPassword, login, getUserData to asynchronous function
## all these functions should return promises
### getUserPassword returns promise that mooves to resolved state after 1 second with resolve call taking the password
### login returns promise in the state resolved in 2 seconds if password is 'correct' otherwise in the state rejected with appropriate message
### getUserData returns promise in the state resolved with existing username in 1 second if username exists otherwise promise in the state rejected with appropriate message
### funStackExample takes username, call asynchronous getUsername, then call asynchronous login, then call asynchronous getUserData and then print out user data. If there is some Promise in the state rejected (catch) the appropriate message should be printed
Note: rejected state is defined by throwing exception in each asynchronous function

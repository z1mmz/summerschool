x <- 1:10
answer <- sample(x,2)
guess <- FALSE
ask <- function(){
  attempts <- 0
  while(!setequal(guess,answer)){
    print("Try guess the two numbers I picked between 1 and 10 (seperate by commas)")
    rawguess <- readline()
    if(attempts > 5){
      print("If you need a hint type help me")
      if(rawguess == "help me"){
        print(answer[1]) 
      }
    }
    guess <- as.vector(unlist(strsplit(rawguess, ",")))
    attempts <- attempts + 1
  }
  return(attempts)
}
print(sprintf("congrats you did it in %i attempts!",ask()))



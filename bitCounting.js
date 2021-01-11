const countBits = n => {
    let i = 0
    if(n <= 0){
     return i
    } else {
      while(n != 0){
        if(n % 2 != 0){
          i++
          n = parseInt(n / 2)
        } else {
          n = parseInt(n / 2)
        }
      }
      return i
    }
}
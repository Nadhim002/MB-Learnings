function outer(){


    for ( let i = 0 ; i < 6 ; i++ ){

        setTimeout(  
         () => console.log(i)   , i*1000)
    }


}

// It will work bcoz new refernce of i is passed to every time

outer()
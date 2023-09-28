export const useDebounce = (delay, func)=>{
    let id;
    return (...args)=>{
      if(id){
        clearTimeout(id)
      }
      id = setTimeout(()=>{
        func.apply(this, args)
      },delay)
    }
}
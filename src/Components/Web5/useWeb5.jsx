import { useEffect } from "react"
import web5

const useWeb5 = () => {
    useEffect(()=>{
        const { web5, did} = web5.connect()
    })
  return (
    <div>useWeb5</div>
  )
}

export default useWeb5
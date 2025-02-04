
import NET from 'vanta/src/vanta.net'
import { useEffect } from 'react'
const Bganimation = () => {
    useEffect(()=>{
        NET({
            el:'#vanta'
        })
    },[])
  return (
    <div className='bg' id="vanta"></div>
  )
}

export default Bganimation

  
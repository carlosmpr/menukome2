import React,{useEffect} from 'react'
import MiniSlide from '../components/Slide/MiniSlide'
import TextHeader from '../components/Text/TextHeader'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setData} from '../features/counter/counterSlice'
const width = "w-1/2"
const details = true
export default function MenuInfo() {
 const dispatch = useDispatch()
  const menuSelected = useSelector(state=> state.counter.menuSelected)
  const data = useSelector(state=> state.counter.data)
  useEffect(() => {
    (async function() {
      try {
          const response = await axios.post(
              `https://xmazrc1yvj.execute-api.us-east-1.amazonaws.com/Dev/menu`,{
                search: menuSelected
              }
          );
          
          dispatch(setData(response.data.body.Items))
      } catch (e) {
          console.error(e);
      }
  })()
    
  }, [menuSelected])

  console.log(data)

  if(!data.length >0){
    return <p>Loading....</p>
  }
    return (
        <>
        <TextHeader text={menuSelected} />
        <div className="w-full flex flex-1 space-y-4 flex-wrap">

          {data.map( food => <MiniSlide w={width} details={details} {...food}/>)}           
        
      </div>
      </>
    )
}

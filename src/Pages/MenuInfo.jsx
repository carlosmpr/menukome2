import React,{useEffect,useState} from 'react'
import MiniSlide from '../components/Slide/MiniSlide'
import TextHeader from '../components/Text/TextHeader'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setData} from '../features/counter/counterSlice'
import Search from '../components/Search'
const width = "w-1/2"
const details = true
export default function MenuInfo() {
 const dispatch = useDispatch()
  const menuSelected = useSelector(state=> state.counter.menuSelected)
  const data = useSelector(state=> state.counter.data)
  const [loading, setLoading] = useState(false)
  const [search , setSearch] = useState('')
  useEffect(() => {
    (async function() {
      try {
          const response = await axios.post(
              `https://xmazrc1yvj.execute-api.us-east-1.amazonaws.com/Dev/menu`,{
                search: menuSelected
              }
          );
          
          dispatch(setData(response.data.body.Items))
          setLoading(true)
      } catch (e) {
          console.error(e);
      }
  })()
    
  }, [menuSelected])


  if(!loading){
    return <p>Loading....</p>
  }
  if(!data.length >0){
    return <p>No menu found</p>
  }

  const filterData = () => (data.filter( newData => newData.name.toLowerCase().includes(search.toLowerCase())  ))
   
  console.log(filterData())
  return (
        <>
        <TextHeader text={menuSelected} />
        <Search setSearch={setSearch} search={search}/>
        <div className="w-full flex flex-1 space-y-4 flex-wrap">
          {filterData().map( food => <MiniSlide w={width} details={details} {...food}/>)}           
      </div>
      </>
    )
}



import React,{useEffect,useState} from 'react'
import MiniSlide from '../components/Slide/MiniSlide'
import TextHeader from '../components/Text/TextHeader'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setData} from '../features/counter/counterSlice'
import Search from '../components/Search'
import InfoBanner from '../components/cards/InfoBanner'
import { useSpring, animated } from 'react-spring'
import Loading from '../components/Loading'
import ErrorNotFount from '../components/ErrorNotFount'
const width = "w-1/2"
const details = true
export default function MenuInfo() {
  window.scrollTo(0,0)
  const props = useSpring({ to: { opacity: 1, y:0 }, from: { opacity: 0 , y:20},  delay: 500 })
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
    return <Loading />
  }
  if(!data.length >0){
    return <ErrorNotFount />
  }

  const filterData = () => (data.filter( newData => newData.name.toLowerCase().includes(search.toLowerCase())  ))
  return (
        <>
        
        <TextHeader text={menuSelected} />
        <Search setSearch={setSearch} search={search}/>

        <InfoBanner />
        <animated.div className="w-full flex flex-1 space-y-4 flex-wrap" style={props}>
          {filterData().map( food => <MiniSlide w={width} details={details} key={food.name } {...food}/>)}           
      </animated.div>
      </>
    )
}



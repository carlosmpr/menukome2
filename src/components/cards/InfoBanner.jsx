import React from 'react'
import  {ReactComponent as  LikeIcon} from '../../assets/icons/like.svg'
import {ReactComponent as  UserIcon} from '../../assets/icons/user.svg'
import {ReactComponent as  ChefIcon} from '../../assets/icons/chef.svg'
import { useSpring, animated } from 'react-spring'
export default function InfoBanner() {
    const props = useSpring({ to: { opacity: 1, x:0 }, from: { opacity: 0 , x:-10},  delay: 600 })
    return (
    <>
   
        <animated.div className="w-full flex justify-evenly items-center h-14 mb-12 shadow-lg rounded-md bg-gray-100" style={props}>
            <div className="flex flex-col items-center">
            <LikeIcon className={'w-5 h-5'} fill={ 'red'}/>
            <p className="text-xs">House Favorites</p>
            </div>
            <div className="flex flex-col items-center">
          <UserIcon className={'w-6 h-6'} fill={'red' }/>
          <p className="text-xs">User Favorites</p>
          </div>
          <div className="flex  flex-col  items-center">
          <ChefIcon className={'w-5 h-5'} fill={ 'red' }/>
          <p className="text-xs">House recomended</p>
          </div>
        </animated.div>
        </>
    )
}

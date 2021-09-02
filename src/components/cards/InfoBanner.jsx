import React from 'react'
import  {ReactComponent as  LikeIcon} from '../../assets/icons/like.svg'
import {ReactComponent as  UserIcon} from '../../assets/icons/user.svg'
import {ReactComponent as  ChefIcon} from '../../assets/icons/chef.svg'
export default function InfoBanner() {
    return (
    <>
   
        <div className="w-full flex justify-evenly items-center h-14 mb-12 shadow-lg rounded-md bg-gray-100">
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
        </div>
        </>
    )
}

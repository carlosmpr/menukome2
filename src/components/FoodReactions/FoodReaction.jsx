import React from 'react'
import  {ReactComponent as  LikeIcon} from '../../assets/icons/like.svg'
import {ReactComponent as  UserIcon} from '../../assets/icons/user.svg'
import {ReactComponent as  ChefIcon} from '../../assets/icons/chef.svg'

export default function FoodReaction() {
    return (
        <div className="flex items-center">
          <LikeIcon className={'w-5 h-5'} fill={"red"}/>
          <UserIcon className={'w-6 h-6'} fill={"gray"}/>
          <ChefIcon className={'w-5 h-5'} fill={"gray"}/>
        </div> 
    )
}

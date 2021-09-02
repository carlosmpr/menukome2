import React from 'react'
import  {ReactComponent as  LikeIcon} from '../../assets/icons/like.svg'
import {ReactComponent as  UserIcon} from '../../assets/icons/user.svg'
import {ReactComponent as  ChefIcon} from '../../assets/icons/chef.svg'

export default function FoodReaction({likes , recomended}) {
    return (
        <div className="flex items-center">
          <LikeIcon className={'w-5 h-5'} fill={likes > 80 ? 'red': 'gray'}/>
          <UserIcon className={'w-6 h-6'} fill={likes > 25 ? 'red' :'gray'}/>
          <ChefIcon className={'w-5 h-5'} fill={recomended ? 'red' :'gray'}/>
        </div> 
    )
}

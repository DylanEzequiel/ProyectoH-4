import React from 'react'
import { ICategory } from '@/types'
import { categoriesToPreLoad } from '@/helpers/categories'
import style from "./style.module.css"

export default function CategoryCont():React.ReactElement {
  return (
    <div className={style.CatCont}>
        {categoriesToPreLoad.map((category:ICategory, index:number)=>{return <b key={index}className={style.cat}>{category.name}</b>})}
    </div>
  )
}

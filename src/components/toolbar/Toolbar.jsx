import React from 'react'
import { Link } from 'react-router-dom'

export default function Toolbar() {
  return (
    <div className='w-10/12 rounded-full h-14 bg-zinc-600 flex items-center px-8 justify-between'>
      <Link to="/">الرئيسية</Link>
      <Link to="/similarities">المتشابهات</Link>
      <Link to="/coloring">التلوين</Link>
      <Link to="/shadow"> الظل و الشكل</Link>
      <Link to="/puzzle">بازل</Link>
      <Link to="/shapeNumber">الأشكال و عددها</Link>
      <Link to="/maze">المتاهة</Link>
      <Link to="/about">عنا</Link>
    </div>
  )
}

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  const [bookmark, setBookmark] = useState([]);

  const [readTime, setReadTime] = useState([]);

  // console.log(readTime)
  const handleReadTime = (time) =>{
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
  }


  const handleBookMark = (blog) => {
    const newBookMark = [...bookmark, blog];
    setBookmark(newBookMark);

  }

  return (
    <>
    <Header></Header>
    <div className='flex max-w-screen-xl mx-auto mt-5 gap-10'>
     <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>
      <Sidebar bookmark={bookmark} readTime={readTime}></Sidebar>
    </div>

    </>
  )
}

export default App

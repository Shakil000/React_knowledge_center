import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookMark,handleReadTime}) => {

    // Destructure data from blogs
    const {cover,title,author,author_img,posted_date,reading_time,hashtags} = blog;
    // console.log(title);
    return (
        <div className='mb-20'>
           <img className='w-full h-96' src={cover} alt="" />
           <div className='flex justify-between mt-5'>
            <div className='flex gap-3'>
            <div>
                <img className='h-14 rounded-full' src={author_img} alt="" />
            </div>   
            <div>
                <h1 className='font-bold'>{author}</h1>
            <p>{posted_date}</p>
            </div>
            </div>
            <div className='flex gap-3 items-center'>
            <p>{reading_time} min read</p>
            <button onClick={ () => handleBookMark(blog)}><FaRegBookmark /></button>
            </div>
           </div>
           <h1 className='text-3xl font-bold py-5'>{title}</h1>
           <p className='gap-5 mb-5 text-green-500'>{ hashtags }</p>
           <button onClick={ () => handleReadTime(reading_time)} className='mb-5 underline text-blue-600'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}
export default Blog;
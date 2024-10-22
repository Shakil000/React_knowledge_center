import PropTypes from 'prop-types';
import Side from '../Said/Side';

const Sidebar = ({ bookmark,readTime}) => {
    return (
        <div className="w-1/3">
             <h1 className='text-2xl'>Spent time on read: {readTime}</h1>
            <h1 className="text-3xl">Bookmark Bar: {bookmark.length}</h1>
           
           <div>
           {
                bookmark.map(book => <Side key={book.id} book={book}></Side>)
            }
           </div>
        </div>
    );
};

Sidebar.propTypes = {
    bookmark: PropTypes.array.isRequired,
    readTime: PropTypes.func.isRequired
}
export default Sidebar;
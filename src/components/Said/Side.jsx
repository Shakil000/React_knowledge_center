import PropTypes from 'prop-types';

const Side = ({book}) => {
    
    const {title} = book;
    // console.log(title);
    return (
        <div className='border bg-slate-400 p-4 m-4'>
            <h1>{title}</h1>
        </div>
    );
};

Side.propTypes = {
    book: PropTypes.object.isRequired,
    handleReadTime: PropTypes.func.isRequired
}
export default Side;
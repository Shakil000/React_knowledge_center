import profile from '../../assets/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between max-w-screen-xl mx-auto items-center p-3 border-b-2'>
             <h1 className='text-2xl font-bold'>Knowledge Center</h1>
             <img src={profile} alt="" />
        </div>
    );
};

export default Header;
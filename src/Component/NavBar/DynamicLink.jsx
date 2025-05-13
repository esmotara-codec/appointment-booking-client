const DynamicLink= ({route}) => {
    return (
        <div>
            <li className='px-3 p-2 text-black'>
                <a href={route.path}>{route.name}</a>
            </li>
            
        </div>
    );
};

export default DynamicLink;
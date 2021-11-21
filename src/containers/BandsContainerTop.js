import { Outlet } from 'react-router-dom'

const BandsContainerTop = () => {
    return (
        <div> 
            <h1>Bands</h1>
            <Outlet />
        </div>
    )
}

export default BandsContainerTop;
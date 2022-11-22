import React from 'react'
import AdminProduct from '../components/AdminProduct';


const Admin = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-4 pb-4'>
                Dashboard
            </div>
            <div className='text-white grid grid-cols-8'>
                <div className='col-span-1'>
                    <ul className='ul-admin text-center bg-[#3c4b64] h-[100vh]'>
                        <li>
                            Đơn hàng
                        </li>
                        <li>Sản Phẩm</li>
                        <li>Khách Hàng</li>
                        <li>Tài Khoản</li>
                        <li>Đăng Xuất</li>
                    </ul>
                </div>
                <div className='col-span-7 bg-[#ebedef]'>
                    <AdminProduct />
                </div>
            </div>
        </div>

    )
}

export default Admin;
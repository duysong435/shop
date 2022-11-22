import React, { useState } from 'react'

const AdminProduct = (props) => {

    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [nameProducts, setNameProducts] = useState('');
    const [details, setDetails] = useState('');
    const [amounts, setAmounts] = useState('');
    const [descriptions, setDescriptions] = useState('');
    const [prices, setPrices] = useState('');

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setIsFilePicked(true);
    }

    return (
        <div>
            {/* <div className='flex justify-evenly mt-4'>
                <div className='p-9 bg-red-300'>Thêm sản phẩm</div>
                <div className='p-9 bg-red-300'>Sửa sản phẩm</div>
                <div className='p-9 bg-red-300'>Xoá sản phẩm</div>
                <div className='p-9 bg-red-300'>Sửa sản phẩm</div>
            </div> */}
            <form method="post" action="" enctype="multipart/form-data" className='text-black ml-5 grid grid-cols-2 mt-3'>
                <div>
                    <label htmlFor="nameProduct">Tên sản phẩm</label>
                    <input className='border border-slate-600 w-full' type="text"
                        id="nameProduct" name="nameProduct" />
                </div>
                <div className='ml-2'>
                    <label htmlFor="detail">Hãng:</label>
                    <input className='border border-slate-600 w-full' type="text"
                        id="detail" name="detail" placeholder={'Nhập tên hãng sản xuất'} />
                </div>
                <div className=''>
                    <label htmlFor="detail">Giá:</label>
                    <input className='border border-slate-600 w-full' type="text"
                        id="detail" name="detail" placeholder={'Nhập tên hãng sản xuất'} />
                </div>
                <div className='ml-2'>
                    <label htmlFor="detail">Hình ảnh:</label>
                    <input className='w-full' type="file"
                        id="detail" name="detail" placeholder={'Nhập tên hãng sản xuất'}
                        onChange={changeHandler}
                    />
                    <div>
                        <div>
                            {/* <p>Filename: {selectedFile.name}</p> */}
                            {/* <p>Filetype: {selectedFile.type}</p> */}
                            {/* <p>Size in bytes: {selectedFile.size}</p> */}
                        </div>
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="amount">Số lượng:</label>
                    <input className='border border-slate-600 w-full' type="text"
                        id="amount" name="amount" placeholder={'Nhập tên hãng sản xuất'} />
                </div>
                <div className='ml-2'>
                    <label htmlFor='desciption'>Mô tả:</label>
                    <textarea className='border border-slate-600 w-full' rows={3} id='desciption' />
                </div>
                <input className='bg-green-500 p-3 col-span-2' type="submit" defaultValue="Submit" />
            </form>

        </div>
    )
}

export default AdminProduct;
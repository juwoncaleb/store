import React from 'react'
import { useRouter } from 'next/router'

function product() {
    const router = useRouter()

    return (

        <div className='productAdmin'>
            <div className='flex justify-between productTabOne pt-10'>
                <input type='text' className="searchItem ml-10" placeholder='Search' />

                <div className='flex  mr-10'>
                    <img className="adminProfile  " src="boxers.png" />
                    <div className='ml-4'>
                        <p>Juwon</p>
                        <p>Admin</p>
                    </div>
                    <select className='profileView ml-4'>
                        <option value="10000">Something</option>
                        <option value="100">Other thing</option>
                        <option value="1">The last option</option>
                    </select>
                </div>

            </div>
            <div className='flex  ml-4 mr-4 bg-white productHeader1 justify-between mt-10'>
                <div className='mt-2 mb-4'>
                    <select className='newCategory' id="cars" name="cars">
                        <option value="volvo">Category</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select>
                    <select className='newCategory ' id="cars" name="cars">
                        <option value="volvo">Status</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select><select className='newCategory ' id="cars" name="cars">
                        <option value="volvo">Price</option>
                        <option value="saab">Women</option>
                        <option value="fiat">Kids</option>
                        <option value="audi">Caps</option>
                        <option value="audi">Discount</option>
                    </select>
                </div>

                <div onClick={() => router.push('/addProduct')} className='flex cursor-pointer justify-center pt-2 pb-2 mr-4 addProduct'>
                    <img className='addIcon mr-2' src="https://img.icons8.com/ios/50/000000/add--v1.png" /> 
                      Add Product
                </div>
            </div>
            <div className='bg-white ml-4 mr-4'>
                <div className='flex justify-start ml-10 mt-6'>
                    <p className='text-center'>PRODUCT</p>

                </div>

                <div className='flex justify-around productHeader mt-4 pt-2'>
                    <p>Product</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Stock</p>
                    <p>Sold</p>
                    <p>Revenue</p>
                    <p>Actions</p>
                </div>

                <div className='flex justify-around  mt-10'>
                    <p>Product</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Stock</p>
                    <p>Sold</p>
                    <p>Revenue</p>
                    <p>Actions</p>
                </div>
                <div className='flex justify-around  mt-10'>
                    <p>Product</p>
                    <p>Category</p>
                    <p>Price</p>
                    <p>Stock</p>
                    <p>Sold</p>
                    <p>Revenue</p>
                    <p>Actions</p>
                </div>

                <div className='flex justify-between mt-10 ml-10 mr-10'>
                    <select className='profileView'>
                        <option value="10000">Something</option>
                        <option value="100">Other thing</option>
                        <option value="1">The last option</option>
                    </select>

                    <p>Pagintion</p>
                </div>
            </div>
        </div>

    )
}

export default product
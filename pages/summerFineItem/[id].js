import React from 'react'
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartSlice'
export default function item({ productItem }) {
    const dispatch = useDispatch
    let price = productItem.price
    console.log(price);


    const addToCart = () => {
        dispatch(addProduct({ ...productItem,  }))
    }


    return (
        <div>
            <Header />
            <p className=" itemHeader ml-auto text-left">  <span className='cursor-pointer' onClick={() => router.push('/men')}>Men</span>   <span className='GreyText ml-2'>   / Summer FIne</span></p>
            <p className='itemHeader_Main text-5xl '>{productItem.name}</p>
            <p className='font-light mt-4 text-4xl'>{productItem.category}</p>
            <p className='font-light mt-4 text-3xl'>${productItem.price}</p>
            <img className='ml-auto mr-auto mt-10' src={productItem.images} />
            <div className='ml-auto mr-auto mt-4 description'>
                <hr className='description_line' />
                <p>Sizes</p>
                <div className='flex'>
                    <p className='pr-4'>S</p>
                    <p className='pr-4'>M</p>
                    <p className='pr-4'>L</p>
                    <p className='pr-4'>XL</p>
                    <p className='pr-4'>XXL</p>

                </div>
                <div className='bg-black bag mt-10'>
                    <p onClick={addToCart} className='text-center text-white bagText '>Add to bag</p>
                </div>
                <hr className='description_line' />
                <p className='text-left mt-6'>Description</p>
                <p className='desc mt-6'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                    <br />
                    - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adip
                </p>
                <div className='flex mt-4'>
                    <img className='laundry pr-4' src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-bleach-textile-care-those-icons-lineal-those-icons-2.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/material-outlined/24/000000/ironing.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-hanger-clothes-and-fashion-kiranshastry-lineal-color-kiranshastry.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-others-pike-picture/50/000000/external-Detergent-cleaning-others-pike-picture-2.png" />
                    <img className='laundry pr-4' src="https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-washing-machine-smart-home-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png" />        </div>
            </div>
            <Footer />
        </div>
    )
}
export async function getServerSideProps({ params }) {
    const product = await fetch(`http://localhost:3000/api/products/${params.id}`)
    const data = await product.json()
    console.log(data);
    return {
        props: {
            productItem: data
        }
    }
}
import React, { useState } from 'react'

function addProduct() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [price, setPrice] = useState('')
    const [desctiption, setDesctiption] = useState('')
    const [quantity, setQuantity] = useState('')
    console.log(name, category);

    let newItem = [
        name, category, subcategory, price, quantity, desctiption
    ]



    const submitComment = async () => {
        // this is to find where we want to post int
        const response = await fetch('/api/Clothes', {
            method: 'POST',
            body: JSON.stringify({ newItem }),
            headers: {
                'content-type': 'application/json',
            },
        })

    }
    console.log(desctiption);
    return (
        <div className='addproduct'>
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
            <div className=''>

                <p className='text-start mb-20 mt-10  addproductText text-4xl'>Add Product</p>



                <div className='flex mb-20 justify-around'>
                    {/* UPLOAD IMAGES */}
                    <div>
                        <div className='uploadImage'>
                            <img className='mt-40 ml-auto mr-auto iageIcon' src="https://img.icons8.com/dotty/80/000000/image--v1.png" />
                            <p className='mt-4'>Drag images here or upload from your computer</p>
                        </div>



                        <div>

                            <p>Cancel</p>
                        </div>
                    </div>


                    <div className='sendDb'>
                        <form action="/action.php">
                            <label for="fname mb-1">Name</label>
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Moncler , Gucci" value={name} onChange={(e) => setName(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Subcategory" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} />
                            <input className='fillOrder mt-10' type="text" id="fname" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <br />
                            <input className='fillOrder mt-10' type="text" id="lname" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <textarea className='fillOrder mt-10' id="txtid" name="txtname" rows="8" cols="100" maxlength="200" placeholder='Description' value={desctiption} onChange={(e) => { setDesctiption(e.target.value) }} >

                            </textarea>
                            <br />
                            <div onClick={submitComment} className='Submitt pl-auto pr-auto mt-4'>
                                <p className='mt-1'>Send to Database</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default addProduct
import React, { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone';

function addProduct() {

    // This is to handle the state of the input
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [subcategory, setSubcategory] = useState('')
    const [price, setPrice] = useState('')
    const [desctiption, setDesctiption] = useState('')
    const [quantity, setQuantity] = useState('')

    // this is used for the dragand drop feature
    const [files, setFiles] = useState([])
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {

        acceptedFiles.forEach((file) => {
            const reader = new FileReader()
            reader.onload = () => {
                setFiles(prevState => [...prevState, reader.result])
            }
            reader.readAsDataURL(file)
        })
    }, [])

    useEffect(() => {
        console.log(files);
    }, [files])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // this is used to get the AWS url
   
   const getUrl = async () =>{
    await fetch('/api/uploadCloud').then(res => res.json())
   }
    // this is used to send data to the database
    const submitComment = async () => {
        // this is to find where we want to post int
        await fetch('/api/Product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                categories: category
            }),

        })
        let data = await res.json()

    }
    return (
        <div className='addproduct'  >
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


                {/* UPLOAD IMAGES */}
                <div className='flex mb-20 justify-around'>

                    <div>
                        <div className='uploadImage' {...getRootProps()}>
                            <img className='mt-40 ml-auto mr-auto iageIcon' src="https://img.icons8.com/dotty/80/000000/image--v1.png" />
                            <p className='mt-4'>Drag images here or upload from your computer</p>
                            <input {...getInputProps()} />

                        </div>
                        {files.length > 0 && <div>
                            {
                                files.map((file, index) => <img src={file} key={index} />)
                            }
                        </div>
                        }
                    </div>
                    <p onClick={getUrl}>UPLOAD</p>



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



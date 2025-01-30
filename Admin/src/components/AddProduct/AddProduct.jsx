import React from 'react'
import './AddProduct.css'
import uploadArea from '../../assets/upload_area.svg'
import { useState } from 'react'

export const AddProduct = () => {

    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        old_price: "",
        new_price: ""
    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const addProduct = async () => {
        // console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:8080/upload', {
            method:'POST',
            headers: {
                Accept:'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data)=> {responseData=data})

        if(responseData.success) {
            product.image= responseData.image_url
            console.log(product);
            await fetch('http://localhost:8080/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'content-Type': 'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert("Product Added"):alert("Failed")
            })
            
        }
    }

  return (
    <div className='AddProduct'>
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        <div className="prices">
            <div className="price">
                <p>Price</p>
                <input value={productDetails.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='Type here'/>
            </div>
            <div className="offerPrice">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type here'/>
            </div>
        </div>
            <p>Product Category</p>
            <select value={productDetails.name} onChange={changeHandler} name="category" className='categorySelect'>
                <option value="Women">Women</option>
                <option value="Men">Men</option>
                <option value="Kid">Kid</option>
            </select>
            <div className="itemField">
                <label htmlFor="imageInput">
                    <img src={image?URL.createObjectURL(image):uploadArea} alt="" />
                </label>
                <input onChange={imageHandler} type="file" id='imageInput' name='image' hidden />
            </div>
        <button onClick={() => {addProduct()}} >ADD</button>
        
    </div>
  )
}

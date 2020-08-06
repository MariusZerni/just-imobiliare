import React, { useState, useContext } from 'react'
import Axios from 'axios'
import Nav from './Nav'
import { UserContext } from './Context'

const EditProfile = (props) => {
  const [editImage, setEditImage] = useState()
  const { user, setUser } = useContext(UserContext)
  const [editProfile, setEditProfile] = useState()
  // console.log('user name', user.name)


  

  const handleImageEdit = (event) => {
    event.preventDefault()
    console.log('image')
    const fileListAsArray = Array.from(event.target.files)
    const fileUrl = URL.createObjectURL(fileListAsArray[0])
    console.log('handle image', { ...editImage, image: fileUrl, files: event.target.files })
    setEditImage({ ...editImage, image: fileUrl, files: event.target.files })

  }


  const handleChangeRegister = (event) => {
    const { name, value } = event.target
    console.log('name', value)
    setEditProfile(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const  handleSubmitRegister = async (event) => {
    event.preventDefault()
    const formData = new FormData()
    if (editImage) {
      formData.append('file', editImage.files[0])
    }
    if (editProfile) {
      formData.append('name', editProfile.name)
      setUser(editProfile.name)
    }

    const id = user._id
    Axios.put(`/api/edit-user/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => {
        console.log('res', res.data) 
        setUser(res.data) 
        props.history.push('/home')
      })
      .catch(err => {
        console.log('error', err.response.data.errors)
        // setErrors(err.response.data.errors)
      })

  }

  return <>
    <Nav />
    <div className="container-edit-profile">
      <div className="container-edit">
        <form encType='multipart/form-data'
          onChange={(event) => handleChangeRegister(event)}
          onSubmit={(event) => handleSubmitRegister(event)}>
          <div className="input">
            <input defaultValue={user ? user.name : ''} type="text" name="name" autoComplete="off" required />
            <label htmlFor="name" className="label-name">
              <span className="content-name">Full name</span>
            </label>
          </div>
          {editImage && <div className="image-profile" style={{ backgroundImage: `url(${editImage.image})` }} ></div> }
          <div className="edit-profile-image">
            <label> Adauga poza profil
              <input
                onChange={event => handleImageEdit(event)}
                name="file"
                type="file" size="60"
                accept="image/png, image/jpeg"
                multiple
              />
            </label>
          </div>      
          <div className="btn-edit">
            <button type="submit" className="button">Update</button>
          </div>
        </form>
      </div>
    </div>
  </>
}



export default EditProfile
import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios'
import Header from '../components/Header'
import { UserContext } from '../components/UserContext'

const EditProfile = (props) => {
  const [editProfile, setEditProfile] = useState()
  const [editImage, setEditImage] = useState()
  // const [user, setUser] = useState()
  const { user, setUser } = useContext(UserContext)
  
  if (editImage) {
    console.log('image', editImage.image)
  }
  


  useEffect(() => {
    console.log('edit', user)
    // if (!props.location.state || !props.location.state.user) {
    //   return
    // } else if (!user && props.location.state.user) {
    //   console.log('user')
    //   setUser(props.history.location.state.user)
    // } 

  })
  const handleImageEdit = (event) => {
    event.preventDefault()
    console.log('image')
    const fileListAsArray = Array.from(event.target.files)
    const fileUrl = URL.createObjectURL(fileListAsArray[0])
    console.log('handle image', { ...editImage, image: fileUrl, files: event.target.files })
    setEditImage({ ...editImage, image: fileUrl, files: event.target.files })
    
    // setEditImage(
    //   event.target.files[0].name
    // )
  }


  // console.log(props.user)
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
    console.log('edit image', editImage)
    console.log('edit profile', editProfile)
    
    const formData = new FormData()
    if (editImage) {
      formData.append('file', editImage.files[0])
    }
    if (editProfile) {
      formData.append('name', editProfile.name)
      setUser(editProfile.name)
    }
    


    // for (const [key, value] of Object.entries(editProfile)) {
    //   formData.append(key, JSON.stringify(value))
    // }

    // formData.forEach((value,key) => {
    //   console.log('form data', key, value)
    // })
    // const toBase64 = file => new Promise((resolve, reject) => {
    //   const reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   reader.onload = () => resolve(reader.result)
    //   reader.onerror = error => reject(error)
    // })

    // const data = {
    //   editProfile: editProfile,
    //   file: await toBase64(editImage)
    // }

    const id = user._id
    console.log('id')
    Axios.put(`/api/edit-user/${id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then((res) => {
        console.log('res', res)  
        props.history.push('/home')
      })
      .catch(err => {
        console.log('error', err.response.data.errors)
        // this.setState({ errors: err.response.data.errors })
      })

  }

  return <>
    <Header user={user} />
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
import axios from "axios"

export const setForm = (formType, formValue) => {
    return {type: 'SET_FORM_DATA', formType, formValue}
}

export const setImgPreview = (payload) => {
    return {type: 'SET_IMG_PREVIEW', payload}
}

export const postToAPI = (form) => {
    console.log(form.title)
    console.log(form.body)
    console.log(form.image)
    const data = new FormData()
        data.append = ('title', form.title)
        data.append = ('body', form.body)
        data.append = ('image', form.image)

        axios.post('http://localhost:3001/v1/blog/post', data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post success: ', res)
        })
        .catch(err => {
            console.log('post error: ', err)
        })
}

export const updateToAPI = (form, id) => {
    console.log(form.title)
    console.log(form.body)
    console.log(form.image)
    const data = new FormData()
        data.append = ('title', form.title)
        data.append = ('body', form.body)
        data.append = ('image', form.image)

        axios.put(`http://localhost:3001/v1/blog/post/${id}`, data, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        .then(res => {
            console.log('post success: ', res)
        })
        .catch(err => {
            console.log('post error: ', err)
        })
}
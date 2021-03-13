import React, { useEffect, useState } from 'react';
import { Link } from '../../components';
import { useHistory, withRouter } from "react-router-dom";
import './detail.scss'
import axios from 'axios';

const DetailBlog = (props) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const id = props.match.params.id;
        axios.get(`http://localhost:3001/v1/blog/post/${id}`)
        .then(res => {
            // console.log('success : '. res)
            setData(res.data.data)
        })
        .catch(err => {
            console.log('error : ', err)
        })
    }, [props])
    const history = useHistory()
    if (data.author) {
        return (
            <div className='detail-blog-wrapper'>
                <img className='image-cover' src={`http://localhost:3001/${data.image}`} alt='thumb' />
                <p className='blog-title'>{data.title}</p>
                <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
                <p className='blog-body'>{data.body}</p>
                <Link title='Kembali ke Home' onClick={() => history.push('/')} />
            </div>
        );
    }
    return <p>Loading data .</p>
}

export default withRouter(DetailBlog);
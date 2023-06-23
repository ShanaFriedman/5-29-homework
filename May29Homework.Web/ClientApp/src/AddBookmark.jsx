import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBookmark = () => {
    const [bookmark, setBookmark] = useState({
        title:'',
        url: '',
    })
    const navigate = useNavigate()
    
    const onTextChange = e => {
        const copy = {...bookmark}
        copy[e.target.name] = e.target.value 
        setBookmark(copy)
    }
    const onSubmit = async e => {
        e.preventDefault()
        await axios.post('/api/bookmark/addbookmark', bookmark)
        navigate('/mybookmarks')
    }

    return(<> <div
        className="row"
        style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
      >
        <div className="col-md-6 offset-md-3 bg-light p-4 rounded shadow">
          <h3>Add Bookmark</h3>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="form-control"
              value={bookmark.title}
              onChange={onTextChange}
            />
            <br />
            <input
              type="text"
              name="url"
              placeholder="Url"
              className="form-control"
              value={bookmark.url}
              onChange={onTextChange}
            />
            <br />
            <button className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
    )
}

export default AddBookmark
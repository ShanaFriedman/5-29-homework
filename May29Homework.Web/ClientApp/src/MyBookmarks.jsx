import React, { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import MyBookmarkRow from './MyBookmarkRow';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MyBookmarks = () => {
    const {user} = useAuth()
    const [myBookmarks, setMyBookmarks] = useState([])

    const getMyBookmarks = async () => {
        const {data} = await axios.get('/api/bookmark/getmybookmarks')
        setMyBookmarks(data)
    }
    
    useEffect(() => {
        getMyBookmarks()
    }, [])

    const onUpdateClick = async bookmark => {
        await axios.post('/api/bookmark/updatebookmark', bookmark)
        getMyBookmarks()
    }

    const onDeleteClick = async bookmark => {
        await axios.post('/api/bookmark/deletebookmark', bookmark)
        getMyBookmarks()
    }

    return (<><div style={{ marginTop: 20 }}>
        <div className="row">
            <div className="col-md-12">
                <h1>Welcome back {user.firstName}</h1>
                <Link className="btn btn-primary btn-block" to="/addbookmark">
                    Add Bookmark
                </Link>
            </div>
        </div>
        <div className="row" style={{ marginTop: 20 }}>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Edit/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {myBookmarks.map(b => <MyBookmarkRow bookmark={b}
                        key={b.id}
                        deleteClick={() => onDeleteClick(b)} 
                        updateClick={onUpdateClick}
                        />)}
                </tbody>
            </table>
        </div>
    </div>
    </>)
}
export default MyBookmarks
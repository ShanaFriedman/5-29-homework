import { useState } from "react"
const MyBookmarkRow = ({ bookmark, deleteClick, updateClick }) => {
    const [editBookmark, setBookmarks] = useState(bookmark)
    const [editMode, setEditMode] = useState(false)

    const onTextChanges = e => {
        setBookmarks({ ...editBookmark, title: e.target.value })
    }

    const onCancelClick = () => {
        setEditMode(false)
        setBookmarks(bookmark)
    }

    const onUpdateClick = async () => {
        await updateClick(editBookmark)
        setEditMode(false)
    }
    return (<>
        <tr>
            <td>
                {!editMode && bookmark.title}
                {!!editMode && <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={editBookmark.title}
                    onChange={onTextChanges}
                />}
            </td>
            <td>
                <a href={bookmark.url} target="_blank">
                    {bookmark.url}
                </a>
            </td>
            <td>
                {!editMode && <><button className="btn btn-success" onClick={() => setEditMode(true)}>Edit Title</button>
                    <button className="btn btn-danger" onClick={deleteClick} style={{ marginLeft: 10 }}>
                        Delete
                    </button></>}

                {!!editMode && <><button className="btn btn-warning" onClick={onUpdateClick}>
                    Update
                </button>
                    <button className="btn btn-info" onClick={onCancelClick}>
                        Cancel
                    </button>
                    <button
                        className="btn btn-danger"
                        style={{ marginLeft: 10 }}
                    >
                        Delete
                    </button></>}
            </td>
        </tr>
    </>)
}
export default MyBookmarkRow
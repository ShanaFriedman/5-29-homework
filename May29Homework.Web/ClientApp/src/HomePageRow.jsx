
const HomePageRow = ({bookmark}) => {
    return(<> <tr>
        <td>
            <a href={bookmark.url} target='_blank'>
                {bookmark.url}
            </a>
        </td>
        <td>{bookmark.count}</td>
    </tr></>)
}
export default HomePageRow
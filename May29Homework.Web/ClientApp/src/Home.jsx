import React ,{useEffect, useState} from 'react';
import axios from 'axios';
import HomePageRow from './HomePageRow';

const Home = () => {
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        const getTopTopFiveBookmarks = async () => {
            const {data} = await axios.get('/api/bookmark/gettopfive')
            setBookmarks(data)
        }
        getTopTopFiveBookmarks()
    }, [])
    
    return(<><div>
        <h1>Welcome to the React Bookmark Application.</h1>
        <h3>Top 5 most bookmarked links</h3>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <th>Url</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {bookmarks.map(b => <HomePageRow 
            key={b.id}
            bookmark={b}/>)}
          </tbody>
        </table>
      </div>
    </>)
}

export default Home
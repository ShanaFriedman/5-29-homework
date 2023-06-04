import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import { AuthContextComponent } from './AuthContext';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';
import AddBookmark from './AddBookmark';
import MyBookmarks from './MyBookmarks';

const App = () => {
    return (
        <AuthContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/addbookmark' element={
                        <PrivateRoute>
                            <AddBookmark />
                        </PrivateRoute>
                    } />
                     <Route exact path='/logout' element={
                        <PrivateRoute>
                            <Logout />
                        </PrivateRoute>
                    } />
                    <Route exact path='/mybookmarks' element={
                        <PrivateRoute>
                            <MyBookmarks/>
                        </PrivateRoute>
                    }/>
                </Routes>
            </Layout>
        </AuthContextComponent>

    )
}

export default App;


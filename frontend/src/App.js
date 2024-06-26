import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
//import { theme } from './theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import LogIn from './pages/LogIn';
import UserDashboard from './pages/user/UserDashboard';
import UserRoute from './component/UserRoute';
import AdminRoute from './component/AdminRoute';
import Layout from './pages/global/Layout';
import UserCoursesHistory from './pages/user/UserCoursesHistory';
import UserInfoDashboard from './pages/user/UserInfoDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import SingleCourse from './pages/SingleCourse';
import DashUsers from './pages/admin/DashUsers';
import DashCourses from './pages/admin/DashCourses';
import Register from './pages/Register';
import DashCategory from './pages/admin/DashCategory';
import DashCreateCourse from './pages/admin/DashCreateCourse';
import DashCreateCategory from './pages/admin/DashCreateCategory';


import { createTheme } from '@mui/material/styles';
import { themeColors } from './theme'
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

//HOC
const UserDashboardHOC = Layout(UserDashboard);
const UserCoursesHistoryHOC = Layout(UserCoursesHistory);
const UserInfoDashboardHOC = Layout(UserInfoDashboard);
const AdminDashboardHOC = Layout(AdminDashboard);
const DashUsersHOC = Layout(DashUsers);
const DashCoursesHOC = Layout(DashCourses);
const DashCategoryHOC = Layout(DashCategory)
const DashCreateCourseHOC = Layout(DashCreateCourse)
const DashCreateCategoryHOC = Layout(DashCreateCategory)





const App = () => {
    const { mode } = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeColors(mode)), [mode]);

    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ProSidebarProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/search/location/:location' element={<Home />} />
                            <Route path='/search/:keyword' element={<Home />} />
                            <Route path='/login' element={<LogIn />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/course/:id' element={<SingleCourse />} />
                            <Route path='/admin/dashboard' element={<AdminRoute><AdminDashboardHOC /></AdminRoute>} />
                            <Route path='/admin/users' element={<AdminRoute><DashUsersHOC /></AdminRoute>} />
                            <Route path='/admin/courses' element={<AdminRoute><DashCoursesHOC /></AdminRoute>} />
                            <Route path='/admin/category' element={<AdminRoute><DashCategoryHOC /></AdminRoute>} />
                            <Route path='/admin/course/create' element={<AdminRoute><DashCreateCourseHOC /></AdminRoute>} />
                            <Route path='/admin/category/create' element={<AdminRoute><DashCreateCategoryHOC /></AdminRoute>} />
                            <Route path='/user/dashboard' element={<UserRoute>< UserDashboardHOC /></UserRoute>} />
                            <Route path='/user/courses' element={<UserRoute>< UserCoursesHistoryHOC /></UserRoute>} />
                            <Route path='/user/info' element={<UserRoute>< UserInfoDashboardHOC /></UserRoute>} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </ProSidebarProvider>
            </ThemeProvider>
        </>
    )
}

export default App

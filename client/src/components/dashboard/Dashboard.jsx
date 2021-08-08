import './Dashboard.css';
import React, { useEffect } from 'react';
import { StylesProvider } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import NavigationBar from './navigation/NavigationBar';
import GiftFrame from './gifts/GiftFrame';
import WishList from './wishlist/WishList';
import { retrieveGiftsForUser, retrieveWishList } from '../../apis/api';
import { useParams } from 'react-router-dom';

/**
 * Component for the user dashboard screen of the app
 * @returns {Dashboard}
 */
export const Dashboard = ({ userData }) => {
    let { userId } = useParams();

    // set states
    const [view, setView] = React.useState('wishlist');
    const [gifts, setGiftData] = React.useState([]);
    const [userWishList, setUserWishList] = React.useState([]);
    const [keywords, setKeywords] = React.useState([]);

    // // functions to get user data
    // const getGiftData = async () => {
    //     return await retrieveGiftsForUser(keywords);
    // };
    // const getUserWishList = async () => {
    //     return await retrieveWishList(userData.id);
    // }

    // // actually get user data
    // useEffect(() => {
    //     getGiftData().then((r) => setGiftData(r));
    // }, []);
    // useEffect(() => {
    //     getUserWishList().then((r) => setUserWishList(r));
    // }, []);

    // generate content for dashboard based on current state
    const generateDashboardContent = () => {
        if (view === 'gift-view') {
            return <GiftFrame gifts={gifts}/>
        } else if (view === 'wishlist') {
            return <WishList/>
        }
    };

    return (
        <div className="dashboard">
            {!userData ? (
                <div className="loading">
                    {' '}
                    <CircularProgress />{' '}
                </div>
            ) : (
                <StylesProvider injectFirst>
                    <NavigationBar/>
                    {generateDashboardContent()}
                </StylesProvider>
            )}
        </div>
    );
};

export default Dashboard;

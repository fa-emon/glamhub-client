import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();    

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000', 
    });

    axiosSecure.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosSecure.interceptors.response.use(
        (response) => {
            return response;
        },
        async (error) => {
            //TODO: FIX THE ISSUE
            const { status } = error.response || {};

            if (status === 401 || status === 403) {
                // Log out the user and navigate to the login page
                await logOut();
                navigate('/login');
            }

            return Promise.reject(error);
        }
    );

    useEffect(() => {
        return () => {
            // Cleanup function to remove interceptors
            axiosSecure.interceptors.request.eject();
            axiosSecure.interceptors.response.eject();
        };
    }, [axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;

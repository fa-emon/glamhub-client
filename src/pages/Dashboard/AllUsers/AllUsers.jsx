import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/users`)
            return response.data;
        },
    })

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch(); // for refresh
                            Swal.fire({
                                title: "Deleted!",
                                text: "one user has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    }

    return (
        <div>
            <h2 className="my-6 heading-font text-[#DD6E8B] ">TOTAL USERS : {users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table text-[#DD6E8B] heading-font">
                    {/* head */}
                    <thead className="text-[#DD6E8B] heading-font tracking-wider">
                        <tr>
                            <th>NO</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className="hover:text-white">{index + 1}</th>
                                <td className="hover:text-white">{user?.name}</td>
                                <td className="hover:text-white">{user?.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? <h2 className="text-green-600">admin</h2> :
                                            <FaUser onClick={() => handleMakeAdmin(user)} className='text-base cursor-pointer hover:text-green-600'></FaUser>
                                    }
                                </td>
                                <td><MdDelete onClick={() => handleDelete(user._id)} className='text-xl cursor-pointer  hover:text-red-600'></MdDelete></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
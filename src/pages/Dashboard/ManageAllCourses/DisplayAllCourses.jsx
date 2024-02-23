import useCourses from "../../../hooks/useCourses";
import { LuPenSquare } from "react-icons/lu";
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const DisplayAllCourses = ({ courses }) => {
    const { name, image, price, _id } = courses;

    const [axiosSecure] = useAxiosSecure();
    const [, , refetch] = useCourses();


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

                axiosSecure.delete(`/allCourses/${id}`)
                    .then((response) => {
                        if (response.data.deletedCount > 0) {
                            refetch(); // for refresh
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <tr className='text-[#DD6E8B]'>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-md w-28 h-28">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="heading-font tracking-wide">
                {name}
            </td>
            <td className='heading-font'>
                ${price}
            </td>
            <th>
                <Link to={`/dashboard/updateCourse/${_id}`}><LuPenSquare className='text-xl hover:text-green-600'></LuPenSquare></Link>
            </th>
            <th>
                <MdDelete onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600'></MdDelete>
            </th>
        </tr>
    );
};

export default DisplayAllCourses;
import { MdDelete } from "react-icons/md";
import useCourses from "../../../hooks/useCourses";
import Swal from "sweetalert2";


const ShowBookingHistory = ({ course }) => {
    const [, , refetch] = useCourses();
    const { image, name, category, price, _id } = course;
    console.log(course)

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
                fetch(``, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch(); // for refresh
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });
                        }
                    });
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
                {category}
            </td>
            <td className='heading-font'>
                ${price}
            </td>
            <th>
                <MdDelete onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600 ms-2'></MdDelete>
            </th>
        </tr>
    );
};

export default ShowBookingHistory;
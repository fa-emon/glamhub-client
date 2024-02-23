import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import useCart from '../../../hooks/useCart';

const ShowCard = ({ item }) => {
    const [, refetch] = useCart();
    const { name, email, image, price, _id } = item;

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
                fetch(`https://glamhub-server.vercel.app/carts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch(); // for refresh
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your course has been deleted.",
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
                {email}
            </td>
            <td className='heading-font'>
                ${price}
            </td>
            <th>
                <MdDelete onClick={() => handleDelete(_id)} className='text-xl hover:text-red-600'></MdDelete>
            </th>
        </tr>
    );
};

export default ShowCard;
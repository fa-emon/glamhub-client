import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ShowHistory from "./ShowHistory";


const PaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymentHistory/${user.email}`)
            return res.data;
        }
    })

    return (
        <>
            <h2 className="text-center text-[#DD6E8B] heading-font my-4 tracking-[.5rem] text-xl bg-[#0a0a0a] py-2 rounded-md">PAYMENT HISTORY</h2>

            <div className="overflow-x-auto text-white mt-6 w-full bg-[] rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#202020]">
                        <tr className="bg-[#DD6E8B]">
                            <th>INDEX</th>
                            <th>EMAIL</th>
                            <th className="ps-4">TRANSACTION ID</th>
                            <th className="text-center">STATUS</th>
                            <th className="text-center">PRICE</th>
                            <th className="text-center">DATE</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            paymentHistory.map((product, index) => <ShowHistory
                                key={product._id}
                                product={product}
                                index={index} >
                            </ShowHistory>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default PaymentHistory;
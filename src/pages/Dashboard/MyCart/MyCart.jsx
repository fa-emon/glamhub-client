import useCart from "../../../hooks/useCart";
import ShowCard from "./ShowCard";


const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>
            <div className="text-[#DD6E8B] flex justify-between w-full my-4 heading-font tracking-wide ">
                <h2>TOTAL ORDER : {cart.length}</h2>
                <h2>TOTAL PRICE : ${total}</h2>
                <button className="btn btn-sm bg-[#DD6E8B] border-black tracking-wider">PAY</button>
            </div>
            <div className="overflow-x-auto text-white mt-6 w-full bg-[#0e0e0e] rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#DD6E8B]">
                        <tr>
                            <th>IMAGE</th>
                            <th>COURSE NAME</th>
                            <th>USER EMAIL</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(item => <ShowCard
                                key={item._id}
                                item={item}>
                            </ShowCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;
import { useForm } from "react-hook-form";

const onSubmit = (data) => {
    console.log(data)
}

const AddNewCourse = () => {
    const { register, handleSubmit, formState: { errors },
    } = useForm()

    return (
        <div className="my-10 heading-font tracking-wide bg-[#0a0a0a] px-5 py-8 rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {Course Name field} */}
                <div className="mb-6 text-black">
                    <div className="label">
                        <span className="text-[#DD6E8B]">Course Name</span>
                    </div>
                    <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B] " type="text" placeholder="Course Name" {...register("courseName", { required: true, maxLength: 80 })} />

                    {errors.courseName?.type === "required" && (
                        <p className="text-red-600">course name is required!</p>
                    )}
                </div>

                <div className="mb-6">
                    {/* {Choose Category field} */}
                    <div className="w-full flex gap-6">
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Choose Category</span>
                            </div>
                            <div className="">
                                <select className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" {...register("category", { required: true })}>
                                    <option value="">Hair_Makeup</option>
                                    <option value="">Eye_Makeup</option>
                                    <option value="">Wedding_Makeup</option>
                                    <option value="">Effect_Makeup</option>
                                    <option value="">Face_Makeup</option>
                                    <option value="">Fashion_Makeup</option>
                                </select>
                            </div>
                        </div>

                        {/* {Price field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Price</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="number" placeholder="$" {...register("[price", { required: true })} />

                            {errors.price?.type === "required" && (
                                <p className="text-red-600">price is required!</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* {Course Details field} */}
                <div>
                    <div className="label">
                        <span className="text-[#DD6E8B]">Course Details</span>
                    </div>

                    <div className="w-full">
                        <textarea className="textarea bg-[#202020] text-[#DD6E8B] w-full textarea-md" placeholder="Course Details"></textarea>
                    </div>
                </div>

                {/* {Choose File field} */}
                <div className="my-6">
                    <input type="file" className="file-input file-input-bordered max-w-xs rounded-md bg-[#202020] text-[#DD6E8B]" />
                </div>

                <div>
                    <input className="btn btn-outline bg-black text-[#DD6E8B] hover:text-black hover:bg-[#DD6E8B] uppercase btn-sm w-full" type="submit" value="add course" />
                </div>
            </form>
        </div>
    );
};

export default AddNewCourse;
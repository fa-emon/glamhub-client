import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const UpdateCourses = () => {
    const course = useLoaderData();
    const { name, image, price, ratings, category, instructor_name, instructor_email, instructor_image, short_description, available_seats, students_enrolled, _id } = course;

    const { register, handleSubmit, formState: { errors },
        reset } = useForm()

    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        const { name, image, price, ratings, category, instructor_name, instructor_email, instructor_image, short_description, available_seats, students_enrolled } = data;

        const courseData = { name, image, price: parseFloat(price), ratings: parseFloat(ratings), category, instructor_name, instructor_image, instructor_email, short_description, available_seats: parseFloat(available_seats), students_enrolled: parseFloat(students_enrolled) }

        axiosSecure.patch(`/updateCourse/${_id}`, courseData)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "your course updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <>
            <h2 className="text-center text-[#DD6E8B] heading-font my-4 tracking-[.5rem] text-xl bg-[#0a0a0a] py-2 rounded-md">UPDATE COURSE</h2>

            <div className="mb-10 heading-font tracking-wide bg-[#0a0a0a] px-5 pt-2 pb-6 rounded-md">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex w-full gap-6">
                        {/* {Course Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Course Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="text"
                                defaultValue={name}
                                placeholder="Course Name" {...register("name", { required: true, maxLength: 80 })} />

                            {errors.name?.type === "required" && (
                                <p className="text-red-600">course name is required!</p>
                            )}
                        </div>

                        {/* {photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#DD6E8B]">Photo URL</span>
                            </label>
                            <input type="text"
                                {...register('image', { required: true })}
                                defaultValue={image}
                                placeholder="photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" />
                            {errors.image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Instructor Name field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Instructor Name</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="text"
                                defaultValue={instructor_name}
                                placeholder="Instructor Name" {...register("instructor_name", { required: true, maxLength: 80 })} />

                            {errors.instructor_name?.type === "required" && (
                                <p className="text-red-600">instructor name is required!</p>
                            )}
                        </div>

                        {/* {Instructor photo URL field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#DD6E8B]">Photo URL</span>
                            </label>
                            <input type="text"
                                {...register('instructor_image', { required: true })}
                                defaultValue={instructor_image}
                                placeholder="photo URL" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" />
                            {errors.instructor_image && <p className='text-red-600'>photo URL is required!.</p>}
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Instructor Email field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Instructor Email</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="email"
                                defaultValue={instructor_email}
                                placeholder="Instructor Email" {...register("instructor_email", { required: true, maxLength: 80 })} />

                            {errors.instructor_email?.type === "required" && (
                                <p className="text-red-600">instructor email is required!</p>
                            )}
                        </div>

                        {/* {available_seats field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#DD6E8B]">Available Seats</span>
                            </label>
                            <input type="number"
                                {...register('available_seats', { required: true })}
                                defaultValue={available_seats}
                                placeholder="0" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" />
                            {errors.available_seats && <p className='text-red-600'>available seats is required!.</p>}
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* {Choose Category field} */}
                        <div className="w-full flex gap-6">
                            <div className="w-full">
                                <div className="label">
                                    <span className="text-[#DD6E8B]">Choose Category</span>
                                </div>
                                <div className="">
                                    <select className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" {...register("category", { required: true })} defaultValue={category}>
                                        <option disabled selected>Choose one</option>
                                        <option value="Hair_Makeup">Hair_Makeup</option>
                                        <option value="Eye_Makeup">Eye_Makeup</option>
                                        <option value="Wedding_Makeup">Wedding_Makeup</option>
                                        <option value="Effect_Makeup">Effect_Makeup</option>
                                        <option value="Face_Makeup">Face_Makeup</option>
                                        <option value="Fashion_Makeup">Fashion_Makeup</option>
                                    </select>
                                </div>
                            </div>

                            {/* {Price field} */}
                            <div className="w-full">
                                <div className="label">
                                    <span className="text-[#DD6E8B]">Price</span>
                                </div>
                                <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="number" placeholder="$" {...register("price", { required: true })} defaultValue={price} />

                                {errors.price?.type === "required" && (
                                    <p className="text-red-600">price is required!</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full gap-6">
                        {/* {Students Enrolled field} */}
                        <div className="mb-6 text-black w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Students Enrolled</span>
                            </div>
                            <input className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" type="number" placeholder="0" {...register("students_enrolled", { required: true, maxLength: 80 })} defaultValue={students_enrolled} />

                            {errors.students_enrolled?.type === "required" && (
                                <p className="text-red-600">students enrolled is required!</p>
                            )}
                        </div>

                        {/* {Ratings field} */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="text-[#DD6E8B]">Ratings</span>
                            </label>
                            <input type="number"
                                {...register('ratings', { required: true })}
                                placeholder="0-5" className="w-full py-2 px-4 rounded-md bg-[#202020] text-[#DD6E8B]" defaultValue={ratings} />
                            {errors.ratings && <p className='text-red-600'>ratings is required!.</p>}
                        </div>
                    </div>

                    <div className="mb-6">
                        {/* {Course Details field} */}
                        <div className="w-full">
                            <div className="label">
                                <span className="text-[#DD6E8B]">Course Details</span>
                            </div>

                            <div className="w-full">
                                <textarea className="textarea bg-[#202020] text-[#DD6E8B] w-full textarea-md" placeholder="Course Details" {...register("short_description", { required: true })} defaultValue={short_description}></textarea>

                                {errors.short_description && <p className='text-red-600'>course details is required!.</p>}
                            </div>
                        </div>
                    </div>

                    <div>
                        <input className="btn btn-outline bg-black text-[#DD6E8B] hover:text-black hover:bg-[#DD6E8B] uppercase btn-sm w-full" type="submit" value="update course" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateCourses;
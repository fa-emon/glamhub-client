import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const { data: allCourses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['allCourses'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allCourses')
            return res.json();
        }
    })
    return [allCourses, loading, refetch];
};

export default useCourses;

import { FaCalendarAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";

const Blog = () => {
    const blogsData = useLoaderData();
    console.log(blogsData);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-4xl font-bold text-center mb-2 text-black">Blogs</h1>
            <p className="text-center text-gray-500 mb-8">
                Let’s explore some basic concept that will make you a good developer
            </p>

            {blogsData.map((blog , index) => (
                <div
                    key={blog.id}
                    className="bg-gray-100 text-gray-500 shadow-sm rounded-lg p-6 mb-6 border border-gray-200"
                >
                  
                    <h2 className=" text-xl font-semibold text-gray-700 mb-2">
                        {blog.question}
                    </h2>
                    <div className='border border-dashed border-gray-300 rounded-2xl  '></div>
                    <p className="mb-4">
                        <span className="font-medium text-blue-600">Answer:</span><br />
                        <span className="text-gray-700">{blog.answer}</span>
                    </p>
                    <div className='border border-dashed border-gray-300 rounded-2xl mb-2  '></div>
                    <div className="flex items-center text-gray-500 text-sm">
                        <FaCalendarAlt className="mr-2" />
                        <p>Added at {blog.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Blog;

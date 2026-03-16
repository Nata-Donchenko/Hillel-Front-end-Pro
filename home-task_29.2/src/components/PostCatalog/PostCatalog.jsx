import React, {useEffect, useState} from 'react';
import initialValues from "../initialValues";

const PostCatalog = () => {
  const [data, setData] = useState(initialValues.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if(!res.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await res.json()
        setData(data)

      } catch (error) {
        console.error(error)
      }
    }

    fetchData()

  }, []);

  return (
    <div>
      <ul className='list-group'>
        {data.map((post) => (
          <li
            key={post.id}
            className='list-group-item list-group-item-action'
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
        <hr/>
      </ul>
    </div>
  );
};

export default PostCatalog;
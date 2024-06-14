import React from 'react';
import Upload from '../../specific/Upload/Upload';
import blogs from '../../../uploadBlogs.json';

function Uploads() {
  console.log("Uploads.jsx rendered");
  return (
    <>
      {blogs.map((blog, index) => (
        <Upload 
          key={index}
          blogs={blog.blogsList} 
          month={blog.month} 
        />
      ))}
    </>
  );
}

export default Uploads;

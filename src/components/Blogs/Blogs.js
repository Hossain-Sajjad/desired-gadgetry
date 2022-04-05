import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className='blog-container'>
                <h3 className='text-3xl'>What is context api?</h3>
                <p className='text-xl'>Context Api is used to send to any data or function to a specific child component. If There are so many child component and those child component also has some child component then to send any data to parent to child of child component we have to do prop driling. But by the help of context api parent component can send any data to specific child.</p>
            </div>
            <div className='blog-container'>
                <h3 className='text-3xl'>What is semantic tag?</h3>
                <p className='text-xl'>Semantic tag means the tags whose name indicates for why the tag is used. It says what type of element the tag has. Nav, article, section, header are some of the example of semantic tag. Semantic tag is very useful foe seo ranking.</p>
            </div>
            <div className='blog-container'>
                <h3 className='text-3xl'>Inline element vs Block element</h3>
                <p className='text-xl'>Block: A block element take full width and always start from new line. Block elements width and height can be set.
                    Inline: A Inline element only takes space which they needed. Always apear side by side. Width and height can not be set.

                </p>
            </div>
        </div>
    );
};

export default Blogs;
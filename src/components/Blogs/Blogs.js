import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='blog'>
                <h2>Differecnce bettween inline, block and inline-block element?</h2>
                <p><b>Block:</b> Block level elements take up as much space as possible by default. Each block level element will start a new line on the page, stacking down the page. In addition to stacking vertically, block level elements will also take up as much horizontal space as possible.It is force a line break after the block element. Examples of block level elements: <b>p,ol,ul,dil,all heading,article,section,div</b></p>

                <p><b>Inline:</b> Inline elements display in a line. They do not force the text after them to a new line.
                    Examples of inline elements:<b> a,strong,em,b,i,q,mark,span</b></p>
                <p><b>Inline-block:</b> This is the same of inline. It is allow other elements to sit to their left and right. It is using in header nav. An inline-block element is placed as an inline element (on the same line as adjacent content), but it behaves as a block element.</p>

            </div>
            <div className='blog'>
                <h2>What is context API?</h2>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
        </div>
    );
};

export default Blogs;
import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');


    const onChange = (q) => {
        setText(q);
        getQuery(q);
    } 

    return (
        <section className="search">
            <form action="">
                <input
                    type="text"
                    className="form-control"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder='Search characters'
                />
            </form>
        </section>
    )
}

export default Search

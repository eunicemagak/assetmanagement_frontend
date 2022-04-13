import React from 'react';
const SearchInput=(props)=> {
    return (
        <div className="col col-sm-4">
            <input
                className="form-control"
                value={props.value}
                onChange={(event) => props.setQ(event.target.value)}
                placeholder="Type to Search"
            ></input>
        </div>
    );
};
export default SearchInput;

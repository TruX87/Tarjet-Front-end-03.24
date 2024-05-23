import React, { useEffect, useRef, useState } from 'react'

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef= useRef();
  const url = process.env.REACT_APP_CATEGORIES_DB_URL;


  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(json => setCategories(json || []));
  }, [url]);

  const add = () => {
    const newCategory = {"name": categoryRef.current.value};
    categories.push(newCategory)
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
    setCategories(categories.slice());
    //toast?
    categoryRef.current.value = "";
  }

  const remove = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(url, {"method": "PUT", "body": JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Category</label><br />
      <input ref={categoryRef} type="text" /><br />
      <button onClick={add}>Add</button><br />
      <hr />
      {categories.map((category, index) =>
         <div key={category.name}>
          {category.name}
          <button onClick={() => remove(index)}>x</button>
         </div>)}
    </div>
  )
}

export default MaintainCategories
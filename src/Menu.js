import React from 'react';

const Menu = ({ items, catagory, dataHandler }) => {
 // console.log('catagory in Menu', items)
  return (

    <div>
      {catagory.map((item)=>(
        <button onClick= {()=>{dataHandler(item)}}>
        {item}
        </button>
        ))}
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
    </div>
  );
};

export default Menu;

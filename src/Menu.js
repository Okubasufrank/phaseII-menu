import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
    
{    // iterating over the items my items
}      {items.map((menuItem) => {

  //doing destructuring of the items
        const { id, title, img, desc, price } = menuItem;
        return (
          //adding the images and title and information of the items
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>Ksh/={price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
              <i class="fa-duotone fa-heart"></i>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

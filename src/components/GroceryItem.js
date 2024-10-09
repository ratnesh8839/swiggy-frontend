import React from 'react'
import GroceryCard from './GroceryCard';
const GroceryItem = () => {
    const groceryItems = [
        {
          image: 'https://via.placeholder.com/150',
          name: 'Fresh Apples',
          description: '1kg pack',
          price: 150,
          discount: 200
        },
        {
          image: 'https://via.placeholder.com/150',
          name: 'Fresh Bananas',
          description: '1kg pack',
          price: 50,
          discount: 70
        }
      ];
    
      return (
        <div style={{ display: 'flex', gap: '20px' }}>
          {groceryItems.map((item, index) => (
            <GroceryCard
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              discount={item.discount}
            />
          ))}
          <h4>This is demo page just to learn code spliting</h4>
        </div>
      );
    };

export default GroceryItem
import bcrypt from 'bcryptjs';

export default {
    users: [
        {
          name: 'Basir',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[{
        category:'featured',
        
        quantity:10,
        name: 'Men Black & Gold-Toned Solid Silk Sherwani With Dhoti Pants',
        image:'/images/images/d1.webp',
        sample_image1:'/images/images/d1-1.jpg',
        sample_image2:'/images/images/d1-2.jpg',
        sample_image3:'/images/images/d1-3.jpg',       
        brand:'VASTRAMAY',
        price: 4499,
        originalPrice:8999,
        rating: 4,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:[{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }]
           
    },
    {
        category:'featured',
        
        quantity:5,
        name: 'Women Off-White & Green Printed Maxi Dress',
        image:'/images/images/d2.webp',
        sample_image1:'/images/images/d2-1.jpg',
        sample_image2:'/images/images/d2-2.jpg',
        sample_image3:'/images/images/d2-3.jpg',
        brand:'SASSAFRAS',
        price: 759,
        originalPrice:1899,
        rating: 4,
        details:"Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt",
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
    },
    {
        category:'featured',
        
        quantity:10,
        name: 'Men Grey CULTURE Basketball Shoes',
        image:'/images/images/d3.webp',
        sample_image1:'/images/images/d3-1.jpg',
        sample_image2:'/images/images/d3-2.jpg',
        sample_image3:'/images/images/d3-3.jpg',
        brand:'PEAK',
        price: 4499,
        originalPrice:5997,
        rating: 3.8,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
       
    },
    {
        category:'featured',
        
        quantity:15,
        name: 'Ladies Bracelet Female Clock Quartz Watch',
        image:'/images/images/d4.webp',
        sample_image1:'/images/images/d4-1.jpg',
        sample_image2:'/images/images/d4-2.jpg',
        sample_image3:'/images/images/d4-3.jpg',
        brand:'QUARTZ',
        price: 589,
        originalPrice:919,
        rating: 4.8,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
    },
    {
        category:'trending',
        
        quantity:7,
        name: 'Open toe flats',
        image:'/images/images/d5.jpg',
        sample_image1:'/images/images/d5-1.jpg',
        sample_image2:'/images/images/d5-2.jpg',
        sample_image3:'/images/images/d5-3.jpg',
        brand:'Marc Loire',
        price: 4499,
        originalPrice:8999,
        rating: 4,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
           
    },
    {
        category:'trending',
        
        quantity:18,
        name: 'Men Solid Tailored Jacket',
        image:'/images/images/d6.webp',
        sample_image1:'/images/images/d6-1.jpg',
        sample_image2:'/images/images/d6-2.jpg',
        sample_image3:'/images/images/d6-3.jpg',
        brand:'Campus Sutra',
        price: 759,
        originalPrice:1899,
        rating: 4,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
    },
    {
        category:'trending',
        
        quantity:16,
        name: 'Women Pink Embroidered Scarf',
        image:'/images/images/d7.jpg',
        sample_image1:'/images/images/d7-1.jpg',
        sample_image2:'/images/images/d7-2.jpg',
        sample_image3:'/images/images/d7-3.jpg',
        brand:'max',
        price: 4499,
        originalPrice:5997,
        rating: 3.8,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }
       
    },
    {
        category:'trending',
        
        quantity:19,
        name: 'Gold-Toned Level U Bluetooth In-Ear Wireless Headphones',
        image:'/images/images/d8.webp',
        sample_image1:'/images/images/d8-1.jpg',
        sample_image2:'/images/images/d8-2.jpg',
        sample_image3:'/images/images/d8-3.jpg',
        brand:'Samsung',
        price: 589,
        originalPrice:919,
        rating: 4.8,
        details:'Off-White and green printed woven maxi dress, has an off-shoulder neck, short sleeves, concealed zip closure, an attached lining, flared hem, front slit Comes with a belt',
        Material: 'Polyester',
        Specifications:{
            shape:'Maxi',
            length:'Maxi',
            ocassion:'Casual',
            pattern: 'Floral'
        }

    }],
    brands:[{
        image:'/images/images/brand1.png'
    },
    {
        image:'/images/images/brand2.png'
    },
    {
        image:'/images/images/brand3.png'
    },
    {
        image:'/images/images/brand4.png'
    },
    {
        image:'/images/images/brand5.png'
    },
    {
        image:'/images/images/brand6.png'
    },
]
    

}
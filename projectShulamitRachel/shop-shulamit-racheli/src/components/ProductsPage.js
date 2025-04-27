import React ,{useState} from 'react';
import Item from './Item';
import ProductDescriptionPage from './ProductDescriptionPage';
import img1 from '../images/שקופית1.png';
import img2 from '../images/שקופית2.png';
import img3 from '../images/שקופית3.png';
import img4 from '../images/שקופית4.png';
import img5 from '../images/שקופית5.png';
import img6 from '../images/שקופית6.png';
import img7 from '../images/שקופית7.png';
import img8 from '../images/שקופית8.png';
import img9 from '../images/שקופית9.png';
import img10 from '../images/שקופית10.png';
import img11 from '../images/שקופית11.png';
import img12 from '../images/שקופית12.png';
import img13 from '../images/שקופית13.png';
import img14 from '../images/שקופית14.png';
import img15 from '../images/שקופית15.png';
import img16 from '../images/שקופית16.png';
import img17 from '../images/שקופית17.png';
import img18 from '../images/שקופית18.png';
import img19 from '../images/שקופית19.png';
import img20 from '../images/שקופית20.png';
import img21 from '../images/שקופית21.png';

const ProductsPage = () => {
    const imagePaths = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
        img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21
    ];

    const nameProducts = [
        "מוצר 1", "מוצר 2", "מוצר 3", "מוצר 4", "מוצר 5",
        "מוצר 6", "מוצר 7", "מוצר 8", "מוצר 9", "מוצר 10",
        "מוצר 11", "מוצר 12", "מוצר 13", "מוצר 14", "מוצר 15",
        "מוצר 16", "מוצר 17", "מוצר 18", "מוצר 19", "מוצר 20",
        "מוצר 21"
    ];

    const pricesProducts = [
        "99", "199", "299", "399", "499",
        "599", "699", "799", "899", "999",
        "1099", "1199", "1299", "1399", "1499",
        "1599", "1699", "1799", "1899", "1999",
        "2099"
    ];

    const renderImages = () => {
        let index = 0;
        return imagePaths.map((path, index) => (
            <Item key={index} imageUrl={path} title={nameProducts[index]} price={pricesProducts[index]}/>
        ));
    };

    

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleItemClick = (index) => {
        setSelectedProduct({
            imageUrl: imagePaths[index],
            title: nameProducts[index],
            price: pricesProducts[index]
        });
    };

    return (
        <div>
            {selectedProduct ? (
                <ProductDescriptionPage 
                    imageUrl={selectedProduct.imageUrl} 
                    title={selectedProduct.title} 
                    price={selectedProduct.price} 
                    onBack={() => setSelectedProduct(null)} 
                />
            ) : (
                <>
                    <h1>Products</h1>
                    <h2>החנות שלנו</h2>
                    {imagePaths.map((path, index) => (
                        <div key={index} onClick={() => handleItemClick(index)}>
                            <Item 
                                imageUrl={path} 
                                title={nameProducts[index]} 
                                price={pricesProducts[index]} 
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    );
    // return (
    //     <div>
    //         {/* Add your product components or logic here */}
    //     </div>
    // );
};

export default ProductsPage;
import React ,{useState} from 'react';
import Item from './Item';
import ProductDescriptionPage from './ProductDescriptionPage';
import '../css/ProductsPage.css';
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import img7 from '../images/7.png';
import img8 from '../images/8.png';
import img9 from '../images/9.png';
import img10 from '../images/10.png';
import img11 from '../images/11.png';
import img12 from '../images/12.png';
import img13 from '../images/13.png';
import img14 from '../images/14.png';
import img15 from '../images/15.png';
import img16 from '../images/16.png';
import img17 from '../images/17.png';
import img18 from '../images/18.png';
import img19 from '../images/19.png';
import img20 from '../images/20.png';
import img21 from '../images/21.png';

const ProductsPage = () => {

    const Products = [
        { imageUrl: img1, title: 'גינת חלומות – פסיפס פרחים צבעוני לתלייה על קיר חוץ/פנים', price: '99', count: 1 },
        { imageUrl: img2, title: 'המוציא לחם מן הארץ – קרש חלה לשבת בפסיפס בעבודת יד', price: '199', count: 10 },
        { imageUrl: img3, title: "צב פסיפס צבעוני – פסל גינה בעבודת יד", price: '299', count: 18 },
        { imageUrl: img4, title: "יער מתעורר – פסיפס בעבודת יד", price: '399', count: 21 },
        { imageUrl: img5, title: "כל בכור בניך תפדה", price: '499', count: 15 },
        { imageUrl: img6, title: "רחוב בנחלאות – חיבור של אבן, צבע ואור", price: '599', count: 31 },
        { imageUrl: img7, title: "בית קטן בירוק", price: '699', count: 19 },
        { imageUrl: img8, title: "שער אדום", price: '799', count: 1 },
        { imageUrl: img9, title: "סמטאות בזכוכית", price: '899', count: 18 },
        { imageUrl: img10, title: "שעון קיר דקורטיבי בעבודת פסיפס זכוכית – עיצוב פרחוני", price: '999', count: 11 },
        { imageUrl: img11, title: 'אגרת הרמב"ן – מסגרת של חכמה ואור', price: '1099', count: 17 },
        { imageUrl: img12, title: "שדה פריחה על מראת עולם – משחק של חיים והשתקxxx", price: '1199', count: 1 },
        { imageUrl: img13, title: "זר פריחה מעוטרת באגרטל מתכתי – מחווה לטבע באסתטיקה ביתית", price: '1299', count: 16 },
        { imageUrl: img14, title: "שושנה באבן – הרמוניה של קו, חומר וטבע", price: '1399', count: 1 },
        { imageUrl: img15, title: "פונקציה בפסיפס – חגיגה של צבע, תבנית ותכלית", price: '1499', count: 21 },
        { imageUrl: img16, title: "לוח פסיפס פרחוני – בעבודת יד מחומרי חרס אבן וזכוכית", price:'1599', count: 15 },
        { imageUrl: img17, title: "קופסה של אור – מנדלה בפסיפס", price: '1699', count: 1 },
        { imageUrl: img18, title: "ציפורי הבוקר – פסיפס של שלווה", price: '1799', count: 1 },
        { imageUrl: img19, title: "שיחת שחר בין סלעים", price: '1899', count: 13 },
        { imageUrl: img20, title: "שיח צפצופים", price: '1999', count: 1 },
        { imageUrl: img21, title: "שולחן גן פרחוני", price: '2099', count: 1 }
    ]
    

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleItemClick = (index) => {
        setSelectedProduct({
            imageUrl: Products[index].imageUrl,
            title: Products[index].title,
            price: Products[index].price
        });
    };

    return (
        <div className='products-container'>
            {selectedProduct ? (
                <ProductDescriptionPage 
                    imageUrl={selectedProduct.imageUrl} 
                    title={selectedProduct.title} 
                    price={selectedProduct.price} 
                    onBack={() => setSelectedProduct(null)} 
                />
            ) : (
                <>
                    {/* <h1>Products</h1>
                    <h2>החנות שלנו</h2> */}
                    {Products.map((path, index) => (
                        <div key={index} onClick={() => handleItemClick(index)}>
                            <Item 
                                imageUrl={Products[index].imageUrl} 
                                title={Products[index].title} 
                                price={Products[index].price} 
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
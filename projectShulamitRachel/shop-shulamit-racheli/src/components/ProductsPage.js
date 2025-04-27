import React ,{useState} from 'react';
import Item from './Item';
import ProductDescriptionPage from './ProductDescriptionPage';
import '../css/ProductsPage.css';
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
        'גינת חלומות – פסיפס פרחים צבעוני לתלייה על קיר חוץ/פנים', 'המוציא לחם מן הארץ – קרש חלה לשבת בפסיפס בעבודת יד', 
        "צב פסיפס צבעוני – פסל גינה בעבודת יד", "יער מתעורר – פסיפס בעבודת יד", "כל בכור בניך תפדה",
        "רחוב בנחלאות – חיבור של אבן, צבע ואור", "בית קטן בירוק", "שער אדום", "סמטאות בזכוכית", 
        "שעון קיר דקורטיבי בעבודת פסיפס זכוכית – עיצוב פרחוני",'אגרת הרמב"ן – מסגרת של חכמה ואור', 
        "שדה פריחה על מראת עולם – משחק של חיים והשתקפות", "זר פריחה מעוטרת באגרטל מתכתי – מחווה לטבע באסתטיקה ביתית", 
        "שושנה באבן – הרמוניה של קו, חומר וטבע", "פונקציה בפסיפס – חגיגה של צבע, תבנית ותכלית", 
        "לוח פסיפס פרחוני – בעבודת יד מחומרי חרס אבן וזכוכית", "קופסה של אור – מנדלה בפסיפס", "ציפורי הבוקר – פסיפס של שלווה", 
        "שיחת שחר בין סלעים", "שיח צפצופים","שולחן גן פרחוני"
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
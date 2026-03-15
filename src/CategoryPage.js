import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./CategoryPage.css";


const categories = [
  {
    id: 1,
    name: "Fusion Sets",
    banner: "/category/fusionset.jpg",
    products: [
      { name: "Eternal Fusion Set", img: "/category/fusionset1.jpg", price: 75000, rentPrice: 8000, code: "FUS101", description: "Modern fusion necklace set with timeless appeal." },
      { name: "Celestial Fusion Set", img: "/category/fusionset2.jpg", price: 78000, rentPrice: 8500, code: "FUS102", description: "Elegant design inspired by celestial beauty." },
      { name: "Mystic Fusion Set", img: "/category/fusionset3.jpg", price: 72000, rentPrice: 7500, code: "FUS103", description: "A mysterious and stylish fusion creation." },
      { name: "Aarohi Fusion Set", img: "/category/fusionset4.jpg", price: 76000, rentPrice: 8200, code: "FUS104", description: "Fusion necklace combining pearls and modern elements." },
      { name: "Noor Fusion Set", img: "/category/fusionset5.jpg", price: 79000, rentPrice: 8800, code: "FUS105", description: "Grand fusion set that radiates luminous charm." },
      { name: "Zariya Fusion Set", img: "/category/fusionset6.jpg", price: 80000, rentPrice: 9000, code: "FUS106", description: "Luxury fusion set perfect for royal occasions." },
      { name: "Saanvi Fusion Set", img: "/category/fusionset7.jpg", price: 82000, rentPrice: 9200, code: "FUS107", description: "A timeless fusion design blending tradition and trend." },
      { name: "Divine Harmony Fusion Set", img: "/category/fusionset8.jpg", price: 85000, rentPrice: 9500, code: "FUS108", description: "A harmonious blend of elegance and artistry." },
      { name: "Ira Fusion Set", img: "/category/fusionset9.jpg", price: 87000, rentPrice: 9700, code: "FUS109", description: "An exquisite fusion piece crafted for grand celebrations." },
    ],
  },
  {
    id: 2,
    name: "Bridal Sets",
    banner: "/category/brideset.jpg",
    products: [
      { name: "Maharani Bridal Set", img: "/category/bridalset1.jpg", price: 65000, rentPrice: 7000, code: "PNK123", description: "Elegant handcrafted Polki necklace fit for a queen." },
      { name: "Rajkumari Bridal Set", img: "/category/bridalset2.jpg", price: 68000, rentPrice: 7200, code: "KND124", description: "Beautiful Kundan bridal set with royal charm." },
      { name: "Noor-e-Dulhan Bridal Set", img: "/category/bridalset3.jpg", price: 70000, rentPrice: 7500, code: "GLD125", description: "A radiant gold set that enhances bridal elegance." },
      { name: "Divya Bridal Set", img: "/category/bridalset4.jpg", price: 90000, rentPrice: 9500, code: "DMD126", description: "Premium diamond bridal set for a dazzling look." },
      { name: "Anmol Bridal Set", img: "/category/bridalset5.jpg", price: 72000, rentPrice: 7700, code: "BRD127", description: "A precious and timeless bridal necklace set." },
      { name: "Sitara Bridal Set", img: "/category/bridalset6.jpg", price: 74000, rentPrice: 7900, code: "BRD128", description: "Elegant necklace designed for wedding grandeur." },
      { name: "Kanika Bridal Set", img: "/category/bridalset7.jpg", price: 76000, rentPrice: 8100, code: "BRD129", description: "A traditional masterpiece with modern sophistication." },
      { name: "Vaibhavi Bridal Set", img: "/category/bridalset8.jpg", price: 78000, rentPrice: 8300, code: "BRD130", description: "Luxurious bridal set that exudes elegance and charm." },
      { name: "Ishara Bridal Set", img: "/category/bridalset9.jpg", price: 80000, rentPrice: 8500, code: "BRD131", description: "A statement bridal piece crafted for unforgettable moments." },
    ],
  },
  {
    id: 3,
    name: "Kundan Sets",
    banner: "/category/kundanset.jpg",
    products: [
      { name: "Royal Glow Kundan Set", img: "/category/kundanset1.jpg", price: 50000, rentPrice: 6000, code: "KND201", description: "A regal Kundan necklace radiating royal elegance." },
      { name: "Meena Spark Kundan Set", img: "/category/kundanset2.jpg", price: 52000, rentPrice: 6200, code: "KND202", description: "Elegant Kundan design with intricate meenakari details." },
      { name: "Jadau Jewel Kundan Set", img: "/category/kundanset3.jpg", price: 54000, rentPrice: 6400, code: "KND203", description: "Intricately crafted Jadau-style Kundan necklace." },
      { name: "Choker Charm Kundan Set", img: "/category/kundanset4.jpg", price: 56000, rentPrice: 6600, code: "KND204", description: "Charming choker-style Kundan set for festive occasions." },
      { name: "Rani Radiance Kundan Set", img: "/category/kundanset5.jpg", price: 58000, rentPrice: 6800, code: "KND205", description: "A radiant Kundan set designed for royal looks." },
      { name: "Antique Aura Kundan Set", img: "/category/kundanset6.jpg", price: 60000, rentPrice: 7000, code: "KND206", description: "An antique-inspired Kundan set with timeless beauty." },
      { name: "Temple Grace Kundan Set", img: "/category/kundanset7.jpg", price: 62000, rentPrice: 7200, code: "KND207", description: "Temple-style Kundan set blending tradition and art." },
      { name: "Bridal Bloom Kundan Set", img: "/category/kundanset8.jpg", price: 64000, rentPrice: 7400, code: "KND208", description: "A blooming bridal Kundan piece perfect for weddings." },
      { name: "Heritage Royale Kundan Set", img: "/category/kundanset9.jpg", price: 66000, rentPrice: 7600, code: "KND209", description: "A heritage-inspired masterpiece exuding grandeur." },
    ],
  },
   {
    id: 4,
    name: "Polki Sets",
    banner: "/category/polkiset.jpg",
    products: [
      { name: "Elysia Polki Set", img: "/category/polkiset1.jpg", price: 65000, rentPrice: 7000, code: "PLK301", description: "An elegant Polki set radiating timeless beauty." },
{ name: "Aurielle Polki Set", img: "/category/polkiset2.jpg", price: 67000, rentPrice: 7200, code: "PLK302", description: "A traditional yet modern Polki design with exquisite detailing." },
{ name: "Sapphire Glow Polki Set", img: "/category/polkiset3.jpg", price: 69000, rentPrice: 7400, code: "PLK303", description: "A stylish Polki set that glows with sophistication." },
{ name: "Ornella Polki Set", img: "/category/polkiset4.jpg", price: 71000, rentPrice: 7600, code: "PLK304", description: "A premium handcrafted Polki necklace with intricate artistry." },
{ name: "Velora Polki Set", img: "/category/polkiset5.jpg", price: 73000, rentPrice: 7800, code: "PLK305", description: "A luxurious Polki set perfect for grand occasions." },
{ name: "Amarisa Polki Set", img: "/category/polkiset6.jpeg", price: 75000, rentPrice: 8000, code: "PLK306", description: "An elegant bridal Polki necklace crafted to perfection." },
{ name: "Liora Polki Set", img: "/category/polkiset7.jpg", price: 77000, rentPrice: 8200, code: "PLK307", description: "A radiant Polki design that blends tradition with glamour." },
{ name: "Celindra Polki Set", img: "/category/polkiset8.jpg", price: 79000, rentPrice: 8400, code: "PLK308", description: "A regal Polki set designed for timeless elegance." },
{ name: "Seraphina Polki Set", img: "/category/polkiset9.jpg", price: 81000, rentPrice: 8600, code: "PLK309", description: "A masterpiece Polki necklace exuding luxury and grace." },
],
  },
  {
    id: 5,
    name: "Diamond Sets",
    banner: "/category/diamondset.jpg",
    products: [
     { name: "Shimmer Royale Diamond Set", img: "/category/diamond1.jpg", price: 90000, rentPrice: 9500, code: "DMD401", description: "A luxury diamond necklace radiating royal shimmer." },
{ name: "Celestia Bridal Diamond Set", img: "/category/diamond2.jpg", price: 92000, rentPrice: 9700, code: "DMD402", description: "An elegant bridal diamond set inspired by celestial beauty." },
{ name: "Glitz Empress Diamond Set", img: "/category/diamond3.jpg", price: 94000, rentPrice: 9900, code: "DMD403", description: "A premium diamond set exuding empress-like grace." },
{ name: "Luminara Diamond Set", img: "/category/diamond4.jpg", price: 96000, rentPrice: 10100, code: "DMD404", description: "A royal diamond necklace with a luminous finish." },
{ name: "Twinkle Heritage Diamond Set", img: "/category/diamond5.jpg", price: 98000, rentPrice: 10300, code: "DMD405", description: "A heritage-inspired diamond set that sparkles with tradition." },
{ name: "Ornate Bliss Diamond Set", img: "/category/diamond6.jpg", price: 100000, rentPrice: 10500, code: "DMD406", description: "An ornate diamond bridal necklace crafted for timeless beauty." },
{ name: "Radiara Diamond Set", img: "/category/diamond7.jpg", price: 102000, rentPrice: 10700, code: "DMD407", description: "A radiant diamond set that blends luxury with modern charm." },
{ name: "Opulent Charm Diamond Set", img: "/category/diamond8.jpg", price: 104000, rentPrice: 10900, code: "DMD408", description: "An opulent diamond necklace designed to captivate." },
{ name: "Aurora Luxe Diamond Set", img: "/category/diamond9.jpg", price: 106000, rentPrice: 11100, code: "DMD409", description: "A breathtaking diamond masterpiece that shines with brilliance." },
],
  },

];

const CategoryPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleView = (product) => {
    navigate("/product", { state: { product } });
  };

  if (!selectedCategory) {
    return (
      <div className="showcase-container"> 
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="showcase-card"
            onClick={() => setSelectedCategory(cat)}
          >
            <img src={cat.banner} alt={cat.name} />
            <div className="showcase-name">{cat.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="container my-5">
      <Button variant="secondary" className="mb-4" onClick={() => setSelectedCategory(null)}>
        ← Back to Categories
      </Button>
      <h2 className="mb-4" style={{ color: "#530000ff" }}>
        {selectedCategory.name}
      </h2>
      <Row>
        {selectedCategory.products.map((product, idx) => (
          <Col md={4} sm={6} key={idx}>
            <Card className="mb-4 shadow-sm rounded-3 hover-card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body className="text-center">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <b>₹{product.price}</b>
                </Card.Text>
                <Button style={{backgroundColor:"#530000ff",border:"none"}} size="sm" onClick={() => handleView(product)}>
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryPage;
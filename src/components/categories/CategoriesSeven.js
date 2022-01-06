import {useContext} from "react";
import Masonry from "react-masonry-component";
import {Col, Container} from "react-bootstrap";
import {getSpecificCategories} from "@utils/product";
import {ProductsContext} from "@global/ProductsContext";
import {CategoryOne as Category} from "@components/category";

const CategoriesSeven = () => {
    const {products} = useContext(ProductsContext);
    const categories = getSpecificCategories(products, ["h-a","safia-hijab","mon-foulard-by-gnatou", "service-interprete"]);


    return (
        <div className="container-indent nomargin">
            <Container fluid>
                <Masonry className="row">
                    {categories.map((category, index) => (
                        <Col key={index} sm={6}>
                            <Category
                                category={category.toUpperCase()}
                                thumb={`/assets/index10-promo-img-0${index + 1}.png`}
                                className="tt-hover-01"
                            />
                        </Col>
                    ))}
                </Masonry>
            </Container>
        </div>
    );
};

export default CategoriesSeven;
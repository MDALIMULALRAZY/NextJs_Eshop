const LoadMore = ({className, onLoadMorHandler, productLength, productPerPage}) => {

    return (
        productLength >= productPerPage && (
            productLength !== productPerPage ? (
                <div className={`text-center tt_product_showmore ${className}`}>
                    <button className="btn btn-border" onClick={onLoadMorHandler}>VOIR PLUS</button>
                </div>
            ) : (
                <div className={`text-center tt_product_showmore ${className}`}>
                    <button className="btn btn-border01">AUCUN PRODUIT A AFFICHER</button>
                </div>
            )
        )
    );
};

export default LoadMore;
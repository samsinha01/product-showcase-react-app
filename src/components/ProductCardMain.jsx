import ProductCard from './ProductCard.jsx';

const ProductCardMain = ()=>{
    return(
        <>
            <section className='products py-3'>
                <div className='container'>
                <div className='inner-products d-flex gap-3 justify-content-center flex-wrap'>
                    <ProductCard />
                </div>
                </div>
            </section>
        </>
    )
}

export default ProductCardMain;
function ProductsPage() {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-medium mb-2">Cleanser</h3>
                    <img src="https://www.sephora.com/productimages/sku/s2002103-main-zoom.jpg?imwidth=315" alt="Cleanser" className="w-full mb-4"/>
                    <p className="text-gray-600">A pH-balanced, foaming gel cleanser that gently removes impurities without disrupting your skin’s natural moisture balance.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-medium mb-2">Exfoliate</h3>
                    <img src="https://cdn.shopify.com/s/files/1/0741/4585/7823/products/Dermalogica--Daily-Microfoliant-Dermalogica-1662735031.jpg?v=1681775107" className="w-full mb-4"/>
                    <p className="text-gray-600">An iconic exfoliating enzyme powder that activates upon contact with water, this powerful, yet gentle powder face scrub helps to even skin tone, clear blemishes and reduce the appearance of pores.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-medium mb-2">Treat</h3>
                    <img src="https://www.sephora.com/productimages/product/p481697-av-06-zoom.jpg" className="w-full mb-4"/>
                    <p className="text-gray-600">A hyaluronic acid serum that hydrates and helps prevent future dehydration</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    < h3 className="text-lg font-medium mb-2">Moisturizer</h3>
                    <img src="https://cdn.shopify.com/s/files/1/0209/5256/products/523_844afa8c-b499-4404-bb61-ef11f7e62453.jpeg?v=1381245014" className="w-full mb-4"/>
                    <p className="text-gray-600">This lightweight, oil-free moisturizer absorbs without a trace, creating an invisible barrier against moisture loss. Silk proteins join extracts of burdock, sage and cucumber to calm and hydrate the skin.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-medium mb-2">Eye Cream</h3>
                    <img src="https://cdn.mall.adeptmind.ai/https%3A%2F%2Fwww.sephora.com%2Fproductimages%2Fsku%2Fs2002301-main-zoom.jpg_640x.jpg" className="w-full mb-4"/>
                    <p className="text-gray-600">A visibly firming eye cream formulated with vitamins A, C, and E to support natural collagen production, smooth the look of fine lines, and protect against pollution.</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <h3 className="text-lg font-medium mb-2">Protect</h3>
                    <img src="https://cdnimg.lanaika.com/4618-large_default3/protection-solaire-protection50-sport-spf50-dermalogica.jpg" className="w-full mb-4"/>
                    <p className="text-gray-600">A multitasking SPF 40 mineral sunscreen with a blurring effect that supports healthy-looking pores and provides a hint of tint for an instantly radiant complexion.</p>
                </div>
            </div>



        </>
    )
}

export default ProductsPage
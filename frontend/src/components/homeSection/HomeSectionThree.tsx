import heroImage3 from "../../assets/images/Round coffee table_color 2 1.png"

const HomeSectionThree = () => {
    return (
        <div className="relative flex flex-wrap justify-center gap-8 bg-amberLight2 px-4 sm:px-6 md:px-12 py-8">
            <div className="flex flex-col items-start text-left space-y-4 w-full sm:w-1/2 lg:w-1/3">
                <img
                    src={heroImage3}
                    alt="Granite square side table"
                    className="w-full max-w-[400px] object-contain"
                />

            </div>
            <div>
                <p>New Arrivals</p>
                <p>Asgaard sofa</p>
                <button>Order Now</button>
            </div>
        </div>
    )
}

export default HomeSectionThree

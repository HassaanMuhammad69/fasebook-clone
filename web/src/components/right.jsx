import { BsFillCameraVideoFill,BsThreeDots } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";


import "./right.css";

const right = (props) => {
    return (
        <div className="rightside">

            <div className="Sponserd">

                <div className="spon"><h3>Sponsored</h3></div>

                <div className="ad">
                    <img src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0208103220_3.jpg?v=1658733583" alt="" width={150} />
                    <span className='set1'>
                    <h4 className='brandTextHeading'>Outfitters</h4>
                    <a className='brandText' href='https://outfitters.com.pk/products/f0206-106?variant=41492096057535&utm_source=Facebook&utm_campaign=All%20Placements%20%7C%20Remarketing%20%7C%20Catalog%20Sales%20%20%7C%2027-01-2021&utm_medium=paid&utm_term=All%20Website%20Visitors%20and%20Add%20to%20Carts%20-%20Last%20180%20Days%20%7C%20All%20Placements%20%7C%20All%20Men%27s%20Summer%20Product%20%7C%20All%20%7C%2018-65%2B&utm_content=All%20Men%27s%20Summer%20Collection%20%7C%2002-03-2021&fbclid=IwAR0MVIOKsoZdyx7dcKqnyoGtd0YfA6dfh1IvoFp8cppX_dfc-N7v9ONLOSc'>
                    Outfiiters.compk</a>
                    </span>
                </div>

                <hr/>

                <div className="ad1">
                    <img src="https://cdn.shopify.com/s/files/1/2290/7887/products/F0290106618_3_7f3402f6-44f0-48f1-894a-6d454b683e51.jpg?v=1660815436" alt="" width={150} />
                    <span className='set1'>
                    <h4 className='brandTextHeading'>NDURE</h4>
                    <a className='brandText' href='https://www.ndure.com/' >
                    ndure.com</a>
                    </span>
                </div>

            </div>

            <hr/>

            <div className="contacts">
                <div className='bar'>

                    <div>  <h3>Contacts</h3> </div>
                    <div className="icon">
                        <BsFillCameraVideoFill  className='video' ></BsFillCameraVideoFill>
                       <GiMagnifyingGlass  className='mag'></GiMagnifyingGlass>
                       <BsThreeDots  className='dots'></BsThreeDots>
                    </div>
                    
                </div>



                <div className='ContactDetails'>

                    <div className='cd'>
                        <h5 className='cdText'>Shoaib Ahmed</h5>
                    </div>

                    <div className='cd'>
                        <h5 className='cdText'>Zohair Sajjad</h5>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default right;
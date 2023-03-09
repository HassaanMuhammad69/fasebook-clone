import { AiFillHome, AiFillShop } from "react-icons/ai";
import { FaUserFriends, FaPaperclip } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


import AOTImage from '../img/AOT.jpg'
import NarutoImage from '../img/naruto.jpg'
import JjkImage from '../img/jjk.jpg'





import "./left.css";

const left = (props) => {
    return (
        <div className="leftSide">

            <div className="part1" >
                <div className="LiningAllp"> <AiFillHome className='i1' ></AiFillHome> <p>Home</p> </div>
            </div>
            <hr />

            <div className="part2">
                <div className="LiningAllp"><MdOutlineScreenshotMonitor className='i1' ></MdOutlineScreenshotMonitor> <p>Watch</p> </div>
                <div className="LiningAllp"><AiFillShop className='i1'></AiFillShop ><p>Market Place</p></div>
                <div className="LiningAllp"><FaUserFriends className='i1'></FaUserFriends><p>Friends</p></div>
                <div className="LiningAllp"><SiFacebookgaming className='i1'></SiFacebookgaming><p>Gaming</p></div>
                <div className="LiningAllp"><BsFillGrid3X3GapFill></BsFillGrid3X3GapFill><p>See all</p></div>
            </div>

            <hr />

            <div className="part3">
                <div><h3>Groups</h3></div>

                <div className="LiningAllp">
                    <img src={AOTImage} alt="" width={30} />
                    <p>Attack on titan</p>
                </div>

                <div className="LiningAllp">
                    <img src={NarutoImage} alt="" width={30} />
                    <p>Naruto</p>
                </div>

                <div className="LiningAllp">
                    <img src={JjkImage} alt="" width={30} />
                    <p>Jujutsu kaisen</p>
                </div>

                <div className="LiningAllp">
                    <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
                    <p>See all groups</p>
                </div>
            </div>

            <hr />

            <div className="part4">
                <div className="LiningAllp">
                    <FaPaperclip></FaPaperclip>
                    <p>See all shortcut</p>
                </div>
            </div>





        </div>
    )
}

export default left;    
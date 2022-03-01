import { Modal, Button } from 'antd';
import Sdata from "./Sdata";

const Detail = () => {

    const handleCancel = () => {
        window.history.back();
    };


    const id = window.location.pathname.split("-").pop();
    const data = Sdata[id];

    return (
        <Modal width="100vh" visible={true} onCancel={handleCancel} footer={null}>

            <div className="my-5">
                <h1 className="text-center"> {data.title} </h1>
            </div>


                <div className="text-center my-5">

              <h3> Services provided by the {data.title} </h3>    

                </div>


            <div className="my-2 text-center">
                <h6>  {data.info}   </h6>
                <Button>Expore more</Button>
            </div>



            <footer className="w-100 bg-light text-center">
                <p> © 2021 Netlink. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </Modal>
    )
}
export default Detail;
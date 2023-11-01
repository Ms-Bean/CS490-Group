import {BsFillCalendarMonthFill} from "react-icons/bs"
import {IoIosNotifications} from "react-icons/io"
import {CgProfile} from "react-icons/cg"


const DashBoard = () => {
    return (
        <div className="container-xl">
            <div className="d-flex flex-column vh-100" style={{border:"1px solid black"}}>
                <div className="m-2 d-flex" style={{border:"1px solid black"}}>
                    <div className="me-auto p-2" style={{border:"1px solid black"}}>
                        <h3>Hello Oscar</h3>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        <h4 className="my-1">30th October, 2023</h4>
                        <div className="mx-2">
                            <BsFillCalendarMonthFill size={30} style={{content:"Feb"}}/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        <IoIosNotifications size={30}/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        <CgProfile size={30}/>
                    </div>
                </div>
                <div className="m-2 row flex-grow-1" style={{border:"1px solid red", backgroundColor:"#E4E4E4"}}>
                    <div className="col-8" style={{border:"1px solid black"}}>
                        <div className="row" style={{border:"1px solid black", height:"25%"}}>
                            <div className="col-4 rounded d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Weight Info</p>
                                </div>
                            </div>
                            <div className="col-4 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Heart Rate</p>
                                </div>
                            </div>
                            <div className="col-4 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Total Workout Time</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{border:"1px solid black", height:"40%"}}>
                            <div className="col-8 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Workout Activity Line Graph</p>
                                </div>
                            </div>
                            <div className="col-4 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Workout Activity Pie Chart</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{border:"1px solid black", height:"35%"}}>
                            <div className="col-12 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Trainer Info</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4" style={{border:"1px solid black"}}>
                        <div className="row" style={{border:"1px solid black", height:"65%"}}>
                            <div className="col-12 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Goal List</p>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{border:"1px solid black", height:"35%"}}>
                            <div className="col-12 d-flex"  style={{border:"1px solid green"}}>
                                <div className="m-2 rounded flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid green"}}>
                                    <p>Insight</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoard;
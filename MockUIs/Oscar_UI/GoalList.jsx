import Button  from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css'

const GoalList = () => {
    return (
       <div className="container-fluid">
        <div className="row" style={{height:"70em"}}>
            {/* first container */}
            <div className="col-lg-3 d-flex flex-column" style={{backgroundColor:"#0290FF"}}>
                <div className="d-flex justify-content-around m-2" style={{border:"1px solid black"}}>
                    <div className="p-2">
                        <h3>My Goal List</h3>
                    </div>
                    <div className="p-2">
                        <h3>Icon</h3>
                    </div>
                    <div className="p-2">
                        <Button className="btn btn-light">+Add</Button>
                    </div>
                </div>
                <div className="m-2 h-25 d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                    <h3 >Achievement Progress Box</h3>
                </div>
                <div className="d-flex flex-column m-2 flex-grow-1 justify-content-around">
                    <div className="p-2 h-25 d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        Achievement 1
                    </div>
                    <div className="p-2 h-25 d-flex justify-content-center align-items-center" h-25 d-flex justify-content-center align-items-center style={{border:"1px solid black"}}>
                        Achievement 2
                    </div>
                    <div className="p-2 h-25 d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        Achievement 2
                    </div>
                </div>
            </div>
            {/* second container */}
            <div className="col-lg-6 bg-light d-flex flex-column">
                <div className="m-2" style={{borderBottom:"1px solid white"}}>
                    <h1 className="p-2">Goal Details</h1>
                </div>
                <div className="m-2 d-flex flex-column" style={{border:"1px solid black"}}>
                    <div className="p-2" style={{border:"1px solid black"}}>
                        <h2>
                            Goal Title
                        </h2>
                    </div>
                    <div className="p-2" style={{border:"1px solid black"}}>
                        <h3>
                            Goal Deadline
                        </h3>
                    </div>
                    <div className="p-2" style={{border:"1px solid black"}}>
                        <p>Goal description - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
                <div className="mx-2 my-5 d-flex justify-content-between" style={{border:"1px solid black", height:"5em"}}>
                    <div className="flex-fill d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        <h3>Most Priority Box</h3>
                    </div>
                    <div className="flex-fill d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                        <h3>Progress Box</h3>
                    </div>
                </div>
                <div className="m-2 d-flex flex-column flex-grow-1"  style={{border:"1px solid black", height:"10em"}}>
                    <div className="p-2" style={{border:"1px solid black"}}>
                        <h3>You Need To Do</h3>
                    </div>
                    <div className="d-flex flex-column flex-grow-1" style={{border:"1px solid black"}}>
                        <div className="d-flex m-3">
                            <div className="rounded-circle" style={{border:"1px solid black", width:"5em"}}>

                            </div>
                            <div className="mx-5 flex-grow-1" style={{border:"1px solid black", width:"5em"}}>
                                <h3>Goal Title</h3>
                                <p>Goal Deadline</p>
                            </div>
                        </div>
                        <div className="d-flex m-3">
                            <div className="rounded-circle" style={{border:"1px solid black", width:"5em"}}>

                            </div>
                            <div className="mx-5 flex-grow-1" style={{border:"1px solid black", width:"5em"}}>
                                <h3>Goal Title</h3>
                                <p>Goal Deadline</p>
                            </div>
                        </div>
                        <div className="d-flex m-3">
                            <div className="rounded-circle bg-primary" style={{border:"1px solid black", width:"5em"}}>

                            </div>
                            <div className="mx-5 flex-grow-1" style={{border:"1px solid black", width:"5em"}}>
                                <h3>Goal Title</h3>
                                <p>Goal Deadline</p>
                            </div>
                        </div>
                        <div className="d-flex m-3">
                            <div className="rounded-circle bg-primary" style={{border:"1px solid black", width:"5em"}}>

                            </div>
                            <div className="mx-5 flex-grow-1" style={{border:"1px solid black", width:"5em"}}>
                                <h3>Goal Title</h3>
                                <p>Goal Deadline</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* third container */}
            <div className="col-lg-3 bg-light d-flex flex-column">
                <div className="m-2 d-flex flex-column justify-content-center align-items-center"  style={{border:"1px solid black", background:"linear-gradient(90deg, rgba(243,242,247,1) 3%, rgba(245,245,245,1) 57%, rgba(255,255,255,1) 100%)"}}>
                    <div className="m-3 d-flex justify-content-center align-items-center" style={{border:"1px solid black", width:"10em", height:"10em"}}>
                        <h3>Profile Pic</h3>
                    </div>
                    <div style={{border:"1px solid black"}}>
                        <h3 className="p-1">Profile Name</h3>
                    </div>
                    <div className="m-3">
                        <Button>View Profile</Button>
                    </div>
                </div>
                <div className="m-2 d-flex justify-content-center align-items-center" style={{border:"1px solid black", height:"35%"}}>
                    <h2>Timeline</h2>
                </div>
                <div className="m-2 flex-grow-1 d-flex justify-content-center align-items-center" style={{border:"1px solid black"}}>
                    <h2>Pie Chart</h2>
                </div>
            </div>
        </div>
       </div>
    )
}

export default GoalList;

import "./UserInfo.css";
function Timeline(props) {
  
  var inconsitent = false;
    if (!props.user || !props.user.timeline) {
        return <div>Loading...</div>;
    }

    console.log(props.user, "hi");
    function convertToHourMinFormat(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h${mins}m`;
    }

    function getTimeDifferenceInMinutes(start,end) {
        const startDate = new Date(`1/1/2022 ${start}`);
        const endDate = new Date(`1/1/2022 ${end}`);
        const diffInMs = endDate.getTime() - startDate.getTime();
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        return diffInMinutes;
    }
    const settheInconsitent = () =>{
    inconsitent=true
    }

    let totalPresentTime = 0;
    let totalAbsentTime = 0;


    return (
        <>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form >
                            <div className="input-box">
                            <p> Scan Type </p>
                            <input type="text" value={"fingerprint"} name="scanType"/>
                            </div>
                            <div className="input-box">
                            <p> In Time </p>
                            <input type="text" value={"7:14 am"} name="inTime"  />
                            </div>
                            <div className="input-box">
                            <p>Out Time</p>
                            <input type="text" value={"8:14 pm"} name="outTime"  />
                            </div>
                            <div className="input-box mt-3">
                                <input type="submit"  />
                            </div>
                            </form>
                        </div>
                    
                    </div>
                </div>
            </div>

            <div class="col-lg-9">
                <div class="row ring">
                    <div class="circle"></div>
                </div>
                <div class="row">
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page">
                                    Admin 
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Employees
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">
                                    Tech Inject
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div class="row outer-box">
                    <div class="col-lg-11">
                        <div class="row inner-box">
                            <div class="col-lg-7 box">
                                <h4 class="text-center mt-3 text-danger">Timeline</h4>
                                <div className="row">
                                    <div className="timeline col-lg-8 offset-lg-2 timelineBox">
                                        {props.user.timeline.map(
                                            (vertex, index, prevTime, newTime) => (
                                                <>
                                                    {index > 0 && (
                                                        <div className="edge">
                                                            <div className="cal">
                                                                {
                                                                    props.user.timeline[index - 1].inTime
                                                                        ? (prevTime =
                                                                            props.user.timeline[index - 1].inTime)
                                                                        : (prevTime =
                                                                            props.user.timeline[index - 1].outTime)}
                                                                {
                                                                    vertex.outTime ? newTime = vertex.outTime : newTime = vertex.inTime
                                                                }

                                                                {props.user.timeline[index - 1].inTime
                                                                    ? vertex.outTime
                                                                        ? (totalPresentTime += getTimeDifferenceInMinutes(prevTime, newTime))
                                                                        : settheInconsitent(true)
                                                                    : props.user.timeline[index - 1].outTime
                                                                        ? vertex.inTime
                                                                            ? (totalAbsentTime += getTimeDifferenceInMinutes(prevTime, newTime))
                                                                            : settheInconsitent(true)
                                                                        : null
                                                                }

                                                            </div>

                                                            <div className="line" style={{ height: `${getTimeDifferenceInMinutes(prevTime, newTime) / 3}px` }}>

                                                            </div>

                                                        </div>
                                                    )}
                                                    <div className="vertex">
                                                        <span className="date">
                                                            {vertex.inTime ? vertex.inTime : vertex.outTime}{" "}
                                                        </span>
                                                        <div
                                                            className={`dot  ${vertex.outTime ? "dot-color-out" : "dot-color-in"
                                                                }`}
                                                        >
                                                            {" "}
                                                        </div>
                                                        <div className="data">
                                                            {" "}
                                                            {vertex.inTime ? "Punch In" : "Punch Out"}{" "}
                                                            <div className="edit-btn " data-toggle="modal" data-target="#exampleModal" >  Edit </div>{" "}
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 box2">
                                <div class="day-box">
                                    <h4 class="text-center mt-3 text-danger">Day Details</h4>
                                    <h5>Total Present Time: {convertToHourMinFormat(totalPresentTime)}</h5>
                                    <h5>Total Absent Time: {convertToHourMinFormat(totalAbsentTime)}</h5>
                                    <h5>Total Exemption : </h5>
                                    <h5>Total Deduction:</h5>
                                </div>
                            </div>
                            <div class="status">
                                <h5>Status : {inconsitent ? "Inclusive" : "Present"}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Timeline;

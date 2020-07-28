import React from "react";

const LogoutModal = (props: any) => {
    return (
        <div className="modal"  role="dialog" id="exampleModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <p>Are you Sure?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.logout}>Yes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
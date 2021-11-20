import React from 'react';

const ProfileEdit = () => {
    return (
       
        <div id="edit">
        <form>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Full name</label>
                <div className="col-lg-9">
                    <input className="form-control" type="text" value="Serajus Salekin" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Email</label>
                <div className="col-lg-9">
                    <input className="form-control" type="email" value="salekin.techforing@gmail.com" />
                </div>
            </div>
            
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Nationality</label>
                <div className="col-lg-9">
                    <input className="form-control" type="text" value="Bangladesh" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">NID No.</label>
                <div className="col-lg-9">
                    <input className="form-control" type="number" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Change profile</label>
                <div className="col-lg-9">
                    <input className="form-control" type="file" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Address</label>
                <div className="col-lg-9">
                    <input className="form-control" type="text" value="" placeholder="Street" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-6">
                    <input className="form-control" type="text" value="" placeholder="City" />
                </div>
                <div className="col-lg-3">
                    <input className="form-control" type="text" value="" placeholder="State" />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Password</label>
                <div className="col-lg-9">
                    <input className="form-control" type="password" value="11111122333" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label">Confirm password</label>
                <div className="col-lg-9">
                    <input className="form-control" type="password" value="11111122333" />
                </div>
            </div>
            <div className="form-group row">
                <label className="col-lg-3 col-form-label form-control-label"></label>
                <div className="col-lg-9">
                    <input type="reset" className="btn btn-secondary me-2" value="Cancel" />
                    <input type="button" className="btn btn-navy" value="Save Changes" />
                </div>
            </div>
        </form>
    </div>
    );
};

export default ProfileEdit;
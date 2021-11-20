import React from 'react';

const ProfileActivity = () => {
    return (
        <div className="col-md-12">
                <h5 className="mt-2 mb-3"><span className="fa fa-clock-o ion-clock float-right"></span> Recent Activity</h5>
                <table className="table table-hover table-striped">
                    <tbody>
                        <tr>
                            <td>
                                <strong>Abby</strong> joined ACME Project Team in <strong>`Collaboration`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Gary</strong> deleted My Board1 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Kensington</strong> deleted MyBoard3 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>John</strong> deleted My Board1 in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Skell</strong> deleted his post Look at Why this is.. in <strong>`Discussions`</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
};

export default ProfileActivity;
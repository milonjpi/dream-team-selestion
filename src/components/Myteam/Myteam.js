import React from 'react';

const Myteam = (props) => {
    const selectedPlayers = props.playerCart;
    const totalCost = selectedPlayers.reduce((total, salary) => total+salary.salary, 0);
    return (
        <div className="px-3 shadow mt-2">
            <div className="py-3">
                <h4 className="bg-success p-2">Total Player Added: {selectedPlayers.length}</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                    {selectedPlayers.map(player => 
                        <tr>
                            <td>{player.name}</td>
                            <td>{player.salary} &#2547;</td>
                        </tr>
                        
                     )}
                    </tbody>
                </table>
                <h4 className="text-danger">Total Budget: {totalCost} &#2547;</h4>
            </div>  
        </div>
    );
};



export default Myteam;
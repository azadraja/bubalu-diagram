import React from 'react';

class Diagram extends React.Component {

static defaultProps = {
    ds : [
        {"displayName" : "S4 HANA", displaySequence:0},
        {"displayName" : "BW/4", displaySequence:1},
        {"displayName" : "SAC", displaySequence:2}
    ]
};

render() {
    let { ds } = this.props;
    ds = ds.sort((a,b) => (a.displaySequence || 0) - (b.displaySequence || 0));
    let rightArrow = <div className="rightArrow" />;
    let nodes = ds.map(e => <div className="insideContainer" ><div className='eachNode'>{e.displayName}</div>{rightArrow}</div>)
    return(<div className="diagramComponentContainer">
            <div className="startNode" />
            {rightArrow}
            {nodes}
            <div className="endNodeContainer"><div className="endNode" /></div>
            </div>);
}
}

export default Diagram;
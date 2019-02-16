import React, { Component } from 'react';
import {
    Card, CardBody,
    CardTitle, ButtonGroup, Button, CardText
} from 'reactstrap';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      lessons: state.lessons
    }
  }
  
class LessonComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lessons: [{
                    id: 0,
                    name: 'Electronics and Devices',
                    description: 'Electronic devices are open systems with respect to electron flow, and a theoretical description of such devices should be done in terms of statistically mixed states which cast the problem in terms of quantum kinetic theory [100]',
                    sections: [
                        {
                            id: 0,
                            name: 'Diodes',
                            description: 'A diode is used to block the electric current flow in one direction, i.e. in forward direction and to block in reverse direction. This principle of diode makes it work as a Rectifier. ... A diode is also used as a Switch. It helps a faster ON and OFF for the output that should occur in a quick rate.',
                        },
                        {
                            id: 1,
                            name: 'Transistor',
                            description: 'A transistor is a semiconductor device used to amplify or switch electronic signals and electrical power. It is composed of semiconductor material usually with at least three terminals for connection to an external circuit.',
                        },
                        {
                            id: 2,
                            name: 'Integrated Circuits',
                            description: 'An integrated circuit, or IC, is small chip that can function as an amplifier, oscillator, timer, microprocessor, or even computer memory. An IC is a small wafer, usually made of silicon, that can hold anywhere from hundreds to millions of transistors, resistors, and capacitors',
                        },
                    ]

                }],
          };

          this.handleLessonSelection = this.handleLessonSelection.bind(this);
    }

    handleLessonSelection(Section){
        this.setState({ selectedSectionName: Section.name,
        selectedSectionDescription: Section.description})
    }
    render() {
        const lessons = this.props.lessons.map((lesson) => {
            return (
                <div key={lesson.id}>
                    <Card>
                        <CardBody>
                            <CardTitle>{lesson.name}</CardTitle>
                            
                            <CardText>
                            <b>{this.state.selectedSectionName}</b><br></br>
                            {this.state.selectedSectionDescription}
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        const sections = this.props.lessons[0].sections.map((sec) => {
            return (
                <Button key={sec.id} onClick={() => this.handleLessonSelection(sec)}>{sec.name}</Button>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 col-sm-4">
                        <p> Welcom Jeeva!!!</p>

                    </div>
                    <div className="col-6 col-sm-4">
                        {lessons}
                    </div>
                    <div className="col-6 col-sm-4">
                    <ButtonGroup vertical>
                    {sections} 
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(LessonComponent));
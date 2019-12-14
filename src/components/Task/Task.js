import React, { Component } from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";

// has to be class-based component because it deals with state

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {

            task: "",
            list: [],
            
        };
        
        // bind handler functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        
        // why is it doing something with the list array every time I type a new character?
        this.setState({ task: e.currentTarget.value });
    }

    handleSubmit(e) {
        
        // deconstruct
        let { task, list } = this.state;
        
        e.preventDefault();
        
        this.setState({ 
            task: "",
            list: [...list, task],
        });

    }

    render() {

    let { task, list } = this.state;

    console.log(list);

        return (
            <React.Fragment>
                <Form 
                    style={ { padding: "60px 0"} }
                    onSubmit={ this.handleSubmit }
                >
                    <Form.Group>
                        <h3 style={{ color: "green" }}>Add a new task</h3>
                        <Form.Control
                            onChange={ this.handleChange }
                            placeholder="Enter a new task ..."
                            value={ task }
                        />
                    </Form.Group>

                    <Button 
                        type="submit" 
                        variant="btn btn-success"
                    >Add Task</Button>
                </Form>
            
                <Card>
                    <Card.Header style={{ 
                        fontWeight: "bold",
                        fontSize: "1.2em",
                        }}
                    >To do list</Card.Header>
                    
                    <ListGroup 
                        className="list-group"
                        style={{ listStyle: "none" }}
                    >
                        { list.length === 0 ? 
                                <ListGroup.Item>You're all caught up!</ListGroup.Item> :
                            
                            list.map((value, index) => (
                                <ListGroup.Item key={ index }>{ value }</ListGroup.Item>
                            )) 
                        }
                    </ListGroup>
                
                </Card>
            
            </React.Fragment>
            
        ); 
    }
}

export default Task;